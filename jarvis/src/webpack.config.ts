/*
 * @Author: Rikka
 * @Date: 2022-11-14 20:09:46
 * @LastEditTime: 2022-12-18 10:42:40
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\webpack.config.ts
 */

import ChainableWebpackConfig from "webpack-chain";
import { resolve } from "path";
import { default as minimist } from "minimist";
import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const customElement = new Set(["latte-svg"]);

class WebpackConfig {
  public config: child_config;
  private path: string;

  private _public_path: string;
  private _dist_path: string;
  private _vue_arguments: minimist.ParsedArgs;
  constructor(config: child_config, path: string, dirname: string) {
    this._vue_arguments = minimist(process.argv.slice(2), {});
    this.config = config;
    if (this._vue_arguments._.includes("serve")) {
      this.path = path;
      this.full_path = `${this.path}:${this.config.port}`;
    } else {
      if (config.name === "sneaky") {
        this.path = "https://stark.rikka.cc";
        this.full_path = `${this.path}`;
      } else {
        this.path = `https://stark.rikka.cc/remote/${config.name}`;
        this.full_path = `${this.path}`;
      }
    }
    this._public_path = resolve(dirname, "../../public/");
    this._dist_path = resolve(dirname, "dist");
  }

  private full_path: string;

  public get_remote_url = () => `${this.config.name}@${this.full_path}/${this.config.remote_file}`;
  public get_public_path = () => `${this.full_path}`;

  public get_dev_server = () => {
    return {
      port: this.config.port,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    };
  };

  public getCssOptions() {
    return {
      loaderOptions: {
        less: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    };
  }

  public get_chain_config = (config: ChainableWebpackConfig) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag: string) => customElement.has(tag)
        };
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

  public get_plugins = () => {
    const AutoImport = require("unplugin-auto-import/webpack");
    const Components = require("unplugin-vue-components/webpack");
    const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");
    return [
      AutoImport({
        resolvers: [AntDesignVueResolver()]
      }),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ];
  };

  public get_remote_mf_plugin = (options: RemoteMFPluginOption) => {
    const { ModuleFederationPlugin } = require("webpack").container;
    const exposes: Record<string, string> = {
      "./remote": "./src/remote.ts"
    };

    return new ModuleFederationPlugin({
      name: this.config.name,
      filename: this.config.remote_file,
      library: { type: "var", name: this.config.name },
      exposes,
      shared: {
        vue: { requiredVersion: "^3.0.0", singleton: true },
        pinia: { singleton: true },
        "vue-router": { singleton: true },
        "@kaffee/latte": { singleton: true },
        "@stark/common-iron": { singleton: true, version: "workspace:^1.0.0" },
        "@stark/common-arc": { singleton: true, version: "workspace:^1.0.0" }
      }
    });
  };

  public load_environment() {
    let environmentFile = ".env";
    if (this._vue_arguments["mode"]) {
      environmentFile = environmentFile + `.${this._vue_arguments["mode"]}`;
    }
    const environmentPath = resolve("../../environment", environmentFile);
    const environment = dotenv.config({ path: environmentPath });
    dotenvExpand.expand(environment);
  }
}

interface RemoteMFPluginOption {
  register?: boolean;
}

interface child_config {
  port: number;
  name: string;
  remote_file: string;
}

export { WebpackConfig };
