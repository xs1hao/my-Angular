##### 我的开发过程记录：
一、模式

运行webpack命令时，一定要指定模式。

webpack --mode development
webpack --mode production
二、--save -dev

--save：将保存配置信息到pacjage.json。默认为dependencies节点中。

--dev：将保存配置信息devDependencies节点中。

因此：

--save：将保存配置信息到pacjage.json的dependencies节点中。

--save-dev：将保存配置信息到pacjage.json的devDependencies节点中。

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。
##### 使用了 ngx-bootstrop

##### 修改了angular.json 文件 
添加自己配置的启动命令 ng run my-app:sq

##### 今天在angular中 练习使用 rxjs 2020年3月29日18:26:50

##### "skipTests": true 

ng9里面不生成测试文件用这个

##### 安装cnpm

npm install -g cnpm --registry=https://registry.npm.taobao.org

##### 模拟服务器
npm install angular-in-memory-web-api --save

#### icon-font 使用
注意 要更新5个文件；从阿里图标库下载下来的文件中，需要的文件 .eot .svg .ttf .woff 已经iconfont.css 注意： .css文件里面有部分引用路径需要修改。

#### 全局广播事件
服务需要在sharedModule的provides中注册。

##### ng -help
https://www.jianshu.com/p/65a7f2b0264e

#### Tsconfig.json相关配置说明
https://www.cnblogs.com/cczlovexw/p/11527708.html#autoid-0-0-0

#### Angular中很多在angularJs中使用的方法都Angular都不提供了
安装使用第三方插件  ngx-pipe-function；ngx-order-pipe；ngx-filter-pipe

#### 在node环境下运行ts文件
ts-node hello.ts
#### 编译ts文件
tsc hello.ts
