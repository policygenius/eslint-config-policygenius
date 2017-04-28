# eslint-config-policygenius

This package provides PolicyGenius' .eslintrc as an extensible shared config.

## Usage

We export one ESLint configuration for your usage. It contains all of our ESLint rules, including ECMAScript 6+ and React. 
It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. Install the correct versions of each package, which are listed list in the package.json:

2. Add `"extends": "policygenius"` to your .eslintrc or eslintConfig in your package.json

This config is heavily based on the most widely-adopted styleguide by the community, which is
[Airbnb's Javascript styleguide](https://github.com/airbnb/javascript).
