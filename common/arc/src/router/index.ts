/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:28:47
 * @LastEditTime: 2022-11-11 16:27:12
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\index.ts
 */
import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
  Router
} from "vue-router";
import Login from "../components/login/login.vue";
import Layout from "../components/layout/layout.vue";

const router: (routes: Array<RouteRecordRaw>) => Router = (
  children: Array<RouteRecordRaw>
) =>
  createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: "/login",
        component: Login
      },
      { path: "/", redirect: "/login" },
      {
        path: "/view",
        component: Layout,
        children
      }
    ]
  });

export { router };
export * from "./util";
