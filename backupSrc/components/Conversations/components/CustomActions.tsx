// TODO: added this to ignore noUnusedLocals
// @ts-nocheck
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
// import { pickImageAsync, takePictureAsync } from "./mediaUtils";
// import IconCamera from "./icons/IconCamera";
import IconInventory from "./icons/IconInventory";

type CustomActionsProps = {
  onManualOfferPress: () => void;
  onSend: () => void;
  onCameraPressed: () => void;
};
const CustomActions = ({
  onManualOfferPress = () => null,
}: // onSend = () => null,
// onCameraPressed = () => null,
CustomActionsProps) =>
  // context: any
  {
    // const onActionsPress = () => {
    //   onCameraPressed();
    //   const options = ["Choose From Library", "Take Picture", "Cancel"];
    //   const cancelButtonIndex = options.length - 1;
    //   context.actionSheet().showActionSheetWithOptions(
    //     {
    //       options,
    //       cancelButtonIndex,
    //     },
    //     async (buttonIndex: number) => {
    //       switch (buttonIndex) {
    //         case 0:
    //           pickImageAsync(onSend);
    //           return;
    //         case 1:
    //           takePictureAsync(onSend);
    //           return;
    //         default:
    //       }
    //     }
    //   );
    // };

    // const renderCameraIcon = React.useCallback(() => <IconCamera />, []);
    const renderManualOfferIcon = React.useCallback(
      () => <IconInventory />,
      []
    );

    return (
      <View style={styles.wrapper}>
        {/*<TouchableOpacity style={styles.container} onPress={onActionsPress}>*/}
        {/*  {renderCameraIcon()}*/}
        {/*</TouchableOpacity>*/}
        <TouchableOpacity
          style={styles.container}
          onPress={onManualOfferPress}
          testID="manualOfferIcon"
        >
          {renderManualOfferIcon()}
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: "row",
    width: 30,
  },
  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center",
  },
});

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};

export default CustomActions;
