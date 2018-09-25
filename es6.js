module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: 'eslint:recommended',
  rules: {
    'arrow-body-style': [
      'error', 'as-needed'
    ],
    'arrow-parens': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', {
        before: true,
        after: true
      }
    ],
    'generator-star-spacing': [
      'error', {
        'before': true,
        'after': false
      }
    ],
    'no-confusing-arrow': [
      'error', { allowParens: true }
    ],
    'no-duplicate-imports': [
      'error', { includeExports: true }
    ],
    'no-restricted-imports': [
      'error', { patterns: ['^lodash$'] }
    ],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error', 'properties'
    ],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: true }
    ],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error', {
        object: true,
        array: false
      }
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': [
      'error', 'never'
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': [
      'error', 'after'
    ]
  }
};
