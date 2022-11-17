/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-11-17 21:52:16
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\bootstrap.ts
 */
import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { router_list } from "./router";
import { from, map } from "rxjs";
const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

from(import("nightclub/router"))
  .pipe(map((item) => item.router_list))
  .subscribe((r) => {
    menuStore.set_menu(r);
    app.use(router(menuStore.router));
    app.mount("#app");
  });
