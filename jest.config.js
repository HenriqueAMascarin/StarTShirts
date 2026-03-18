module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/@react-native-svg-transformer/svgMock.js',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  transformIgnorePatterns: [],
};
