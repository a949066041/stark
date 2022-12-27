/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:39:54
 * @LastEditTime: 2022-12-23 22:23:07
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { createApp } from "vue";

import { register } from "./remote";
import { router_list } from "./router";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

menuStore.setMenu("heartbreaker", router_list);
app.use(router);
register(app);
app.mount("#app");
