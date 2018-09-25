module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-extra-parens': [
      "error", "all", {
        nestedBinaryExpressions: false,
        ignoreJSX: "all",
        enforceForArrowConditionals: false
      }
    ],
    'no-inner-declarations': [
      "error", "both"
    ],
    'no-prototype-builtins': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
  }
}
