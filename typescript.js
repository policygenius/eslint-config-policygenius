module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint/eslint-plugin' ],
  rules: {
    'no-extra-parens': 'off',
    'react/prop-types': false,
  },
  overrides: [
    {
      'files': ['**/*.ts', '**/*.tsx'],
      'rules': {
        '_comment': 'Turn off no undefined variables for all Typescript files since TS should catch this already',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
};
