import {
    Platform,
    requireNativeComponent,
} from "react-native";

export const RnAdMobButton =
  Platform.OS === "android"
    ? requireNativeComponent("RNAdmobButton")
    : () => null;
