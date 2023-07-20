# eslint-config-policygenius

This package provides Policygenius' .eslintrc as an extensible shared config.

## Usage

Install the configuration

`yarn add --dev eslint-config-policygenius`

Extend your Eslint configuration with `policygenius`

```
{
  "extends": "policygenius",
  "rules": {
    // place any overrides here
  }
}
```

## Configs

This config exposes a base configuration along with individual configurations to suit your needs. Each configuration is extended from the `recommended` rules for the respective plugins.

To use an individual configuration, extend your Eslint configuration as follows

```
{
  "extends": "policygenius/{config-name}"
}
```

There are individual configs for the following:
- es6
- react
- jsx-a11y (accessibility)
- jest
- import
- typescript
- best-practices (defined by Eslint)
- variables (defined by Eslint)
- stylistic (defined by Eslint)
- possible-errors (defined by Eslint)

The base configuration already includes the following:
- best-practices
- variables
- stylistic
- possible-errors
- es6

You can choose to use the base only, base + individual config or just use the individual configs for the most customization.

As an example, if you want to use the base config plus the react configs, you would extend your Eslint config as follows:

```
{
  "extends": [
    "policygenius",
    "policygenius/react"
  ]
}
```

## Requirements

Please be sure to have the following installed when using this config.

- `eslint >= 8`
- `eslint-plugin-react@7.28.0`
- `eslint-plugin-jsx-a11y@6.5.1`
- `eslint-plugin-import@2.25.4`
- `eslint-plugin-jest@26.0.0`
- `eslint-plugin-prettier@4.0.0`

### If using Typescript
- `node >=16.18.0`
- `@typescript-eslint/parser@^6.1.0`
- `@typescript-eslint/eslint-plugin@^6.1.0`
