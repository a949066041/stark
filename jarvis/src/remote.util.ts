/*
 * @Author: Rikka
 * @Date: 2022-11-24 10:12:02
 * @LastEditTime: 2022-11-24 10:57:52
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\remote.util.ts
 */
import { nightclub_config } from "./config/nightclub.config";
import { WebpackConfig } from "./webpack.config";

export const all_router = (path: string) => {
  return {
    nightclub: new WebpackConfig(nightclub_config, path, "").get_remote_url()
  };
};
