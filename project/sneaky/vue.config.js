/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-12-06 14:39:37
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
const { WebpackConfig, sneaky_config } = require("@stark/jarvis");

const webpack_config = new WebpackConfig(sneaky_config, "http://localhost", __dirname);
module.exports = defineConfig({
  css: webpack_config.getCssOptions(),
  transpileDependencies: true,
  devServer: {
    ...webpack_config.get_dev_server(),
    proxy: {
      "/remote": {
        target: "https://stark.rikka.cc",
        secure: false,
        changeOrigin: true
      }
    }
  },
  chainWebpack: webpack_config.get_chain_config,
  configureWebpack: {
    plugins: [
      ...webpack_config.get_plugins(),
      new ModuleFederationPlugin({
        name: "sneaky",
        shared: {
          vue: { requiredVersion: "^3.0.0", singleton: true },
          pinia: { singleton: true },
          "vue-router": { singleton: true },
          "@kaffee/latte": { singleton: true },
          "@stark/common-iron": { singleton: true },
          "@stark/common-arc": { singleton: true }
        }
      })
    ]
  }
});
