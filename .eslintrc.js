/*
 * @Author: mrzou
 * @Date: 2021-08-17 16:17:18
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-19 23:41:05
 * @Description: file content
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": "off",
    "no-prototype-builtins": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-mutating-props": "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
}
