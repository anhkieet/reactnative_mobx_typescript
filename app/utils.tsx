import { Dimensions, Platform, ScaledSize } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

export const screenSize = (): ScaledSize => {
  return Dimensions.get("screen");
};

export const windowSize = (): ScaledSize => {
  return Dimensions.get("window");
};

export const isIphoneX = () => {
  const dim = windowSize();

  return (
    // This has to be iOS
    Platform.OS === "ios" &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
};

export const isIPhoneXSize = (dim: ScaledSize): boolean =>
  dim.height == 812 || dim.width == 812;
export const isIPhoneXrSize = (dim: ScaledSize): boolean =>
  dim.height == 896 || dim.width == 896;

export const delay = (timeout: number = 1000): Promise<void> =>
  new Promise(resolve => setTimeout(() => resolve(), timeout));
