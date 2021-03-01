import React from "react";
import ConversationList, { ConversationListProps } from "./ConversationList";
import { ConversationProps as ConversationWithoutProviderProps, ProspectInfo } from "./Conversation";
import { IConversation } from "./types";
interface ConversationCenterProps extends ConversationWithoutProviderProps, ConversationListProps {
    tokenEndpoint: string;
}
interface ConversationProps extends ConversationWithoutProviderProps {
    tokenEndpoint: string;
    prospectId: string;
}
declare type NotificationHandlerProps = {
    nativeNotificationHandler: (values: NotificationHandlerParams) => React.ReactNode;
};
declare type NotificationHandlerParams = {
    availableConversations: IConversation[];
    onConversationSelected: (conversation: IConversation | null) => Promise<void>;
    selectedConversation: IConversation | null;
    setSelectedConversation: React.Dispatch<React.SetStateAction<IConversation | null>>;
};
declare const ConversationCenter: ({ nativeNotificationHandler, ...rest }: ConversationCenterProps & NotificationHandlerProps) => JSX.Element;
declare const Conversation: ({ tokenEndpoint, prospectId, ...rest }: ConversationProps) => JSX.Element;
export { Conversation, ConversationCenter, ConversationList, IConversation, NotificationHandlerParams, ProspectInfo, };
