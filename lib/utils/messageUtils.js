export const getProspectIdFromConversation = (conversation) => {
    if (!conversation) {
        return "";
    }
    return conversation.attributes.prospect_id;
};
export const formatMessageForGiftedChat = (message) => ({
    _id: message.sid,
    text: message.body,
    createdAt: message.dateCreated,
    image: "",
    messageType: "text",
    // system: m.author === "system",
    user: {
        _id: message.author,
    },
});
export const formatMessagesForGiftedChat = (messages) => { var _a; return (_a = messages === null || messages === void 0 ? void 0 : messages.reverse()) === null || _a === void 0 ? void 0 : _a.map(formatMessageForGiftedChat); };
//# sourceMappingURL=messageUtils.js.map