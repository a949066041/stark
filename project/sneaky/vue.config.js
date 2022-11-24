/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-24 10:20:40
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
const { WebpackConfig, sneaky_config, all_router } = require("@stark/jarvis");

const webpack_config = new WebpackConfig(sneaky_config, "localhost", __dirname);

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: webpack_config.get_dev_server(),
  chainWebpack: webpack_config.get_chain_config,
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
        remotes: all_router(),
        shared: {
          vue: { requiredVersion: "^3.0.0", singleton: true },
          pinia: { singleton: true }
        }
      })
    ]
  }
});
