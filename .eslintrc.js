module.exports = {
  extends: ['hyam'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Field'],
        depth: 3,
      },
    ],
  },
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
};
