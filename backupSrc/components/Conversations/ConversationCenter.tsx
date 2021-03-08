import React from "react";
import ConversationList, { ConversationListProps } from "./ConversationList";
import ConversationWithoutProvider, {
  ConversationProps as ConversationWithoutProviderProps,
  ProspectInfo,
} from "./Conversation";
import {
  TwilioConversationsProvider,
  useTwilioConversations,
} from "./hooks/TwilioConversationsProvider";
import { IConversation } from "./types";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface ConversationCenterProps
  extends ConversationWithoutProviderProps,
    ConversationListProps {
  tokenEndpoint: string;
}

interface ConversationProps extends ConversationWithoutProviderProps {
  tokenEndpoint: string;
  prospectId: string;
}

type NotificationHandlerProps = {
  nativeNotificationHandler: (
    values: NotificationHandlerParams
  ) => React.ReactNode;
};

type NotificationHandlerParams = {
  availableConversations: IConversation[];
  onConversationSelected: (conversation: IConversation | null) => Promise<void>;
  selectedConversation: IConversation | null;
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<IConversation | null>
  >;
};

const ConversationCenterWithoutProvider = ({
  bottomOffset,
  manualOfferBtnComponent,
  onManualOfferPress = () => null,
  navBarRightComponent,
  onConversationPressed,
  onNavBarPressLeft,
  onNavBarPressRight,
  onNavBarPressTitle,
  predefinedChatInput,
  onSettingsPress,
  emptyListComponent,
  participantOptedOut,
  renderCustomAvatar,
  onMessagesHubView,
  onUserMessagesView,
  onCameraPressed,
}: ConversationCenterProps) => {
  const { selectedConversation } = useTwilioConversations();

  return !selectedConversation ? (
    <ConversationList
      onMessagesHubView={onMessagesHubView}
      onConversationPressed={onConversationPressed}
      onSettingsPress={onSettingsPress}
      emptyListComponent={emptyListComponent}
      participantOptedOut={participantOptedOut}
    />
  ) : (
    <ConversationWithoutProvider
      bottomOffset={bottomOffset}
      predefinedChatInput={predefinedChatInput}
      manualOfferBtnComponent={manualOfferBtnComponent}
      onManualOfferPress={onManualOfferPress}
      navBarRightComponent={navBarRightComponent}
      onNavBarPressLeft={onNavBarPressLeft}
      onNavBarPressRight={onNavBarPressRight}
      onNavBarPressTitle={onNavBarPressTitle}
      participantOptedOut={participantOptedOut}
      renderCustomAvatar={renderCustomAvatar}
      onUserMessagesView={onUserMessagesView}
      onCameraPressed={onCameraPressed}
    />
  );
};

const NotificationHandler = ({
  nativeNotificationHandler,
}: NotificationHandlerProps) => {
  const {
    availableConversations,
    onConversationSelected,
    selectedConversation,
    setSelectedConversation,
  } = useTwilioConversations();

  return (
    <>
      {nativeNotificationHandler({
        availableConversations,
        onConversationSelected,
        selectedConversation,
        setSelectedConversation,
      })}
    </>
  );
};

const ConversationCenter = ({
  nativeNotificationHandler,
  ...rest
}: ConversationCenterProps & NotificationHandlerProps) => (
  <TwilioConversationsProvider tokenEndpoint={rest.tokenEndpoint}>
    <ConversationCenterWithoutProvider {...rest} />
    {nativeNotificationHandler && (
      <NotificationHandler
        nativeNotificationHandler={nativeNotificationHandler}
      />
    )}
  </TwilioConversationsProvider>
);

const Conversation = ({
  tokenEndpoint,
  prospectId,
  ...rest
}: ConversationProps) => (
  <TwilioConversationsProvider
    tokenEndpoint={tokenEndpoint}
    prospectId={prospectId}
  >
    <SafeAreaProvider>
      <ConversationWithoutProvider webMode {...rest} />
    </SafeAreaProvider>
  </TwilioConversationsProvider>
);

export {
  Conversation,
  ConversationCenter,
  ConversationList,
  IConversation,
  NotificationHandlerParams,
  ProspectInfo,
};
