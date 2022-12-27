/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:28:47
 * @LastEditTime: 2022-12-05 22:03:06
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/login/login.vue";
import Layout from "../components/layout/layout.vue";
import { useMenuStore } from "..";

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
