/*
 * @Author: Rikka
 * @Date: 2022-12-23 16:46:49
 * @LastEditTime: 2022-12-23 17:54:14
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\eslint\index.ts
 */
import { javascript_override } from "./javascript.eslint";
import { vue_override } from "./vue.eslint";

export const eslint_override_list = [vue_override, javascript_override];
