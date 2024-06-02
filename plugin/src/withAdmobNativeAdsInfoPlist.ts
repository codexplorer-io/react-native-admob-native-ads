import { withInfoPlist } from '@expo/config-plugins';

const withAdmobNativeAdsInfoPlist = (config: any, props: any) => {
    return withInfoPlist(config, (config: any) => {
        config.modResults.GADApplicationIdentifier = props.iosAppId;
        config.modResults.SKAdNetworkItems = skAdNetworkItems.map((item: string) => ({
            SKAdNetworkIdentifier: item
        }));
        return config;
    });
};

export const withAdmobNativeAdsPlist = (config: any, props: any) => {
    return withAdmobNativeAdsInfoPlist(config, props);
};
