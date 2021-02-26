import * as Permissions from "expo-permissions";
export default function getPermissionAsync(permission: Permissions.PermissionType): Promise<boolean>;
export declare const pickImageAsync: (onSend: (values: Array<{
    image: string;
}>) => void) => Promise<string | undefined>;
export declare const takePictureAsync: (onSend: (values: Array<{
    image: string;
}>) => void) => Promise<string | undefined>;
