/*
 * @Author: Rikka
 * @Date: 2022-11-24 10:12:02
 * @LastEditTime: 2022-11-24 10:20:29
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\remote.util.ts
 */
import { nightclub_config } from "./config/nightclub.config";
import { WebpackConfig } from "./webpack.config";

export const all_router = () => {
  return {
    nightclub: new WebpackConfig(
      nightclub_config,
      "localhost",
      ""
    ).get_remote_url()
  };
};
