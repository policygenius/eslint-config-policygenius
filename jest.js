module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      }
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-jasmine-globals': 'error',
    'jest/no-test-prefixes': 'warn',
    'jest/prefer-lowercase-title': [
      'error',
      {
        ignore: ['describe'],
      }
    ],
    'jest/prefer-to-have-length': 'off',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect-in-promise': 'error',
  }
}
