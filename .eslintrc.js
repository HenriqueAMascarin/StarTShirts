module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:ft-flow/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-native', 'react-hooks', 'ft-flow'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  settings: {
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet'],
    'ft-flow': {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/func-call-spacing': 0,
    'no-types-missing-file-annotation': 0,
    'ft-flow/no-types-missing-file-annotation': 0,
    '@typescript-eslint/no-namespace': 0,
    'react/no-unknown-property': 0,
    '@typescript-eslint/no-unsafe-function-type': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-empty-pattern': 0,
  },
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
