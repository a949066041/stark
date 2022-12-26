/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:45:04
 * @LastEditTime: 2022-12-23 22:23:05
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\remote.ts
 */
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import { App } from "vue";

function register(app: App<Element>) {
  app.use(Notifications, { velocity });
}

export { register };

export { router_list } from "./router";
