module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'import/no-cycle': 0,
    semi: 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 0,
  },
  env: {
    browser: true,
    node: true,
  },
}
