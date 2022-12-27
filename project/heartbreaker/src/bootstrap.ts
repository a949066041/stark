/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:39:54
 * @LastEditTime: 2022-12-07 15:44:03
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { router_list } from "./router";
import { register } from "./remote";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

menuStore.setMenu("heartbreaker", router_list);
app.use(router);
register(app);
app.mount("#app");
