module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint/eslint-plugin' ],
  rules: {
    'no-extra-parens': 'off',
    'react/prop-types': 0,
  },
  overrides: [
    {
      'files': ['**/*.ts', '**/*.tsx'],
      'rules': {
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
};
