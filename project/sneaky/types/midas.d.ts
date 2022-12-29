/*
 * @Author: Rikka
 * @Date: 2022-11-26 13:06:30
 * @LastEditTime: 2022-12-29 21:44:57
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\midas.d.ts
 */

declare module "midas/remote" {
  import { EnhanceRouter } from "@stark/common-arc";

  const router_list: EnhanceRouter[];
  function register(app: App<Element>): void;

  export { router_list, register };
}
