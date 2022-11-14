/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-14 20:53:37
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const { ModuleFederationPlugin } = require("webpack").container;
const { WebpackConfig } = require("@stark/jarvis");

const public_path = path.resolve(__dirname, "../../public/");
const dist_path = path.resolve(__dirname, "dist");

const webpack_config = new WebpackConfig("localhost");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port: webpack_config.sneaky_config.port },
  chainWebpack: (config) => {
    config.plugin("html").tap(([options]) => [
      Object.assign(options, {
        template: path.resolve(public_path, "index.html")
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
                from: public_path,
                to: dist_path,
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
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      new ModuleFederationPlugin({
        name: "sneaky",
        remotes: {
          nightclub: webpack_config.get_remote_url(
            webpack_config.nightclub_config
          )
        },
        shared: {
          vue: { requiredVersion: "^3.0.0", eager: true }
        }
      })
    ]
  }
});
