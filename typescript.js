module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [ 'plugin:@typescript-eslint/recommended' ],
  /**
   * Many of these rules fall into the category of "Extension Rules", which have the same functionality
   * as the original rule but with the addition of TypeScript support:
   * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
   */
  rules: {
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error', '1tbs', {
        allowSingleLine: true
      }
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error', 'only-multiline'
    ],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error', {
        before: false,
        after: true
      }
    ],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': [
      'error', 'never'
    ],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error', 2
    ],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error', {
        before: true,
        after: true
      }
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',   'always'
    ],
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': [
      'error', { includeExports: true }
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      'error', 'all', {
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error', {
        'allowShortCircuit': true,
        'allowTernary': true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'quotes': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { 'avoidEscape': true }
    ],
    'semi': 'off',
    '@typescript-eslint/semi': [
      'error', 'always'
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'react/prop-types': 0,
  },
  overrides: [
    {
      'files': ['**/*.ts', '**/*.tsx'],
      'rules': {
        'no-undef': 'off',
      }
    }
  ]
};
