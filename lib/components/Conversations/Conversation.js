import React from "react";
import { BackHandler, StyleSheet, View, Platform } from "react-native";
import { Bubble, Composer, GiftedChat, InputToolbar, Send, SystemMessage, } from "react-native-gifted-chat";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Text from "../Text";
import { getProspectIdFromConversation } from "../../utils/messageUtils";
import { shadowBox, inputText, roundedContainer, tcFont, tcFontWeb, } from "../../constants/style";
import CustomActions from "./components/CustomActions";
import IconToBottom from "./components/icons/IconToBottom";
import NavBar from "./components/NavBar";
import { useTwilioConversations } from "./hooks/TwilioConversationsProvider";
const Conversation = ({ bottomOffset = 0, manualOfferBtnComponent, onManualOfferPress = () => null, navBarRightComponent, onNavBarPressLeft, onNavBarPressRight, onNavBarPressTitle, participantOptedOut, renderCustomAvatar, predefinedChatInput = "", onUserMessagesView = () => null, onCameraPressed = () => null, renderUsernameOnMessage = false, webMode = false, }) => {
    const [conversationInputText, setConversationInputText] = React.useState("");
    const { identity, onMessageSend, selectedConversation, setSelectedConversation, updateConversation, } = useTwilioConversations();
    React.useEffect(() => {
        const prospectId = getProspectIdFromConversation(selectedConversation);
        onUserMessagesView(prospectId);
    }, [onUserMessagesView, selectedConversation]);
    React.useEffect(() => {
        setConversationInputText(predefinedChatInput);
    }, [predefinedChatInput]);
    const hasOptedOut = participantOptedOut || (selectedConversation === null || selectedConversation === void 0 ? void 0 : selectedConversation.attributes.hasOptedOut);
    const handleBackPress = React.useCallback(() => {
        if (selectedConversation) {
            selectedConversation.setAllMessagesRead();
            selectedConversation.unreadMessagesCount = 0;
            updateConversation(selectedConversation);
            setSelectedConversation(null);
        }
    }, [selectedConversation, setSelectedConversation, updateConversation]);
    React.useEffect(() => {
        if (webMode)
            return;
        const handleHardwareBackPress = () => {
            if (selectedConversation) {
                onNavBarPressLeft === null || onNavBarPressLeft === void 0 ? void 0 : onNavBarPressLeft();
                handleBackPress();
                return true;
            }
            return false;
        };
        BackHandler.addEventListener("hardwareBackPress", handleHardwareBackPress);
        return () => BackHandler.removeEventListener("hardwareBackPress", handleHardwareBackPress);
    }, [
        handleBackPress,
        onNavBarPressLeft,
        selectedConversation,
        setSelectedConversation,
        webMode,
    ]);
    const renderScrollToBottom = () => <IconToBottom />;
    const renderCustomActions = (props) => {
        // Note: this check is different from Platform.OS === web (for cypress)
        // vs webMode
        if (webMode)
            return null;
        return (<CustomActions {...props} onManualOfferPress={onManualOfferPress} onCameraPressed={onCameraPressed} 
        //@ts-expect-error
        onSend={onMessageSend}/>);
    };
    const renderBubble = (props) => {
        return (<View style={styles.chatBubble} testID="message">
        <Bubble {...props}/>
      </View>);
    };
    const renderSystemMessage = (props) => {
        return (<SystemMessage {...props} containerStyle={{
            marginBottom: 15,
        }} textStyle={{
            fontSize: 14,
            fontFamily: webMode ? tcFontWeb : tcFont,
        }}/>);
    };
    const renderCustomInputToolbar = (props) => {
        return (<InputToolbar {...props} containerStyle={{
            ...roundedContainer,
            marginHorizontal: 15,
            marginBottom: 10,
            minHeight: 35,
            justifyContent: "center",
        }}/>);
    };
    const renderCustomComposer = (props) => {
        let textInputProps = { ...props.textInputProps };
        const textInputStyle = {
            ...inputText,
            marginBottom: 3,
        };
        if (webMode) {
            textInputProps = {
                ...props.textInputProps,
                blurOnSubmit: true,
                onSubmitEditing: () => {
                    //@ts-expect-error
                    if (props.text && props.onSend) {
                        //@ts-expect-error
                        props.onSend({ text: props.text.trim() }, true);
                    }
                },
            };
            textInputStyle.fontFamily = tcFontWeb;
        }
        return (<Composer {...props} placeholder="Type a message" textInputStyle={textInputStyle} textInputProps={textInputProps}/>);
    };
    const renderSend = (props) => {
        let SendButton = <MaterialIcons size={30} name={"send"}/>;
        if (webMode) {
            SendButton = <Text style={styles.sendButtonWeb}>Send</Text>;
        }
        else if (Platform.OS === "ios") {
            SendButton = <Feather name="arrow-up-circle" size={24} color="black"/>;
        }
        return (<Send {...props} containerStyle={styles.sendContainer}>
        {SendButton}
      </Send>);
    };
    return (<View style={styles.container} accessibilityLabel="main" testID="main">
      {!webMode && (<NavBar title={(selectedConversation === null || selectedConversation === void 0 ? void 0 : selectedConversation.title) || ""} onPressLeft={async () => {
        onNavBarPressLeft === null || onNavBarPressLeft === void 0 ? void 0 : onNavBarPressLeft();
        handleBackPress();
    }} onPressRight={() => {
        onNavBarPressRight === null || onNavBarPressRight === void 0 ? void 0 : onNavBarPressRight();
    }} onPressTitle={() => {
        onNavBarPressTitle === null || onNavBarPressTitle === void 0 ? void 0 : onNavBarPressTitle();
    }}/>)}

      <GiftedChat text={conversationInputText} onInputTextChanged={setConversationInputText} messages={(selectedConversation === null || selectedConversation === void 0 ? void 0 : selectedConversation.messages) || []} onSend={onMessageSend} user={{ _id: identity, name: identity }} scrollToBottom scrollToBottomComponent={renderScrollToBottom} keyboardShouldPersistTaps="never" renderActions={renderCustomActions} renderBubble={renderBubble} renderSystemMessage={renderSystemMessage} renderSend={renderSend} minInputToolbarHeight={!hasOptedOut ? 44 : 0} renderAvatar={renderCustomAvatar} renderInputToolbar={hasOptedOut ? () => null : renderCustomInputToolbar} renderComposer={renderCustomComposer} renderUsernameOnMessage={renderUsernameOnMessage} 
    //@ts-expect-error
    renderTicks={() => null} quickReplyStyle={{ borderRadius: 2 }} inverted={Platform.OS !== "web"} bottomOffset={bottomOffset} timeTextStyle={{
        left: { color: "red" },
        right: { color: "yellow" },
    }} listViewProps={{ style: { marginBottom: 10 } }} infiniteScroll textProps={{ style: { fontFamily: webMode ? tcFontWeb : tcFont } }}/>
      {hasOptedOut && (<View testID="optedOut" style={styles.optedOut}>
          <Text bold>
            {selectedConversation === null || selectedConversation === void 0 ? void 0 : selectedConversation.title} has opted out of text communication.
          </Text>
          <Text>
            If you still want to contact your customer you can reach them by
            email.
          </Text>
        </View>)}
      {navBarRightComponent === null || navBarRightComponent === void 0 ? void 0 : navBarRightComponent({
        id: getProspectIdFromConversation(selectedConversation),
        name: (selectedConversation === null || selectedConversation === void 0 ? void 0 : selectedConversation.title) || "",
    })}
      {manualOfferBtnComponent === null || manualOfferBtnComponent === void 0 ? void 0 : manualOfferBtnComponent({
        id: getProspectIdFromConversation(selectedConversation),
        name: (selectedConversation === null || selectedConversation === void 0 ? void 0 : selectedConversation.title) || "",
    })}
    </View>);
};
const styles = StyleSheet.create({
    loading: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    profile: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#ccc",
    },
    optedOut: {
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 35,
        justifyContent: "space-between",
        backgroundColor: "#F8F8F8",
        height: 150,
        ...shadowBox,
    },
    chatBubble: {
        width: "100%",
    },
    sendContainer: {
        justifyContent: "center",
        paddingRight: 10,
    },
    sendButtonWeb: {
        fontFamily: tcFontWeb,
        color: "#0084ff",
    },
});
export default Conversation;
//# sourceMappingURL=Conversation.js.map