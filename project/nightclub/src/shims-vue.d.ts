/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-11 13:34:54
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
