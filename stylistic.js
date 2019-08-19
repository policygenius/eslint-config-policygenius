module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "array-bracket-spacing": [
      "error", "never", {
        singleValue: true
      }
    ],
    'block-spacing': [
      'error', 'always'
    ],
    "brace-style": [
      "error", "1tbs", {
        allowSingleLine: true
      }
    ],
    'callback-return': 'error',
    camelcase: [
      'error', {
        ignoreDestructuring: true
      }
    ],
    "comma-dangle": [
      "error", "only-multiline"
    ],
    "comma-spacing": [
      "error", {
        before: false,
        after: true
      }
    ],
    "comma-style": [
      "error", "last"
    ],
    "computed-property-spacing": [
      "error", "never"
    ],
    curly: [
      "error", "all"
    ],
    "func-call-spacing": [
      "error", "never"
    ],
    "func-style": [
      "error", "declaration", {
        allowArrowFunctions: true
      }
    ],
    "function-paren-newline": [
      "error",   "consistent"
    ],
    indent: [
      "error", 2
    ],
    "key-spacing": [
      "error", {
        beforeColon: false,
        afterColon: true
      }
    ],
    "keyword-spacing": [
      "error", {
        before: true,
        after: true
      }
    ],
    'lines-around-comment': [
      'error', {
        beforeBlockComment: true,
        afterBlockComment: false,
        allowBlockStart: true,
        beforeLineComment: true,
        afterLineComment: false
      }
    ],
    "lines-between-class-members": [
      "error",   "always"
    ],
    "linebreak-style": [
      "error", "unix"
    ],
    "max-len": [
      "error", 140
    ],
    'max-params': [
      'error', 5
    ],
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    'no-multiple-empty-lines': [
      'error', {
        max: 1,
        maxEOF: 1
      }
    ],
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    "object-curly-newline": [
      "error", {
        consistent: true
      }
    ],
    "object-curly-spacing": [
      "error", "always"
    ],
    "object-property-newline": [
      "error", {
        allowAllPropertiesOnSameLine: true
      }
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      { blankLine: "always", prev: "*", next: "return" }
    ],
    quotes: [
      "error",   "single"
    ],
    "semi-spacing": "error",
    "semi-style": [
      "error", "last"
    ],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error", "never"
    ],
    "space-in-parens": [
      "error", "never"
    ],
    "spaced-comment": [
      "error", "always"
    ],
    "switch-colon-spacing": [
      "error", {
        after: true,
        before: false
      }
    ],
    'template-tag-spacing': [
      'error', 'never'
    ],
  },
};
