import React from "react";
import axios from "axios";
import { Client as ConversationsClient } from "@twilio/conversations";
import { formatMessageForGiftedChat, formatMessagesForGiftedChat, } from "../../../utils/messageUtils";
import { createRequiredContext } from "./requiredContext";
const [Provider, useTwilioConversations,] = createRequiredContext("TwilioConversations");
const TwilioConversationsProvider = ({ children, tokenEndpoint, prospectId, }) => {
    const [unreadUsers, setUnreadUsers] = React.useState(0);
    const [availableConversations, setAvailableConversations] = React.useState([]);
    const [conversations, setConversations] = React.useState(new Map());
    const [currentTokenEndpoint, setCurrentTokenEndpoint] = React.useState(tokenEndpoint);
    const [conversationsLoaded, setConversationsLoaded] = React.useState(false);
    const [selectedConversation, setSelectedConversation,] = React.useState(null);
    const [client, setClient] = React.useState(null);
    const [identity, setIdentity] = React.useState("");
    const getTokenData = React.useCallback(async () => {
        const tokenResp = axios.get(tokenEndpoint);
        return tokenResp;
    }, [tokenEndpoint]);
    const handleExpiredToken = React.useCallback(async () => {
        const tokenResp = await getTokenData();
        await (client === null || client === void 0 ? void 0 : client.updateToken(tokenResp.data.token));
    }, [client, getTokenData]);
    const getMessages = React.useCallback(async (conversation) => {
        if (!conversation) {
            return [];
        }
        const messages = await conversation.getMessages();
        const displayableMessages = messages.items.filter(
        // @ts-expect-error
        (m) => !m.attributes.to || m.attributes.to === identity);
        return formatMessagesForGiftedChat(displayableMessages);
    }, [identity]);
    const mapTwilioConversationToCommsConversation = React.useCallback(async (conversation) => {
        var _a, _b;
        const title = ((_a = conversation === null || conversation === void 0 ? void 0 : conversation.attributes) === null || _a === void 0 ? void 0 : _a.friendly_name_dealership) || (conversation === null || conversation === void 0 ? void 0 : conversation.friendlyName) || (conversation === null || conversation === void 0 ? void 0 : conversation.uniqueName);
        conversation.title = title;
        conversation.id = conversation.sid;
        const messages = await getMessages(conversation);
        conversation.messages = messages;
        conversation.mostRecentMessage = (_b = messages[0]) === null || _b === void 0 ? void 0 : _b.text;
        conversation.unreadMessagesCount =
            (await conversation.getUnreadMessagesCount()) || 0;
        return conversation;
    }, [getMessages]);
    const loadConversation = React.useCallback(async (conversation) => {
        const mappedConversation = await mapTwilioConversationToCommsConversation(conversation);
        setConversations((curr) => curr
            ? new Map(curr.set(mappedConversation.sid, mappedConversation))
            : new Map());
    }, [mapTwilioConversationToCommsConversation]);
    const updateConversation = React.useCallback((newConversation) => setConversations((curr) => new Map(curr.set(newConversation.sid, newConversation))), []);
    const renderNewMessage = React.useCallback(({ author, conversationId, newMessage, }) => {
        setConversations((curr) => {
            const conversation = curr.get(conversationId);
            if (!conversation) {
                return curr;
            }
            let messages = conversation.messages;
            const lastMessage = messages[0];
            if (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.pending) {
                messages[0] = newMessage;
            }
            else {
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
            }
            else {
                conversation.unreadMessagesCount = 0;
                conversation.setAllMessagesRead();
            }
            return new Map(curr.set(conversation.sid, conversation));
        });
    }, []);
    const messageAdded = React.useCallback((message) => {
        const newMessage = formatMessageForGiftedChat(message);
        renderNewMessage({
            author: message.author,
            conversationId: message.conversation.sid,
            newMessage,
        });
    }, [renderNewMessage]);
    React.useEffect(() => {
        if (conversationsLoaded) {
            const arr = Array.from(conversations, ([, value]) => value).sort((a, b) => {
                var _a, _b;
                return (((_a = b === null || b === void 0 ? void 0 : b.lastMessage) === null || _a === void 0 ? void 0 : _a.dateCreated) || b.dateCreated) -
                    (((_b = a === null || a === void 0 ? void 0 : a.lastMessage) === null || _b === void 0 ? void 0 : _b.dateCreated) || a.dateCreated);
            });
            setAvailableConversations(arr);
        }
    }, [conversations, conversationsLoaded]);
    const onConversationSelected = React.useCallback(async (conversation) => {
        if (conversation) {
            conversation.unreadMessagesCount = 0;
            if (conversation.lastReadMessageIndex === null) {
                conversation.advanceLastReadMessageIndex(0);
            }
        }
        setSelectedConversation(conversation);
    }, []);
    const loadUniqueConversation = React.useCallback(async (client) => {
        if (prospectId) {
            const uniqueConversation = await client.getConversationByUniqueName(`prospect_conversation_${prospectId}`);
            if (uniqueConversation) {
                const commsConversation = await mapTwilioConversationToCommsConversation(
                // @ts-expect-error
                uniqueConversation);
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
    }, [prospectId, mapTwilioConversationToCommsConversation]);
    const loadMultipleConversations = React.useCallback(async (client) => {
        let subscribedConversations = await client.getSubscribedConversations();
        let aggConversations = [...subscribedConversations.items];
        while (subscribedConversations.hasNextPage) {
            // eslint-disable-next-line
            subscribedConversations = await subscribedConversations.nextPage();
            aggConversations = aggConversations.concat(subscribedConversations.items);
        }
        let unreadMessagesUsersCount = 0;
        const adaptedConversationPromises = aggConversations.map(async (c) => {
            if ((await c.getUnreadMessagesCount()) && c.lastReadMessageIndex) {
                unreadMessagesUsersCount += 1;
            }
            // @ts-expect-error
            return mapTwilioConversationToCommsConversation(c);
        });
        const adaptedConversations = await Promise.all(adaptedConversationPromises);
        adaptedConversations.sort((a, b) => {
            var _a, _b;
            return (((_a = b === null || b === void 0 ? void 0 : b.lastMessage) === null || _a === void 0 ? void 0 : _a.dateCreated) || b.dateCreated) -
                (((_b = a === null || a === void 0 ? void 0 : a.lastMessage) === null || _b === void 0 ? void 0 : _b.dateCreated) || a.dateCreated);
        });
        return {
            unreadUsers: unreadMessagesUsersCount,
            availableConversations: adaptedConversations,
            selectedConversation: null,
        };
    }, [mapTwilioConversationToCommsConversation]);
    const loadConversations = React.useCallback(async (client) => {
        const conversationsResult = prospectId
            ? await loadUniqueConversation(client)
            : await loadMultipleConversations(client);
        setUnreadUsers(conversationsResult.unreadUsers);
        setAvailableConversations(conversationsResult.availableConversations);
        if (conversationsResult.selectedConversation) {
            setSelectedConversation(conversationsResult.selectedConversation);
        }
        setConversationsLoaded(true);
    }, [prospectId, loadUniqueConversation, loadMultipleConversations]);
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
            }
            else if (tokenEndpoint !== currentTokenEndpoint) {
                // re-initialize when the dealer changes
                client === null || client === void 0 ? void 0 : client.removeAllListeners();
                client === null || client === void 0 ? void 0 : client.off("messageAdded", messageAdded);
                client === null || client === void 0 ? void 0 : client.off("conversationAdded", loadConversation);
                client === null || client === void 0 ? void 0 : client.off("tokenAboutToExpire", handleExpiredToken);
                client === null || client === void 0 ? void 0 : client.off("tokenExpired", handleExpiredToken);
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
    const onMessageSend = React.useCallback((newMessages = []) => {
        const mostRecentMessage = newMessages[0];
        if (mostRecentMessage && selectedConversation) {
            renderNewMessage({
                author: mostRecentMessage.user.name,
                conversationId: selectedConversation.sid,
                newMessage: { ...mostRecentMessage, pending: true },
            });
            selectedConversation.setAllMessagesRead();
            selectedConversation.sendMessage(mostRecentMessage.text);
        }
    }, [selectedConversation, renderNewMessage]);
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
//# sourceMappingURL=TwilioConversationsProvider.js.map