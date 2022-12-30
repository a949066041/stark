/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-12-29 23:12:34
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { createApp } from "vue";

import { allRemote } from "./remote";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

allRemote.subscribe((remote) => {
  app.use(router);
  menuStore.setMenu(
    "main",
    remote.flatMap(({ router_list }) => router_list)
  );
  remote.some((_remote) => {
    if (_remote.register) {
      _remote.register(app);
    }
  });
  app.mount("#app");
});
