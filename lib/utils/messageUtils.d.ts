import { IConversation } from "../components/Conversations/types";
import { Message } from "@twilio/conversations/lib/message";
import { IMessage } from "react-native-gifted-chat";
export declare const getProspectIdFromConversation: (conversation: IConversation | null) => string;
export declare const formatMessageForGiftedChat: (message: Message, identity: string) => Promise<IMessage>;
export declare const formatMessagesForGiftedChat: (messages: Message[], identity: string) => Promise<IMessage[]>;
