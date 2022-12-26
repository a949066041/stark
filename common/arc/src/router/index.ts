/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:28:47
 * @LastEditTime: 2022-12-23 22:23:44
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\index.ts
 */
import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Layout from "../components/layout/layout.vue";
import Login from "../components/login/login.vue";

const router: (routes: Array<RouteRecordRaw>) => Router = (children: Array<RouteRecordRaw>) =>
  createRouter({
    history: createWebHistory(),
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
