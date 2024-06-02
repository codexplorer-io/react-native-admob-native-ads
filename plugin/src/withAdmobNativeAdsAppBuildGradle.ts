import { withProjectBuildGradle } from '@expo/config-plugins';

export const withAdmobNativeAdsGradle = (config: any, props: any) => withProjectBuildGradle(
    config,
    (config: any) => {
        config.modResults.contents = config.modResults.contents.replace(
            /ext\s{/,
            `ext {\n        googlePlayServicesAdsVersion = "${props.androidGoogleMobileAdsVersion}"`
        );
        return config;
    }
);
