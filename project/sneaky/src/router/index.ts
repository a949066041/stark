/*
 * @Author: Rikka
 * @Date: 2022-11-11 16:27:27
 * @LastEditTime: 2022-11-11 17:58:04
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "Test1",
    meta: {
      title: "测试1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1",
    name: "Test1-1",
    meta: {
      title: "测试1-1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1",
    name: "Test1-2",
    meta: {
      title: "测试1-2",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1-2",
    name: "Test1-2-1",
    meta: {
      title: "测试1-2-1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "Test1",
    name: "Test1-3",
    meta: {
      title: "测试1-3",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "root",
    name: "Test2",
    meta: {
      title: "测试2",
      permission: []
    }
  }
];

export { router_list };
