module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    node: true, // This tells ESLint that Node.js globals are allowed
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
