/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:46:38
 * @LastEditTime: 2022-12-07 15:44:21
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\cassanova\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { router_list } from "./router";
const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

menuStore.set_menu(router_list);
app.use(router(menuStore.router));
app.mount("#app");
