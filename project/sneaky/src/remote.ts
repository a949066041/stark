/*
 * @Author: Rikka
 * @Date: 2023-01-02 22:26:46
 * @LastEditTime: 2023-01-02 23:31:52
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\src\remote.ts
 */
import { EnhanceRouter } from "@stark/common-arc";
import { loadRemote } from "@stark/common-gold";
import { zip } from "rxjs";
import { App } from "vue";

interface RemoteType {
  router_list: EnhanceRouter[];
  register?: (app: App) => void;
}

const getRemoteUrl = (port: number, name: string, online = true) => {
  return window.location.host === "stark.rikka.cc" || online
    ? [`https://stark.rikka.cc/remote/${name}/remote-entry.js`, name, "./remote"]
    : [`http://localhost:${port}/remote-entry.js`, name, "./remote"];
};
const dev = true;
const onlineList = new Set(dev ? [] : ["nightclub", "heartbreaker", "cassanova", "tiger", "midas"]);
const allRemote = zip(
  [
    getRemoteUrl(4401, "nightclub", onlineList.has("nightclub")),
    getRemoteUrl(4402, "heartbreaker", onlineList.has("heartbreaker")),
    getRemoteUrl(4403, "cassanova", onlineList.has("cassanova")),
    getRemoteUrl(4404, "tiger", onlineList.has("tiger")),
    getRemoteUrl(4405, "midas", onlineList.has("midas"))
  ].map(([remoteEntry, scope, module]) => loadRemote<RemoteType>(remoteEntry, scope, module))
);

export { allRemote };
