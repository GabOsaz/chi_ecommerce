module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': [2, { props: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
