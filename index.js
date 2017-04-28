module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    mocha: true,
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/newline-after-import': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'error',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 1000
      }
    ],
    'react/jsx-no-target-blank': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js'] }
    ]
  }
};
