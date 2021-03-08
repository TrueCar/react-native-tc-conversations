import React from "react";
import Clipboard from "@react-native-community/clipboard";
import { IMessage } from "react-native-gifted-chat";

const useCopyMessages = () => {
  const copyMessages = React.useCallback((messages: IMessage[]) => {
    let output = "";
    messages.forEach((msg) => {
      output += `${msg.user.name} [${msg.createdAt}] \n ${msg.text} \n`;
    });
    Clipboard.setString(output);
  }, []);
  return copyMessages;
};

export default useCopyMessages;
