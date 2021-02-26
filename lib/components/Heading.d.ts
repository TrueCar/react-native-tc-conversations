import React from "react";
import { TextProps } from "react-native";
interface HeadingProps extends TextProps {
    bold?: boolean;
    children: React.ReactNode;
    size: Size;
    white?: boolean;
}
declare type Size = 1 | 2 | 3 | 4 | 5 | "1" | "2" | "3" | "4" | "5";
declare const Heading: ({ bold, children, size, style, white, ...rest }: HeadingProps) => JSX.Element;
export default Heading;
