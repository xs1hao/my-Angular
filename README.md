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