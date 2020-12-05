
// webpack 打包
// https://blog.csdn.net/weixin_36185028/article/details/81117730
const path = require("path");

module.exports = {
    // webpack 打包一个一个的 文件 entry 是一个对象；每个文件单独列出来
    // 下面是 将多个文件打包成一个
    entry:[
        './dist/my-app/polyfills.js',
        './dist/my-app/runtime.js',
        './dist/my-app/main.js'
    ],
    output: {
        // filename: "[name].js" ,
        //根据entry 的 key 生成对应文件的名称 如上面注释  会生成 1.js 2.js
        // 生成的文件到 当前目录下 文件下
        path: path.resolve(__dirname, "./dist/my-app"),// 输出路径
        filename: "index.js" // 输出文件名称
    },
    mode:'development'

}
console.log('__dirname:',__dirname);
