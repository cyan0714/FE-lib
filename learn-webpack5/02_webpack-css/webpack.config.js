const path = require('path')
const { default: postcss } = require('postcss')

module.exports = {
  entry: "./src/main.js",
  output: {
    // dirname 可以获取当前文件的绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 1.loader 的写法(语法糖),可能不常用，因为加载一个文件可能需要多个 loader。
        // loader: "css-loader"

        // 2.完整的写法
        use: [
          // 1.写法1
          // {
          //   loader: "css-loader"
          // }
          // 2.写法2
          "style-loader",
          "css-loader",
          "postcss-loader",

          // 根目录下 postcss.config.js 中的内容可以替代下面的写法
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("autoprefixer")
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },

      // 合并写法
      // {
      //   test: /\.(scss|css)$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "sass-loader"
      //   ]
      // }
    ]
  }
}