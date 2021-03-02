import { Conversation as TwilioConversation } from "@twilio/conversations/lib/conversation";
import { IMessage } from "react-native-gifted-chat";
export interface IConversation extends TwilioConversation {
    attributes: {
        friendly_name_dealership?: string;
        hasOptedOut?: boolean;
        prospect_id: string;
    };
    dateOfLastMessage: Date;
    id: string;
    messages: IMessage[];
    mostRecentMessage: string;
    title: string;
    unreadMessagesCount: number;
}
