module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': 'error',
    'default-case': 'error',
    'dot-location': [
      'error', 'property'
    ],
    'dot-notation': 'error',
    'eqeqeq': [
      'error', 'smart'
    ],
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unused-expressions': [
      'error', {
        'allowShortCircuit': true,
        'allowTernary': true
      }
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'error',
    'one-var': [
      'error', 'never'
    ],
    'padded-blocks': [
      'error', 'never'
    ],
    'radix': [
      'error', 'always'
    ],
    'require-await': 'error',
    'semi': [
      'error', 'always'
    ],
    'wrap-iife': 'error',
    'yoda': [
      'error', 'never', {
        onlyEquality: true
      }
    ]
  }
};
