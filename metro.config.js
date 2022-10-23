const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(DubHacks-2022);
defaultConfig.resolver.assetExts.push('cjs');
module.exports = defaultConfig;
