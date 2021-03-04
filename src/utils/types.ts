import { Conversation as TwilioConversation } from "@twilio/conversations/lib/conversation";
import { IMessage } from "react-native-gifted-chat";
import { Message } from "@twilio/conversations/lib/message";
import { Paginator } from "@twilio/conversations/lib/interfaces/paginator";

export interface IConversation extends TwilioConversation {
  attributes: {
    friendly_name_dealership?: string;
    hasOptedOut?: boolean;
    prospect_id: string;
  };
  dateOfLastMessage: Date;
  id: string;
  messagePaginator: Paginator<Message> | null;
  messages: IMessage[];
  mostRecentMessage: string;
  title: string;
  unreadMessagesCount: number;
}
