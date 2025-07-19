const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { assetExts, sourceExts },
} = defaultConfig;

const newAssetExts = [...assetExts.filter((ext) => ext !== 'svg'), 'glb', 'gltf', 'png', 'jpg'];

const newSourceExts = [...sourceExts, 'svg', 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'];

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer/react-native'),
  },
  resolver: {
    assetExts: newAssetExts,
    sourceExts: newSourceExts,
  },
};

module.exports = mergeConfig(defaultConfig, config);
