/*
 * @Author: Rikka
 * @Date: 2022-12-18 12:39:09
 * @LastEditTime: 2022-12-23 22:22:16
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\midas\src\main.ts
 */
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { createApp } from "vue";

import { router_list } from "./router";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);
app.use(router);

menuStore.setMenu("midas", router_list);

app.mount("#app");
