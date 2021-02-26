import { isIphoneX } from "react-native-iphone-x-helper";
export const tcFontWeb = "Radikal";
export const tcFont = "Radikal-Regular";
export const tcFontBold = "Radikal-Bold";
export const tcBlue = "#109de7";
export const tcDark = "#131213";
export const tcBorderColor = "#E5E5E5";
export const tcUnreadColor = "#EA028A";
export const headerSpacing = {
    paddingTop: isIphoneX() ? 44 : 20,
};
export const shadowBox = {
    elevation: 3.5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 1,
};
export const roundedContainer = {
    backgroundColor: "white",
    padding: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
};
export const inputContainer = {
    backgroundColor: "white",
    height: 35,
};
export const inputText = {
    fontFamily: tcFont,
    color: "#000",
    fontSize: 16,
};
//# sourceMappingURL=style.js.map