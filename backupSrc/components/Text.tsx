import React from "react";
import { Text as NativeText, TextProps } from "react-native";
import { tcFont, tcFontBold } from "../constants/style";

interface Props extends TextProps {
  bold?: boolean;
  children: React.ReactNode;
  size?: number;
  color?: string;
}

const Text = ({
  bold,
  size = bold ? 15 : 16,
  color = "#000",
  children,
  style = {},
  ...rest
}: Props) => {
  return (
    <NativeText
      style={[
        {
          fontFamily: bold ? tcFontBold : tcFont,
          fontSize: size,
          color: color,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

export default Text;
