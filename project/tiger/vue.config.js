const { defineConfig } = require("@vue/cli-service");
const { WebpackConfig, tiger_config } = require("@stark/jarvis");

const webpack_config = new WebpackConfig(tiger_config, "http://localhost", __dirname);

module.exports = defineConfig({
  css: webpack_config.getCssOptions(),
  transpileDependencies: true,
  devServer: webpack_config.get_dev_server(),
  publicPath: webpack_config.get_public_path(),
  chainWebpack: webpack_config.get_chain_config,
  configureWebpack: {
    optimization: {
      usedExports: true,
      splitChunks: false
    },
    plugins: [...webpack_config.get_plugins(), webpack_config.get_remote_mf_plugin({})]
  }
});
