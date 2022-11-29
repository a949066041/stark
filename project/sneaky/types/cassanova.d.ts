/*
 * @Author: Rikka
 * @Date: 2022-11-26 13:06:30
 * @LastEditTime: 2022-11-29 21:07:33
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\mf.d.ts
 */

declare module "cassanova/router" {
  import { EnhanceRouter } from "@stark/common-arc";

  const router_list: EnhanceRouter[];
  export { router_list };
}
