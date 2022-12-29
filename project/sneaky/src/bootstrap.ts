/*
 * @Author: Rikka
 * @Date: 2022-11-12 14:30:07
 * @LastEditTime: 2022-12-29 23:12:34
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\bootstrap.ts
 */
import "./styles/tailwind.less";

import { App, EnhanceRouter, router, useMenuStore } from "@stark/common-arc";
import { loadRemote } from "@stark/common-gold";
import { createPinia } from "pinia";
import { zip } from "rxjs";
import { App as AppT, createApp } from "vue";

const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);

interface RemoteType {
  router_list: EnhanceRouter[];
  register?: (app: AppT) => void;
}
const allRemote = [
  ["http://localhost:4401/remote-entry.js", "nightclub", "./remote"],
  ["http://localhost:4402/remote-entry.js", "heartbreaker", "./remote"],
  ["http://localhost:4403/remote-entry.js", "cassanova", "./remote"],
  ["http://localhost:4404/remote-entry.js", "tiger", "./remote"],
  ["http://localhost:4405/remote-entry.js", "midas", "./remote"]
].map(([remoteEntry, scope, module]) => loadRemote<RemoteType>(remoteEntry, scope, module));
zip(allRemote).subscribe((remote) => {
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
