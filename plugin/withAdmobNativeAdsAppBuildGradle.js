const { withProjectBuildGradle } = require('@expo/config-plugins');

export const withAdmobNativeAdsGradle = (config, props) => withProjectBuildGradle(
    config,
    (config) => {
        config.modResults.contents = config.modResults.contents.replace(
            /ext\s{/,
            `ext {\n        googlePlayServicesAdsVersion = "${props.androidGoogleMobileAdsVersion}"`
        );
        return config;
    }
);
