/*
 * @Author: Rikka
 * @Date: 2022-12-13 21:04:14
 * @LastEditTime: 2022-12-23 22:22:12
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { createApp } from "vue";

import { router_list } from "./router";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

menuStore.set_menu(router_list);
app.use(router(menuStore.router));
app.mount("#app");
