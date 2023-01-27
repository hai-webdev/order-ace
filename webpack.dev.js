const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

// webpack的开发环境配置，从基本配置中合并
// 合并是利用 webpack-merge 完成的： https://github.com/survivejs/webpack-merge
const devConfig = {
  mode: "development",
  // devtool: "source-map",
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      "/api.php/": {
        target: "http://aceglobal-acq.com/",
      },
    },
    stats: "minimal",
  },
};
module.exports = merge(baseConfig, devConfig);
