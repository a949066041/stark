/*
 * @Author: Rikka
 * @Date: 2022-11-14 20:09:46
 * @LastEditTime: 2022-11-14 21:02:40
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\webpack.config.ts
 */
class WebpackConfig {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }
  public readonly sneaky_config = {
    port: 4400,
    name: "sneaky"
  };
  public readonly nightclub_config: child_config = {
    port: 4401,
    name: "nightclub",
    remote_file: "remote-entry.js"
  };
  public get_remote_url = (config: child_config) =>
    `${config.name}@http://${this.path}:${config.port}/${config.remote_file}`;
  public get_public_path = (config: child_config) =>
    `http://${this.path}:${config.port}`;
}

interface child_config {
  port: number;
  name: string;
  remote_file: string;
}

export { WebpackConfig };
