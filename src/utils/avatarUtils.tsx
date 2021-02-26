import { ImageURISource } from "react-native";

const avatar0 = require("../assets/avatar-0.png");
const avatar1 = require("../assets/avatar-1.png");
const avatar2 = require("../assets/avatar-2.png");
const avatar3 = require("../assets/avatar-3.png");
const avatar4 = require("../assets/avatar-4.png");
const avatar5 = require("../assets/avatar-5.png");

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
