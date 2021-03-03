import React from "react";
export declare type ConversationWithoutProviderProps = {
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
interface ConversationProps extends ConversationWithoutProviderProps {
    tokenEndpoint: string;
    prospectId: string;
}
export declare type ProspectInfo = {
    id: string;
    name: string;
};
export declare const Conversation: ({ tokenEndpoint, prospectId, ...rest }: ConversationProps) => JSX.Element;
export default Conversation;
