/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-12 14:48:33
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const { ModuleFederationPlugin } = require("webpack").container;

const public_path = path.resolve(__dirname, "../../public/");
const dist_path = path.resolve(__dirname, "dist");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port: 4301 },
  publicPath: "http://localhost:4301",
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
    optimization: {
      usedExports: true,
      splitChunks: false
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      new ModuleFederationPlugin({
        name: "nightclub",
        filename: "remote-entry.js",
        library: { type: "var", name: "nightclub" },
        exposes: {
          "./router": "./src/router/index.ts"
        }
      })
    ]
  }
});
