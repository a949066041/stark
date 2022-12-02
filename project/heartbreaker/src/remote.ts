/*
 * @Author: Rikka
 * @Date: 2022-12-02 21:45:04
 * @LastEditTime: 2022-12-02 22:34:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\remote.ts
 */
import { App } from "vue";
import Notifications from "@kyvg/vue3-notification";
import { router_list } from "./router";

function register(app: App<Element>) {
  app.use(Notifications);
}

export { register, router_list };
