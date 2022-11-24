/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-11-24 13:38:26
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\bootstrap.ts
 */
import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { router_list } from "./router";
import { from, map, zip } from "rxjs";
const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

zip([import("nightclub/router"), import("heartbreaker/router")]).subscribe(
  (item) => {
    menuStore.set_menu(item.flatMap(({ router_list }) => router_list));
    app.use(router(menuStore.router));
    app.mount("#app");
  }
);
