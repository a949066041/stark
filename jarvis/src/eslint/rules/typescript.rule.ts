/*
 * @Author: Rikka
 * @Date: 2022-12-23 18:27:52
 * @LastEditTime: 2022-12-23 18:54:51
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\eslint\rules\typescript.rule.ts
 */
import { Linter } from "eslint";

export const typescript_rule: Linter.RulesRecord = {
  "prettier/prettier": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn", // or "error"
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_"
    }
  ]
};
