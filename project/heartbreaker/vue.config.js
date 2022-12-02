/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-12-02 21:51:58
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
const { WebpackConfig, heartbreaker_config } = require("@stark/jarvis");

const webpack_config = new WebpackConfig(heartbreaker_config, "http://localhost", __dirname);

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: webpack_config.get_dev_server(),
  publicPath: webpack_config.get_public_path(),
  chainWebpack: webpack_config.get_chain_config,
  configureWebpack: {
    optimization: {
      usedExports: true,
      splitChunks: false
    },
    plugins: [...webpack_config.get_plugins(), webpack_config.get_remote_mf_plugin({ register: true })]
  }
});
