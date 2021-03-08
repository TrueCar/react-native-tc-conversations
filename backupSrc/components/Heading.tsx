import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { tcFont, tcFontBold } from "../constants/style";

interface HeadingProps extends TextProps {
  bold?: boolean;
  children: React.ReactNode;
  size: Size;
  white?: boolean;
}

type Size = 1 | 2 | 3 | 4 | 5 | "1" | "2" | "3" | "4" | "5";

const Heading = ({
  bold,
  children,
  size,
  style = {},
  white,
  ...rest
}: HeadingProps) => {
  const sizeKey = sizeChart[size.toString()];
  return (
    <Text
      style={[
        {
          color: white ? "white" : "black",
          fontFamily: bold ? tcFontBold : tcFont,
          ...styles[sizeKey],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const sizeChart: { [key: string]: string } = {
  "1": "xs",
  "2": "sm",
  "3": "md",
  "4": "lg",
  "5": "xl",
};

const styles: { [key: string]: any } = StyleSheet.create({
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
