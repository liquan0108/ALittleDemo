var path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filenaem: "bundle.js",
    path: path.resolve(__dirname, "bulid"),
  },
  loader: {},
  mode: development,
  devServer: {
    // 运行项目的目录，构建后的目录。
    contentBase: resolve(_dirname, "build"),
    // 启动gzip压缩
    compress: true,
    // 开发服务器的端口号
    port: 3000,
    // 打开本地默认浏览器
    open: true,
  },
};
