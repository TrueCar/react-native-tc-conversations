// TODO: added this to ignore noUnusedLocals
// @ts-nocheck
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Heading from "../Heading";
import Text from "../Text";
import { ListItem, SearchBar } from "react-native-elements";
import {
  headerSpacing,
  tcDark,
  tcBorderColor,
  inputContainer,
  inputText,
  roundedContainer,
} from "../../constants/style";
import { getAvatarSource } from "../../utils/avatarUtils";
import { formatDate } from "../../utils/stringUtils";
import IconSettings from "./components/icons/IconSettings";
import { useTwilioConversations } from "./hooks/TwilioConversationsProvider";
import { IConversation } from "./types";
import UnreadInteractionBadge from "./UnreadInteractionBadge";

export type ConversationListProps = {
  onConversationPressed?: () => void;
  onSettingsPress?: () => void;
  emptyListComponent?: () => React.ReactElement;
  participantOptedOut?: boolean;
  onMessagesHubView?: (
    numUnreadUsers: number,
    numTotalMsgUsers: number
  ) => void;
};

const ConversationList = ({
  onConversationPressed,
  onSettingsPress,
  emptyListComponent,
  participantOptedOut,
  onMessagesHubView = () => null,
}: ConversationListProps) => {
  const {
    availableConversations,
    conversationsLoaded,
    selectedConversation,
    onConversationSelected,
    unreadUsers,
  } = useTwilioConversations();
  const [searchValue, updateSearchValue] = React.useState("");
  const hasAvailableConversations = !!availableConversations.length;

  React.useEffect(() => {
    if (conversationsLoaded) {
      onMessagesHubView(unreadUsers, availableConversations.length);
    }
  }, [
    availableConversations,
    conversationsLoaded,
    onMessagesHubView,
    selectedConversation,
    unreadUsers,
  ]);

  const renderItem = ({
    item,
    index,
  }: {
    index: number;
    item: IConversation;
  }) => {
    return (
      <Item
        item={item}
        index={index}
        onPress={() => {
          onConversationPressed?.();
          onConversationSelected(item);
        }}
        participantOptedOut={participantOptedOut}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading bold size="2">
          Messages
        </Heading>
        <TouchableOpacity
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 10 }}
          style={styles.settingsIcon}
          onPress={onSettingsPress}
        >
          <IconSettings />
        </TouchableOpacity>
      </View>
      {/* TODO: enable when feature ready  */}
      {/*{hasAvailableConversations && (*/}
      {/*  <SearchBar*/}
      {/*    testID="searchMessagesBar"*/}
      {/*    containerStyle={{*/}
      {/*      ...roundedContainer,*/}
      {/*      marginBottom: 5,*/}
      {/*      marginLeft: 15,*/}
      {/*      marginRight: 10,*/}
      {/*    }}*/}
      {/*    inputContainerStyle={inputContainer}*/}
      {/*    inputStyle={inputText}*/}
      {/*    lightTheme*/}
      {/*    placeholder="Search Messages"*/}
      {/*    onChangeText={(val) => updateSearchValue(val)}*/}
      {/*    round*/}
      {/*    value={searchValue}*/}
      {/*  />*/}
      {/*)}*/}
      {availableConversations && conversationsLoaded ? (
        <FlatList
          data={availableConversations}
          renderItem={renderItem}
          ListEmptyComponent={emptyListComponent}
          keyExtractor={(item) => item.sid}
          contentContainerStyle={
            !hasAvailableConversations && { height: "100%" }
          }
        />
      ) : (
        <ActivityIndicator
          testID="loadingSpinner"
          size="large"
          color="gray"
          style={styles.loading}
        />
      )}
    </View>
  );
};
const OPTED_OUT_MESSAGE = "Opted out of text communication";

const Item = ({
  index,
  item,
  onPress,
  participantOptedOut,
}: {
  index: number;
  item: IConversation;
  onPress: () => void;
  participantOptedOut?: boolean;
}) => {
  const { lastMessage, lastReadMessageIndex, messages, unreadMessagesCount } =
    item || {};
  const hasNotBeenInteractedWith =
    lastReadMessageIndex === null || unreadMessagesCount > 0;
  const hasNewInteraction =
    (messages.length === 0 && !lastReadMessageIndex) || unreadMessagesCount > 0;

  const hasOptedOut = participantOptedOut || item?.attributes.hasOptedOut;

  return (
    <TouchableOpacity
      accessible={false}
      onPress={onPress}
      testID={`conversationList${index}`}
    >
      <ListItem containerStyle={styles.itemContainer}>
        <Image
          source={getAvatarSource(index)}
          style={[styles.avatarImg, hasOptedOut && styles.optedOutImage]}
        />
        <View style={styles.messageContainer}>
          <View style={styles.listItemContent}>
            <Heading
              size="1"
              style={[{ width: "95%" }, hasOptedOut && styles.optedOutText]}
              bold={hasNotBeenInteractedWith}
              numberOfLines={1}
            >
              {item.title}
            </Heading>
            <Text
              numberOfLines={1}
              style={[
                styles.messagePreview,
                hasOptedOut && styles.optedOutText,
              ]}
              bold={hasNotBeenInteractedWith}
              size={15}
            >
              {hasOptedOut ? OPTED_OUT_MESSAGE : item.mostRecentMessage}
            </Text>
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.datetime}>
              {formatDate(lastMessage?.dateCreated || item?.dateCreated)}
            </Text>
            {hasNewInteraction && (
              <View style={{ marginTop: 15 }}>
                <UnreadInteractionBadge
                  type={messages.length === 0 ? "newProspect" : "newMessage"}
                />
              </View>
            )}
          </View>
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    ...headerSpacing,
  },
  avatarImg: {
    height: 50,
    width: 50,
  },
  topItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messagePreview: {
    marginTop: 10,
    color: tcDark,
    width: "95%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  datetime: {
    fontSize: 12,
    color: "#999",
  },
  optedOutText: {
    opacity: 0.2,
    color: tcDark,
  },
  optedOutImage: {
    opacity: 0.3,
  },
  itemContainer: {
    borderBottomColor: tcBorderColor,
    borderBottomWidth: 1,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
  listItemContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    flex: 1,
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: "82%",
  },
  dateTimeContainer: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    position: "relative",
    top: 3,
  },
});

export default ConversationList;
