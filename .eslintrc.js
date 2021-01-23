module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'tg-config'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 1
    }],
  }
}
