import { IConversation } from "../components/Conversations/types";
import { Message } from "@twilio/conversations/lib/message";
export declare const getProspectIdFromConversation: (conversation: IConversation | null) => string;
export declare const formatMessageForGiftedChat: (message: Message) => {
    _id: string;
    text: string;
    createdAt: Date;
    image: string;
    messageType: string;
    user: {
        _id: string;
    };
};
export declare const formatMessagesForGiftedChat: (messages: Message[]) => {
    _id: string;
    text: string;
    createdAt: Date;
    image: string;
    messageType: string;
    user: {
        _id: string;
    };
}[];
