import { IConversation } from "../components/Conversations/types";
import { Message } from "@twilio/conversations/lib/message";

export const getProspectIdFromConversation = (
  conversation: IConversation | null
) => {
  if (!conversation) {
    return "";
  }
  return conversation.attributes.prospect_id;
};

export const formatMessageForGiftedChat = (message: Message) => ({
  _id: message.sid,
  text: message.body,
  createdAt: message.dateCreated,
  image: "",
  messageType: "text",
  // system: m.author === "system",
  user: {
    _id: message.author,
    // name: m.friendlyName,
  },
});

export const formatMessagesForGiftedChat = (messages: Message[]) =>
  messages?.reverse()?.map(formatMessageForGiftedChat);
