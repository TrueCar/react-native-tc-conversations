import { IConversation } from "./types";
import { Message } from "@twilio/conversations/lib/message";
import { IMessage } from "react-native-gifted-chat";

export const getProspectIdFromConversation = (
  conversation: IConversation | null
) => {
  if (!conversation) {
    return "";
  }
  return conversation.attributes.prospect_id;
};

export const formatMessageForGiftedChat: (
  message: Message,
  identity: string
) => Promise<IMessage> = async (message: Message, identity: string) => {
  const isConsumerMessage = message.author?.includes("consumer");
  const name = isConsumerMessage
    ? // @ts-expect-error
      message.conversation?.title
    : "";

  const id = isConsumerMessage ? message.author : identity;

  const formattedMessage: IMessage = {
    _id: message.sid,
    text: message.body,
    createdAt: message.dateCreated,
    //@ts-expect-error
    clientMessageId: message.attributes?.clientMessageId,
    // system: m.author === "system",
    user: {
      _id: id,
      name,
    },
  };

  if (message.type === "media") {
    if (message.media.contentType.startsWith("image")) {
      formattedMessage.image = await message.media.getContentTemporaryUrl();
    } else if (message.media.contentType.startsWith("video")) {
      formattedMessage.video = await message.media.getContentTemporaryUrl();
    }
  }

  return formattedMessage;
};

export const formatMessagesForGiftedChat = async (
  messages: Message[],
  identity: string
) =>
  Promise.all(
    messages.reverse().map((m) => formatMessageForGiftedChat(m, identity))
  );
