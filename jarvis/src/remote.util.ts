/*
 * @Author: Rikka
 * @Date: 2022-11-24 10:12:02
 * @LastEditTime: 2022-11-24 13:32:17
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\remote.util.ts
 */
import { heartbreaker_config } from "./config/heartbreaker.config";
import { nightclub_config } from "./config/nightclub.config";
import { WebpackConfig } from "./webpack.config";

export const all_router = (path: string) => {
  return {
    nightclub: new WebpackConfig(nightclub_config, path, "").get_remote_url(),
    heartbreaker: new WebpackConfig(
      heartbreaker_config,
      path,
      ""
    ).get_remote_url()
  };
};
