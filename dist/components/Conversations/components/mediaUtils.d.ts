import { PermissionType } from "expo-permissions";
export default function getPermissionAsync(permission: PermissionType): Promise<boolean>;
export declare const pickImageAsync: (onSend: (values: Array<{
    image: string;
}>) => void) => Promise<string | undefined>;
export declare const takePictureAsync: (onSend: (values: Array<{
    image: string;
}>) => void) => Promise<string | undefined>;
