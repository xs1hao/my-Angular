const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");

module.exports = {
  entry: {
    polyfills: "./src/polyfills.ts",
    app: "./src/main.ts",
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "[name].js",
    chunkFilename: "[name].[contenthash:8].chunk.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        moment: {
          name: "moment",
          test: /[\\/]node_modules[\\/]moment[\\/]/,
          priority: -6,
        },
        handsontable: {
          name: "handsontable",
          test: /[\\/]node_modules[\\/]handsontable[\\/]/,
          priority: -7,
        },
        angular: {
          name: "angular",
          test: /[\\/]node_modules[\\/]@angular[\\/]/,
          priority: -9,
        },
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          name: "default",
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    // }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("4711"),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve(__dirname, "src/index.html"),
      chunksSortMode: "manual",
      chunks: ["styles", "runtime", "polyfills", "scripts", "vendors", "main"], // 限定顺序，main.js必须在最后
    }),
  ],
  devServer: {
    proxy: { // 接口代理配置；
      '/api': {
        target: 'http://localhost:3000', // 本地模拟的网易云音乐接口
        // 发送请求时，请求路径重写：将 /api/xxx --> /xxx （去掉/api）
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    contentBase: false,
    compress: true,
    port: 4201,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true,
  },
};
