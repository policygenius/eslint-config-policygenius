module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    './es6.js',
    './best-practices.js',
    './stylistic.js',
    './possible-errors.js',
    './variables.js',
  ],
  rules: {}
};
