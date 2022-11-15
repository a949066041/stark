/*
 * @Author: Rikka
 * @Date: 2022-11-12 13:25:33
 * @LastEditTime: 2022-11-15 17:27:00
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "Test1",
    meta: {
      title: "[nightclub]测试1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1",
    name: "Test1-1",
    meta: {
      title: "[nightclub]测试1-1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1",
    name: "Test1-2",

    meta: {
      title: "[nightclub]测试1-2",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "Test1-2",
    name: "Test1-2-1",
    path: "test1-2",
    component: () => import("../views/test.vue"),
    meta: {
      title: "[nightclub]测试1-2-1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1",
    name: "Test1-3",
    meta: {
      title: "[nightclub]测试1-3",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "root",
    name: "Test2",
    path: "test-2",
    component: () => import("../views/test2.vue"),
    meta: {
      title: "[nightclub]测试2",
      permission: []
    }
  }
];

export { router_list };
