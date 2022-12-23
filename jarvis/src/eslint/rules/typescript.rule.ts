/*
 * @Author: Rikka
 * @Date: 2022-12-23 18:27:52
 * @LastEditTime: 2022-12-23 21:02:09
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
  ],
  "unicorn/filename-case": "off",
  "unicorn/prevent-abbreviations": "off",
  "unicorn/prefer-node-protocol": "off",
  "unicorn/prefer-module": "off",
  "unicorn/import-style": [
    "error",
    {
      styles: {
        path: {
          named: true
        }
      }
    }
  ]
};
