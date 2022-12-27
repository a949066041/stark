/*
 * @Author: Rikka
 * @Date: 2022-12-18 12:39:09
 * @LastEditTime: 2022-12-18 12:45:44
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\midas\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    path: "",
    parent_name: "root",
    name: "[midas]Project",
    meta: {
      title: "midas project",
      permission: ["stark"]
    }
  }
];

export { router_list };
