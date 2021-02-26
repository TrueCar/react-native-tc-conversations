import React from "react";
import ConversationList from "./ConversationList";
import ConversationWithoutProvider from "./Conversation";
import { TwilioConversationsProvider, useTwilioConversations, } from "./hooks/TwilioConversationsProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
const ConversationCenterWithoutProvider = ({ bottomOffset, manualOfferBtnComponent, onManualOfferPress = () => null, navBarRightComponent, onConversationPressed, onNavBarPressLeft, onNavBarPressRight, onNavBarPressTitle, predefinedChatInput, onSettingsPress, emptyListComponent, participantOptedOut, renderCustomAvatar, onMessagesHubView, onUserMessagesView, onCameraPressed, }) => {
    const { selectedConversation } = useTwilioConversations();
    return !selectedConversation ? (<ConversationList onMessagesHubView={onMessagesHubView} onConversationPressed={onConversationPressed} onSettingsPress={onSettingsPress} emptyListComponent={emptyListComponent} participantOptedOut={participantOptedOut}/>) : (<ConversationWithoutProvider bottomOffset={bottomOffset} predefinedChatInput={predefinedChatInput} manualOfferBtnComponent={manualOfferBtnComponent} onManualOfferPress={onManualOfferPress} navBarRightComponent={navBarRightComponent} onNavBarPressLeft={onNavBarPressLeft} onNavBarPressRight={onNavBarPressRight} onNavBarPressTitle={onNavBarPressTitle} participantOptedOut={participantOptedOut} renderCustomAvatar={renderCustomAvatar} onUserMessagesView={onUserMessagesView} onCameraPressed={onCameraPressed}/>);
};
const NotificationHandler = ({ nativeNotificationHandler, }) => {
    const { availableConversations, onConversationSelected, selectedConversation, setSelectedConversation, } = useTwilioConversations();
    return (<>
      {nativeNotificationHandler({
        availableConversations,
        onConversationSelected,
        selectedConversation,
        setSelectedConversation,
    })}
    </>);
};
const ConversationCenter = ({ nativeNotificationHandler, ...rest }) => (<TwilioConversationsProvider tokenEndpoint={rest.tokenEndpoint}>
    <ConversationCenterWithoutProvider {...rest}/>
    {nativeNotificationHandler && (<NotificationHandler nativeNotificationHandler={nativeNotificationHandler}/>)}
  </TwilioConversationsProvider>);
const Conversation = ({ tokenEndpoint, prospectId, ...rest }) => (<TwilioConversationsProvider tokenEndpoint={tokenEndpoint} prospectId={prospectId}>
    <SafeAreaProvider>
      <ConversationWithoutProvider webMode {...rest}/>
    </SafeAreaProvider>
  </TwilioConversationsProvider>);
export { Conversation, ConversationCenter, ConversationList, };
//# sourceMappingURL=ConversationCenter.js.map