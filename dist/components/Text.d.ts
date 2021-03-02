import React from "react";
import { TextProps } from "react-native";
interface Props extends TextProps {
    bold?: boolean;
    children: React.ReactNode;
    size?: number;
    color?: string;
}
declare const Text: ({ bold, size, color, children, style, ...rest }: Props) => JSX.Element;
export default Text;
