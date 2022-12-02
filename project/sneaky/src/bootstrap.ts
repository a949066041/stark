/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-12-02 22:36:35
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\bootstrap.ts
 */
import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { zip } from "rxjs";
const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

zip([import("nightclub/remote"), import("heartbreaker/remote"), import("cassanova/remote")]).subscribe((item) => {
  menuStore.set_menu(item.flatMap(({ router_list }) => router_list));
  item.some((remote) => {
    // @ts-ignore
    const register = remote["register"] as Function;
    if (register) {
      register(app);
    }
  });
  app.use(router(menuStore.router));
  console.log(item);
  app.mount("#app");
});
