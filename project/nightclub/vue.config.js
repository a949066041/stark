/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-24 10:20:45
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
const { WebpackConfig, nightclub_config } = require("@stark/jarvis");

const webpack_config = new WebpackConfig(
  nightclub_config,
  "localhost",
  __dirname
);

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: webpack_config.get_dev_server(),
  publicPath: webpack_config.get_public_path(webpack_config.nightclub_config),
  chainWebpack: webpack_config.get_chain_config,
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
        name: webpack_config.config.name,
        filename: webpack_config.config.remote_file,
        library: { type: "var", name: webpack_config.config.name },
        exposes: {
          "./router": "./src/router/index.ts"
        },
        shared: {
          vue: { requiredVersion: "^3.0.0", singleton: true },
          pinia: { singleton: true }
        }
      })
    ]
  }
});
