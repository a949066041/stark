/*
 * @Author: Rikka
 * @Date: 2022-12-05 11:45:22
 * @LastEditTime: 2022-12-05 11:45:28
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\src\bootstrap.ts
 */
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
