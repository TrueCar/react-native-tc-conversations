import React from "react";
import axios from "axios";
import { Client as ConversationsClient } from "@twilio/conversations";
import { Client } from "@twilio/conversations/lib/client";
import { IMessage } from "react-native-gifted-chat";
import { Message } from "@twilio/conversations/lib/message";

import {
  formatMessageForGiftedChat,
  formatMessagesForGiftedChat,
} from "../../../utils/messageUtils";
import { IConversation } from "../types";
import { createRequiredContext } from "./requiredContext";

export type TwilioConversationsContextType = {
  availableConversations: IConversation[] | [];
  conversationsLoaded: boolean;
  identity: string;
  loadConversation: (conversation: IConversation) => void;
  onMessageSend: (messages: IMessage[]) => void;
  onConversationSelected: (conversation: IConversation | null) => Promise<void>;
  selectedConversation: IConversation | null;
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<IConversation | null>
  >;
  unreadUsers: number;
  updateConversation: (conversation: IConversation) => void;
};

const [
  Provider,
  useTwilioConversations,
] = createRequiredContext<TwilioConversationsContextType>(
  "TwilioConversations"
);

type Props = {
  children: React.ReactNode;
  tokenEndpoint: string;
  prospectId?: string | undefined;
};

const TwilioConversationsProvider = ({
  children,
  tokenEndpoint,
  prospectId,
}: Props) => {
  const [unreadUsers, setUnreadUsers] = React.useState(0);
  const [availableConversations, setAvailableConversations] = React.useState<
    IConversation[] | []
  >([]);
  const [conversations, setConversations] = React.useState<
    Map<string, IConversation>
  >(new Map());
  const [currentTokenEndpoint, setCurrentTokenEndpoint] = React.useState(
    tokenEndpoint
  );
  const [conversationsLoaded, setConversationsLoaded] = React.useState(false);
  const [
    selectedConversation,
    setSelectedConversation,
  ] = React.useState<IConversation | null>(null);

  const [client, setClient] = React.useState<Client | null>(null);
  const [identity, setIdentity] = React.useState("");

  const getTokenData = React.useCallback(async () => {
    const tokenResp = axios.get(tokenEndpoint);
    return tokenResp;
  }, [tokenEndpoint]);

  const handleExpiredToken = React.useCallback(async () => {
    const tokenResp = await getTokenData();
    await client?.updateToken(tokenResp.data.token);
  }, [client, getTokenData]);

  const getMessages = React.useCallback(
    async (conversation: IConversation | null) => {
      if (!conversation) {
        return [];
      }
      const messages = await conversation.getMessages();
      const displayableMessages = messages.items.filter(
        // @ts-expect-error
        (m) => !m.attributes.to || m.attributes.to === identity
      );

      return formatMessagesForGiftedChat(displayableMessages);
    },
    [identity]
  );

  const mapTwilioConversationToCommsConversation = React.useCallback(
    async (conversation: IConversation) => {
      const title =
        conversation?.attributes?.friendly_name_dealership ||
        conversation?.friendlyName ||
        conversation?.uniqueName;
      conversation.title = title;
      conversation.id = conversation.sid;
      const messages = await getMessages(conversation);
      conversation.messages = messages;
      conversation.mostRecentMessage = messages[0]?.text;
      conversation.unreadMessagesCount =
        (await conversation.getUnreadMessagesCount()) || 0;
      return conversation;
    },
    [getMessages]
  );

  const loadConversation = React.useCallback(
    async (conversation: IConversation) => {
      const mappedConversation = await mapTwilioConversationToCommsConversation(
        conversation
      );
      setConversations((curr: Map<string, IConversation>) =>
        curr
          ? new Map(curr.set(mappedConversation.sid, mappedConversation))
          : new Map()
      );
    },
    [mapTwilioConversationToCommsConversation]
  );

  const updateConversation = React.useCallback(
    (newConversation: IConversation) =>
      setConversations(
        (curr: Map<string, IConversation>) =>
          new Map(curr.set(newConversation.sid, newConversation))
      ),
    []
  );

  const renderNewMessage = React.useCallback(
    ({
      author,
      conversationId,
      newMessage,
    }: {
      author: string;
      conversationId: string;
      newMessage: IMessage;
    }) => {
      setConversations((curr: Map<string, IConversation>) => {
        const conversation = curr.get(conversationId);
        if (!conversation) {
          return curr;
        }
        let messages = conversation.messages;
        const lastMessage = messages[0];
        if (lastMessage?.pending) {
          messages[0] = newMessage;
        } else {
          messages = [newMessage, ...conversation.messages];
        }
        conversation.mostRecentMessage = messages[0].text;
        conversation.messages = messages;
        if (conversation.lastMessage) {
          conversation.lastMessage.dateCreated = new Date(newMessage.createdAt);
        }
        if (!author.includes("dealership")) {
          conversation.unreadMessagesCount =
            conversation.unreadMessagesCount + 1;
        } else {
          conversation.unreadMessagesCount = 0;
          conversation.setAllMessagesRead();
        }
        return new Map(curr.set(conversation.sid, conversation));
      });
    },
    []
  );

  const messageAdded = React.useCallback(
    async (message: Message) => {
      const newMessage = await formatMessageForGiftedChat(message);

      renderNewMessage({
        author: message.author,
        conversationId: message.conversation.sid,
        newMessage,
      });
    },
    [renderNewMessage]
  );

  React.useEffect(() => {
    if (conversationsLoaded) {
      const arr = Array.from(conversations, ([, value]) => value).sort(
        (a, b) =>
          (b?.lastMessage?.dateCreated || b.dateCreated) -
          (a?.lastMessage?.dateCreated || a.dateCreated)
      );
      setAvailableConversations(arr);
    }
  }, [conversations, conversationsLoaded]);

  const onConversationSelected = React.useCallback(
    async (conversation: IConversation | null) => {
      if (conversation) {
        conversation.unreadMessagesCount = 0;
        if (conversation.lastReadMessageIndex === null) {
          conversation.advanceLastReadMessageIndex(0);
        }
      }
      setSelectedConversation(conversation);
    },
    []
  );

  const loadUniqueConversation = React.useCallback(
    async (client: Client) => {
      if (prospectId) {
        const uniqueConversation = await client.getConversationByUniqueName(
          `prospect_conversation_${prospectId}`
        );

        if (uniqueConversation) {
          const commsConversation = await mapTwilioConversationToCommsConversation(
            // @ts-expect-error
            uniqueConversation
          );

          return {
            unreadUsers: 0,
            availableConversations: [commsConversation],
            selectedConversation: commsConversation,
          };
        }
      }
      return {
        unreadUsers: 0,
        availableConversations: [],
        selectedConversation: null,
      };
    },
    [prospectId, mapTwilioConversationToCommsConversation]
  );

  const loadMultipleConversations = React.useCallback(
    async (client: Client) => {
      let subscribedConversations = await client.getSubscribedConversations();
      let aggConversations = [...subscribedConversations.items];
      while (subscribedConversations.hasNextPage) {
        // eslint-disable-next-line
        subscribedConversations = await subscribedConversations.nextPage();
        aggConversations = aggConversations.concat(
          subscribedConversations.items
        );
      }

      let unreadMessagesUsersCount = 0;
      const adaptedConversationPromises = aggConversations.map(async (c) => {
        if ((await c.getUnreadMessagesCount()) && c.lastReadMessageIndex) {
          unreadMessagesUsersCount += 1;
        }
        // @ts-expect-error
        return mapTwilioConversationToCommsConversation(c);
      });
      const adaptedConversations = await Promise.all(
        adaptedConversationPromises
      );
      adaptedConversations.sort(
        (a, b) =>
          (b?.lastMessage?.dateCreated || b.dateCreated) -
          (a?.lastMessage?.dateCreated || a.dateCreated)
      );
      return {
        unreadUsers: unreadMessagesUsersCount,
        availableConversations: adaptedConversations,
        selectedConversation: null,
      };
    },
    [mapTwilioConversationToCommsConversation]
  );

  const loadConversations = React.useCallback(
    async (client: Client) => {
      const conversationsResult = prospectId
        ? await loadUniqueConversation(client)
        : await loadMultipleConversations(client);

      setUnreadUsers(conversationsResult.unreadUsers);
      setAvailableConversations(conversationsResult.availableConversations);
      if (conversationsResult.selectedConversation) {
        setSelectedConversation(conversationsResult.selectedConversation);
      }
      setConversationsLoaded(true);
    },
    [prospectId, loadUniqueConversation, loadMultipleConversations]
  );

  const init = React.useCallback(async () => {
    console.log("==============> fetching token");
    const tokenResp = await getTokenData();
    console.log("==============> finished fetching token", tokenResp.data);
    const identity = tokenResp.data.identity;
    const token = tokenResp.data.token;
    setIdentity(identity);
    console.log("==============> initializing client");
    const twilioClient = await ConversationsClient.create(token);
    console.log("==============> client initialized");
    twilioClient.on("conversationAdded", loadConversation);
    twilioClient.on("messageAdded", messageAdded);
    twilioClient.on("tokenAboutToExpire", handleExpiredToken);
    twilioClient.on("tokenExpired", handleExpiredToken);
    setClient(twilioClient);
    loadConversations(twilioClient);
  }, [
    getTokenData,
    handleExpiredToken,
    loadConversation,
    loadConversations,
    messageAdded,
  ]);

  React.useEffect(() => {
    if (tokenEndpoint) {
      if (!client && !identity) {
        init();
      } else if (tokenEndpoint !== currentTokenEndpoint) {
        // re-initialize when the dealer changes
        client?.removeAllListeners();
        client?.off("messageAdded", messageAdded);
        client?.off("conversationAdded", loadConversation);
        client?.off("tokenAboutToExpire", handleExpiredToken);
        client?.off("tokenExpired", handleExpiredToken);
        setConversationsLoaded(false);
        setConversations(new Map());
        setAvailableConversations([]);
        setCurrentTokenEndpoint(tokenEndpoint);
        setClient(null);
        init();
      }
    }
  }, [
    tokenEndpoint,
    client,
    identity,
    init,
    currentTokenEndpoint,
    messageAdded,
    loadConversation,
    handleExpiredToken,
  ]);

  const onMessageSend = React.useCallback(
    (newMessages = []) => {
      const newMessage = newMessages[0];

      if (newMessage && selectedConversation) {
        renderNewMessage({
          author: identity,
          conversationId: selectedConversation.sid,
          newMessage: { ...newMessage, user: { _id: identity }, pending: true },
        });

        if (newMessage.hasOwnProperty("text")) {
          selectedConversation.sendMessage(newMessage.text);
        } else if (newMessage.hasOwnProperty("image")) {
          const formData = new FormData();
          formData.append("file", {
            uri: newMessage.image,
            type: "image/jpeg",
            name: "image.jpg",
          });
          selectedConversation.sendMessage(formData);
        }

        selectedConversation.setAllMessagesRead();
      }
    },
    [identity, selectedConversation, renderNewMessage]
  );

  const returnValues = {
    availableConversations,
    conversationsLoaded,
    getMessages,
    identity,
    loadConversation,
    onConversationSelected,
    onMessageSend,
    selectedConversation,
    setSelectedConversation,
    unreadUsers,
    updateConversation,
  };

  return <Provider value={returnValues}>{children}</Provider>;
};

export { TwilioConversationsProvider, useTwilioConversations };
