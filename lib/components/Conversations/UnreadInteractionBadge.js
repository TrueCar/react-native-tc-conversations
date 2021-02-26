import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";
import { tcUnreadColor } from "../../constants/style";
const UnreadInteractionBadge = ({ type }) => {
    return (<View style={[
        type === "newProspect"
            ? styles.newProspectContainer
            : styles.newMessageContainer,
    ]}>
      <Text style={type === "newProspect" && styles.countStyleProspect} bold>
        {type === "newProspect" && "new"}
      </Text>
    </View>);
};
const styles = StyleSheet.create({
    newProspectContainer: {
        height: 15,
        width: 30,
        display: "flex",
        alignContent: "flex-start",
        borderRadius: 30,
        backgroundColor: tcUnreadColor,
        justifyContent: "center",
    },
    newMessageContainer: {
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: tcUnreadColor,
    },
    countStyleProspect: {
        fontSize: 11,
        color: "white",
        textAlign: "center",
    },
});
export default UnreadInteractionBadge;
//# sourceMappingURL=UnreadInteractionBadge.js.map