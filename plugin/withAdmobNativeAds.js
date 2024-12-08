const { createRunOncePlugin } = require('@expo/config-plugins');
const { withAdmobNativeAdsGradle } = require('./withAdmobNativeAdsAppBuildGradle');
const pkg = require('react-native-admob-native-ads/package.json');

const withAdmobNativeAds = (config, props) => {
  config = withAdmobNativeAdsGradle(config, props);
  return config;
};

module.exports = createRunOncePlugin(withAdmobNativeAds, pkg.name, pkg.version);
