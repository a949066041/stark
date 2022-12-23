/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:07:16
 * @LastEditTime: 2022-12-23 22:23:45
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\index.ts
 */
// import "./styles/dark.less";
import "./styles/arc.less";

import { registerSvgIcon } from "@kaffee/latte";
import { all_icon } from "@stark/common-iron";

registerSvgIcon(all_icon);
export { default as App } from "./components/app/app";
export { ArcIcon } from "./components/icon";
export * from "./router";
export * from "./store";
