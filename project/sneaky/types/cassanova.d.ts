/*
 * @Author: Rikka
 * @Date: 2022-11-26 13:06:30
 * @LastEditTime: 2022-12-02 22:35:34
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\cassanova.d.ts
 */

declare module "cassanova/remote" {
  import { EnhanceRouter } from "@stark/common-arc";

  const router_list: EnhanceRouter[];

  export { router_list };
}
