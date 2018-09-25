module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    './best-practices.js',
    './stylistic.js',
    './possible-errors.js',
    './variables.js',
    './es6.js',
  ],
  rules: {}
};
