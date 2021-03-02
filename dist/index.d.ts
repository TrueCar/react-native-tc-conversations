declare module "react-native-tc-conversations" {
  import React from "react";
  export type ConversationProps = {
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
    tokenEndpoint: string;
    prospectId: string;
    webMode?: boolean;
  };
  export type ProspectInfo = {
    id: string;
    name: string;
  };
  export const Conversation: ({
    bottomOffset,
    manualOfferBtnComponent,
    onManualOfferPress,
    navBarRightComponent,
    onNavBarPressLeft,
    onNavBarPressRight,
    onNavBarPressTitle,
    participantOptedOut,
    renderCustomAvatar,
    predefinedChatInput,
    onUserMessagesView,
    onCameraPressed,
    renderUsernameOnMessage,
    webMode,
  }: ConversationProps) => JSX.Element;
}
