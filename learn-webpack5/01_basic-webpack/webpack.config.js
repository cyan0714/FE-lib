const path = require('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    // dirname 可以获取当前文件的绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  }
}