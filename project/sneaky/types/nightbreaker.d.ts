/*
 * @Author: Rikka
 * @Date: 2022-11-29 21:07:11
 * @LastEditTime: 2022-12-02 22:35:47
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\nightbreaker.d.ts
 */
declare module "nightclub/remote" {
  import { EnhanceRouter } from "@stark/common-arc";

  const router_list: EnhanceRouter[];

  export { router_list };
}
