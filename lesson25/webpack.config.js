const { resolve } = require("path");

module.exports = {
  //  mode 当前的运行模式：开发环境/生产环境/不指定环境
  mode: 'development',
  devtool: "hidden-source-map",
  entry: {
    main: './src/index.js',
  },
  output: {
    path: resolve(__dirname, "dist"), // 输出文件夹的绝对路径
    filename: "[name].[chunkhash:8].js", // 输出的文件名
  }
}
