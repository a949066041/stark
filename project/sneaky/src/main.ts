/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-11 16:44:28
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\main.ts
 */
import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { router_list } from "./router";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router([]));
app.mount("#app");

useMenuStore(pinia).set_menu(router_list);
