const { createRunOncePlugin } = require('@expo/config-plugins');
const { withAdmobNativeAdsGradle } = require('./withAdmobNativeAdsAppBuildGradle');
const pkg = require('react-native-admob-native-ads/package.json');

const withAdmobNativeAds = (config, props) => {
  config = withAdmobNativeAdsGradle(config, props);
  return config;
};

export default createRunOncePlugin(withAdmobNativeAds, pkg.name, pkg.version);
