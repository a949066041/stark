/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-12-06 17:13:58
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
zip([
  import("nightclub/remote"),
  import("heartbreaker/remote"),
  import("cassanova/remote"),
  import("tiger/remote")
]).subscribe((item) => {
  menuStore.set_menu(item.flatMap(({ router_list }) => router_list));
  item.some((remote) => {
    // @ts-ignore
    const register = remote["register"] as Function;
    if (register) {
      register(app);
    }
  });
  app.use(router(menuStore.router));
  app.mount("#app");
});
