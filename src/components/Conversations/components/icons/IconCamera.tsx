import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

type Props = {
  width?: string;
  height?: string;
};

const IconCamera = ({ width = "24", height = "24" }: Props) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <G strokeWidth={2} stroke="black" fill="none">
      <Circle cx={12} cy={13} r={3.5} />
      <Path d="M20.5 6.5h-2a1.64 1.64 0 01-1.45-.89 2 2 0 00-1.79-1.11H8.74A2 2 0 007 5.61a1.64 1.64 0 01-1.5.89h-2a2 2 0 00-2 2v10a2 2 0 002 2h17a2 2 0 002-2v-10a2 2 0 00-2-2z" />
    </G>
  </Svg>
);

export default IconCamera;
