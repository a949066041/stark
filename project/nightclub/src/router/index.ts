/*
 * @Author: Rikka
 * @Date: 2022-11-12 13:25:33
 * @LastEditTime: 2022-12-09 16:08:51
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: true,
    parent_name: "root",
    name: "[nightclub]Dashboard",
    component: () => import("../views/dashboard/dashboard.vue"),
    path: "nightclub/dashboard",
    meta: {
      title: "Dashboard",
      permission: ["dashboard"],
      menu_icon: ["iron", "dashboard"]
    }
  },
  {
    is_router: true,
    parent_name: "root",
    name: "[nightclub]Icon",
    component: () => import("../views/icon.vue"),
    path: "nightclub/icon",
    meta: {
      title: "Icon",
      permission: ["icon"],
      menu_icon: ["iron", "star"]
    }
  }
];

export { router_list };
