/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:28:47
 * @LastEditTime: 2022-12-23 22:23:44
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";

import { useMenuStore } from "..";
import Layout from "../components/layout/layout.vue";
import Login from "../components/login/login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: Login
    },
    { path: "/", redirect: "/login" },
    {
      path: "/view",
      name: "View",
      component: Layout
    }
  ]
});

let hasRouter = true;

router.beforeEach((to, from, next) => {
  if (hasRouter) {
    const menuStore = useMenuStore();
    menuStore.registryRoute();
    hasRouter = false;
    next({ ...to, replace: true });
    return;
  }
  next();
});

export { router };
export * from "./util";
