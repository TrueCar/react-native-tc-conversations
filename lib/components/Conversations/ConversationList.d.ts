import React from "react";
export declare type ConversationListProps = {
    onConversationPressed?: () => void;
    onSettingsPress?: () => void;
    emptyListComponent?: () => React.ReactElement;
    participantOptedOut?: boolean;
    onMessagesHubView?: (numUnreadUsers: number, numTotalMsgUsers: number) => void;
};
declare const ConversationList: ({ onConversationPressed, onSettingsPress, emptyListComponent, participantOptedOut, onMessagesHubView, }: ConversationListProps) => JSX.Element;
export default ConversationList;
