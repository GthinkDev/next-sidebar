export default {
  parser: '@typescript-eslint/parser', // 使用 TS 专用解析器
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TS 规则
    'plugin:prettier/recommended', // 必须放在最后，覆盖冲突规则
  ],
  rules: {
    'prettier/prettier': 'error', // 让 ESLint 检查 Prettier 格式问题
  },
}
