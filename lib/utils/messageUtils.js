export const getProspectIdFromConversation = (conversation) => {
    if (!conversation) {
        return "";
    }
    return conversation.attributes.prospect_id;
};
export const formatMessageForGiftedChat = async (message, identity) => {
    var _a, _b;
    const isConsumerMessage = (_a = message.author) === null || _a === void 0 ? void 0 : _a.includes("consumer");
    const name = isConsumerMessage
        ? // @ts-expect-error
         (_b = message.conversation) === null || _b === void 0 ? void 0 : _b.title : "";
    const id = isConsumerMessage ? message.author : identity;
    const formattedMessage = {
        _id: message.sid,
        text: message.body,
        createdAt: message.dateCreated,
        // system: m.author === "system",
        user: {
            _id: id,
            name,
        },
    };
    if (message.type === "media") {
        if (message.media.contentType.startsWith("image")) {
            formattedMessage.image = await message.media.getContentTemporaryUrl();
        }
        else if (message.media.contentType.startsWith("video")) {
            formattedMessage.video = await message.media.getContentTemporaryUrl();
        }
    }
    return formattedMessage;
};
export const formatMessagesForGiftedChat = async (messages, identity) => Promise.all(messages.reverse().map((m) => formatMessageForGiftedChat(m, identity)));
//# sourceMappingURL=messageUtils.js.map