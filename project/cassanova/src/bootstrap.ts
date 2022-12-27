/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:46:38
 * @LastEditTime: 2022-12-23 22:23:23
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\cassanova\src\bootstrap.ts
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

menuStore.setMenu("cassanova", router_list);
app.use(router);
app.mount("#app");
