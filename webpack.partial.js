const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  externals: {        // 打包除外的文件
    echarts: 'echarts'
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        moment: {
          name: 'moment',
          test: /[\\/]node_modules[\\/]moment[\\/]/,
          priority: -6
        },
        handsontable: {
          name: 'handsontable',
          test: /[\\/]node_modules[\\/]handsontable[\\/]/,
          priority: -7
        },
        angular: {
          name: 'angular',
          test: /[\\/]node_modules[\\/]@angular[\\/]/,
          priority: -9
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          name: 'default',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new webpack.DefinePlugin({
      "VERSION": JSON.stringify("4711")
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      chunksSortMode: 'manual',
      chunks: ['styles', 'runtime', 'polyfills', 'scripts', 'vendors', 'main'] // 限定顺序，main.js必须在最后
    })
  ]
}
