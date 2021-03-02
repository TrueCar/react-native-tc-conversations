import React from "react";
import { IMessage } from "react-native-gifted-chat";
import { IConversation } from "../types";
export declare type TwilioConversationsContextType = {
    availableConversations: IConversation[] | [];
    conversationsLoaded: boolean;
    identity: string;
    loadConversation: (conversation: IConversation) => void;
    onMessageSend: (messages: IMessage[]) => void;
    onConversationSelected: (conversation: IConversation | null) => Promise<void>;
    selectedConversation: IConversation | null;
    setSelectedConversation: React.Dispatch<React.SetStateAction<IConversation | null>>;
    unreadUsers: number;
    updateConversation: (conversation: IConversation) => void;
};
declare const useTwilioConversations: () => TwilioConversationsContextType;
declare type Props = {
    children: React.ReactNode;
    tokenEndpoint: string;
    prospectId?: string | undefined;
};
declare const TwilioConversationsProvider: ({ children, tokenEndpoint, prospectId, }: Props) => JSX.Element;
export { TwilioConversationsProvider, useTwilioConversations };
