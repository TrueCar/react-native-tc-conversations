import { Alert } from "react-native";
import { askAsync, CAMERA, CAMERA_ROLL, PermissionType } from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";

export default async function getPermissionAsync(
  permission: PermissionType
) {
  const { status } = await askAsync(permission);
  if (status !== "granted") {
    const permissionName = permission.toLowerCase().replace("_", " ");
    Alert.alert(
      "Cannot be done 😞",
      `If you would like to use this feature, you'll need to enable the ${permissionName} permission in your phone settings.`,
      [
        {
          text: "Let's go!",
          onPress: () => Linking.openSettings(),
        },
        { text: "Nevermind", onPress: () => {}, style: "cancel" },
      ],
      { cancelable: true }
    );

    return false;
  }
  return true;
}

//@ts-expect-error
export const pickImageAsync = async (
  onSend: (values: Array<{ image: string }>) => void
) => {
  if (await getPermissionAsync(CAMERA_ROLL)) {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      onSend([{ image: result.uri }]);
      return result.uri;
    }
  }
};

//@ts-expect-error
export const takePictureAsync = async (
  onSend: (values: Array<{ image: string }>) => void
) => {
  if (await getPermissionAsync(CAMERA)) {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      onSend([{ image: result.uri }]);
      return result.uri;
    }
  }
};
