/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:45:04
 * @LastEditTime: 2022-12-04 11:21:04
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\remote.ts
 */
import { App } from "vue";
import Notifications from "@kyvg/vue3-notification";
import { router_list } from "./router";
import velocity from "velocity-animate";

function register(app: App<Element>) {
  app.use(Notifications, { velocity });
}

export { register, router_list };
