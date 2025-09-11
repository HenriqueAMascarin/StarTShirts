module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/@react-native-svg-transformer/svgMock.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native|@react-navigation)/)'],
};
