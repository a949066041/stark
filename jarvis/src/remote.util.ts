/*
 * @Author: Rikka
 * @Date: 2022-11-24 10:12:02
 * @LastEditTime: 2022-12-18 12:41:57
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\remote.util.ts
 */
import { cassanova_config } from "./config/cassanova.config";
import { heartbreaker_config } from "./config/heartbreaker.config";
import { midas_config } from "./config/midas.config";
import { nightclub_config } from "./config/nightclub.config";
import { tiger_config } from "./config/tiger.config";
import { WebpackConfig } from "./webpack.config";

export const all_router = (path: string) => {
  return {
    nightclub: new WebpackConfig(nightclub_config, path, "").get_remote_url(),
    heartbreaker: new WebpackConfig(heartbreaker_config, path, "").get_remote_url(),
    cassanova: new WebpackConfig(cassanova_config, path, "").get_remote_url(),
    tiger: new WebpackConfig(tiger_config, path, "").get_remote_url(),
    midas: new WebpackConfig(midas_config, path, "").get_remote_url()
  };
};
