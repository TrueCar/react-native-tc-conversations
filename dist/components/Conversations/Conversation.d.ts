import React from "react";
export declare type ConversationProps = {
    bottomOffset?: number;
    manualOfferBtnComponent?: (prospect: ProspectInfo) => React.ReactNode;
    navBarRightComponent?: (prospect: ProspectInfo) => React.ReactNode;
    onManualOfferPress?: () => void;
    onNavBarPressLeft?: () => void;
    onNavBarPressRight?: () => void;
    onNavBarPressTitle?: () => void;
    participantOptedOut?: boolean;
    renderCustomAvatar?: () => React.ReactNode;
    onUserMessagesView?: (prospectId: string) => void;
    onCameraPressed?: () => void;
    predefinedChatInput?: string;
    renderUsernameOnMessage?: boolean;
    webMode?: boolean;
};
export declare type ProspectInfo = {
    id: string;
    name: string;
};
declare const Conversation: ({ bottomOffset, manualOfferBtnComponent, onManualOfferPress, navBarRightComponent, onNavBarPressLeft, participantOptedOut, renderCustomAvatar, predefinedChatInput, onUserMessagesView, onCameraPressed, renderUsernameOnMessage, webMode, }: ConversationProps) => JSX.Element;
export default Conversation;
