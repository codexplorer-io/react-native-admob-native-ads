import { withDangerousMod } from '@expo/config-plugins';
import { resolve } from 'path';
import { writeFileSync, readFileSync } from 'fs';

const withAdmobNativeAdsAppBuildGradle = (config: any, props: any) => withDangerousMod(config, [
    'android',
    (cfg: any) => {
        const { platformProjectRoot } = cfg.modRequest;
        const build = resolve(platformProjectRoot, 'app/build.gradle');
        const contents = readFileSync(build, 'utf-8');
        const lines = contents.split('\n');
        const index = lines.findIndex((line: any) => /ext\s{/.test(line));

        writeFileSync(
            build,
            [
                ...lines.slice(0, index + 1),
                `        googlePlayServicesAdsVersion = "${props.androidGoogleMobileAdsVersion}"`,
                ...lines.slice(index + 1)
            ].join('\n')
        );

        return cfg;
    }
]);

export const withAdmobNativeAdsGradle = (config: any, props: any) => withAdmobNativeAdsAppBuildGradle(config, props);
