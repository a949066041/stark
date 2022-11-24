/*
 * @Author: Rikka
 * @Date: 2022-11-14 20:09:46
 * @LastEditTime: 2022-11-24 10:20:07
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\webpack.config.ts
 */

import ChainableWebpackConfig from "webpack-chain";
import { resolve } from "path";
const customElement = new Set(["latte-svg"]);

class WebpackConfig {
  public config: child_config;
  private path: string;

  private _public_path: string;
  private _dist_path: string;
  constructor(config: child_config, path: string, dirname: string) {
    this.config = config;
    this.path = path;
    this._public_path = resolve(dirname, "../../public/");
    this._dist_path = resolve(dirname, "dist");
  }

  private http = () => `http${this.config.ssl ? "s" : ""}://`;

  private full_path = () => `${this.http()}${this.path}:${this.config.port}`;

  public get_remote_url = () =>
    `${this.config.name}@${this.full_path()}/${this.config.remote_file}`;
  public get_public_path = () => `${this.full_path()}`;

  public get_dev_server = () => {
    return {
      port: this.config.port,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization"
      }
    };
  };

  public get_chain_config = (config: ChainableWebpackConfig) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        if (options.compilerOptions === undefined) {
          options.compilerOptions = {};
        }
        options.compilerOptions.isCustomElement = (tag: string) =>
          customElement.has(tag);
        return options;
      });

    config.plugin("html").tap(([options]) => [
      Object.assign(options, {
        template: resolve(this._public_path, "index.html")
      })
    ]);
    config
      .plugin("copy")
      .use(require("copy-webpack-plugin"))
      .tap(() => {
        return [
          {
            patterns: [
              {
                from: this._public_path,
                to: this._dist_path,
                toType: "dir",
                noErrorOnMissing: true,
                globOptions: {
                  ignore: ["**/.DS_Store", "**/index.html"]
                }
              }
            ]
          }
        ];
      });
  };
}

interface child_config {
  port: number;
  name: string;
  remote_file: string;

  ssl?: boolean;
}

export { WebpackConfig };
