module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '16.5',
    }
  },
  rules: {
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': [
      'error', 'always'
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [
      'error', {
        ignoreStateless: true,
      }
    ],
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': [
      'error', {
        'ignorePureComponents': true
      }
    ],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error', {
        'order': [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'react/sort-prop-types': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': [
      'error', 'never'
    ],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': [
      'error', 'never'
    ],
    'react/jsx-equals-spacing': [
      'error', 'never'
    ],
    'react/jsx-filename-extension': [
      'error', {
        extensions: ['.js', '.ts', '.tsx']
      }
    ],
    'react/jsx-first-prop-new-line': [
      'error', 'multiline'
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [
      'error', 2
    ],
    'react/jsx-indent-props': [
      'error', 2
    ],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': [
      'error', {
        max: 6
      }
    ],
    'react/jsx-max-props-per-line': [
      'error', {
        maximum: 1,
        when: "multiline"
      }
    ],
    'react/jsx-no-bind': [
      'error', {
        ignoreRefs: true,
        allowArrowFunctions: true
      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-curly-brace-presence': [
      'error', {
        props: "never",
        children: "never"
      }
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-tag-spacing': [
      'error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error', {
        return: 'parens-new-line',
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line"
      }
    ],
  },
}
