import { ImageURISource } from "react-native";
//@ts-expect-error
import avatar0 from "./assets/avatar-0.png";
//@ts-expect-error
import avatar1 from "./assets/avatar-1.png";
//@ts-expect-error
import avatar2 from "./assets/avatar-2.png";
//@ts-expect-error
import avatar3 from "./assets/avatar-3.png";
//@ts-expect-error
import avatar4 from "./assets/avatar-4.png";
//@ts-expect-error
import avatar5 from "./assets/avatar-5.png";

const avatars: { [key: string]: ImageURISource } = {
  "0": avatar0,
  "1": avatar1,
  "2": avatar2,
  "3": avatar3,
  "4": avatar4,
  "5": avatar5,
};

export const getAvatarSource = (index: number) => {
  return avatars[String(index % 6)];
};
