module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    './es6.js',
    './best-practices.js',
    './stylistic.js',
    './possible-errors.js',
    './variables.js',
  ],
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'printWidth': 100
    }]
  }
};
