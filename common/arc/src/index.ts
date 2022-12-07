/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:07:16
 * @LastEditTime: 2022-12-07 15:42:21
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\index.ts
 */
import "./styles/arc.less";

import { registerSvgIcon } from "@kaffee/latte";
import { all_icon } from "@stark/common-iron";
registerSvgIcon(all_icon);
export { default as App } from "./components/app/app.vue";
export * from "./router";
export * from "./store";
