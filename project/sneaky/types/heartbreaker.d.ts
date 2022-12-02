/*
 * @Author: Rikka
 * @Date: 2022-11-29 21:07:40
 * @LastEditTime: 2022-12-02 22:25:16
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\heartbreaker.d.ts
 */
declare module "heartbreaker/remote" {
  import { EnhanceRouter } from "@stark/common-arc";
  import { App } from "vue";

  const router_list: EnhanceRouter[];
  function register(app: App<Element>);
  export { router_list, register };
}
