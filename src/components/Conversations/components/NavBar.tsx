// import React from "react";
// import { StyleSheet, TouchableOpacity } from "react-native";
// import { Header } from "react-native-elements";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Text from "../../Text";

// type NavBarProps = {
//   onPressLeft: () => void;
//   title: string;
//   onPressTitle: () => void;
//   onPressRight: () => void;
// };

// const NavBar = ({
//   onPressLeft,
//   title,
//   onPressTitle,
//   onPressRight,
// }: NavBarProps) => (
//   <Header
//     backgroundColor="#f5f5f5"
//     leftComponent={
//       <TouchableOpacity
//         onPress={onPressLeft}
//         hitSlop={{ top: 10, bottom: 10, left: 10 }}
//         style={styles.leftComponent}
//       >
//         <AntDesign name="left" size={24} color="black" />
//       </TouchableOpacity>
//     }
//     centerComponent={
//       <Text bold size={18} onPress={onPressTitle}>
//         {title}
//       </Text>
//     }
//     rightComponent={
//       <AntDesign
//         name="ellipsis1"
//         size={24}
//         color="black"
//         onPress={onPressRight}
//         testID="prospectProfileBtn"
//       />
//     }
//     containerStyle={{
//       height: 100,
//     }}
//   />
// );

// const styles = StyleSheet.create({
//   leftComponent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatarImg: {
//     height: 30,
//     width: 30,
//     marginLeft: 10,
//   },
// });

export default () => null;
