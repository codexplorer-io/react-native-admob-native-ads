import { ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";
import { withAdmobNativeAdsGradle } from "./withAdmobNativeAdsAppBuildGradle";

const pkg = require("react-native-admob-native-ads/package.json");

const withAdmobNativeAds: ConfigPlugin = (config, props) => {
  config = withAdmobNativeAdsGradle(config, props);
  return config;
};

export default createRunOncePlugin(withAdmobNativeAds, pkg.name, pkg.version);
