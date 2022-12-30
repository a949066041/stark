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

const allRemote = zip(
  [
    getRemoteUrl(4401, "nightclub", true),
    getRemoteUrl(4402, "heartbreaker", true),
    getRemoteUrl(4403, "cassanova", true),
    getRemoteUrl(4404, "tiger", true),
    getRemoteUrl(4405, "midas", true)
  ].map(([remoteEntry, scope, module]) => loadRemote<RemoteType>(remoteEntry, scope, module))
);

export { allRemote };
