import React from "react";
import { StyleSheet, Text } from "react-native";
import { tcFont, tcFontBold } from "../constants/style";
const Heading = ({ bold, children, size, style = {}, white, ...rest }) => {
    const sizeKey = sizeChart[size.toString()];
    return (<Text style={[
        {
            color: white ? "white" : "black",
            fontFamily: bold ? tcFontBold : tcFont,
            ...styles[sizeKey],
        },
        style,
    ]} {...rest}>
      {children}
    </Text>);
};
const sizeChart = {
    "1": "xs",
    "2": "sm",
    "3": "md",
    "4": "lg",
    "5": "xl",
};
const styles = StyleSheet.create({
    xs: {
        fontSize: 17,
    },
    sm: {
        fontSize: 22,
    },
    md: {
        fontSize: 25,
    },
    lg: {
        fontSize: 30,
    },
    xl: {
        fontSize: 40,
    },
});
export default Heading;
//# sourceMappingURL=Heading.js.map