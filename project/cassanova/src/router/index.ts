/*
 * @Author: Rikka
 * @Date: 2022-11-29 20:54:41
 * @LastEditTime: 2022-11-29 21:14:07
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\cassanova\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "[cassanova]Project",
    meta: {
      title: "cassanova project",
      permission: []
    }
  }
];

export { router_list };
