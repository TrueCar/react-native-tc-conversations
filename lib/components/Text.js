import React from "react";
import { Text as NativeText } from "react-native";
import { tcFont, tcFontBold } from "../constants/style";
const Text = ({ bold, size = bold ? 15 : 16, color = "#000", children, style = {}, ...rest }) => {
    return (<NativeText style={[
        {
            fontFamily: bold ? tcFontBold : tcFont,
            fontSize: size,
            color: color,
        },
        style,
    ]} {...rest}>
      {children}
    </NativeText>);
};
export default Text;
//# sourceMappingURL=Text.js.map