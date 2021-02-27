import { IConversation } from "../components/Conversations/types";
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
  message: Message
) => Promise<IMessage> = async (message: Message) => {
  const name = message.author?.includes("consumer")
    ? // @ts-expect-error
      message.conversation?.title
    : "";
  const formattedMessage: IMessage = {
    _id: message.sid,
    text: message.body,
    createdAt: message.dateCreated,

    // system: m.author === "system",
    user: {
      _id: message.author,
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

export const formatMessagesForGiftedChat = async (messages: Message[]) =>
  Promise.all(messages.reverse().map(formatMessageForGiftedChat));
