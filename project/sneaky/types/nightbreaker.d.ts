/*
 * @Author: Rikka
 * @Date: 2022-11-29 21:07:11
 * @LastEditTime: 2022-12-29 21:45:11
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\nightbreaker.d.ts
 */
declare module "nightclub/remote" {
  import { EnhanceRouter } from "@stark/common-arc";

  const router_list: EnhanceRouter[];
  function register(app: App<Element>): void;

  export { router_list, register };
}
