/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-12-23 22:21:48
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { zip } from "rxjs";
import { createApp } from "vue";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);
zip([
  import("nightclub/remote"),
  import("heartbreaker/remote"),
  import("cassanova/remote"),
  import("tiger/remote"),
  import("midas/remote")
]).subscribe((item) => {
  app.use(router);
  menuStore.setMenu(
    "main",
    item.flatMap(({ router_list }) => router_list)
  );
  item.some((remote) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-types
    const register = remote["register"] as Function;
    if (register) {
      register(app);
    }
  });

  app.mount("#app");
});
