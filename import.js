module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['import'],
  rules: {
    // Static analysis
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',

    // Module systems
    'import/no-amd': 'error',

    // Style guide
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error', 'always', {
        'js': 'never',
        'jsx': 'never',
      }
    ],
    'import/newline-after-import': 'error',
    'import/no-unassigned-import': [
      'error', {
        allow: ['*.css', '*.scss']
      }
    ],
    'import/no-named-default': 'error',
    'import/dynamic-import-chunkname': 'error',
  },
  settings: {
    'import/resolver': 'webpack'
  }
}
