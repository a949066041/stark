# 项目结构

## project 页面模块目录

project 为项目核心目录，负责存放远程模块以及容器项目。

project 目前分为两种类型

1. 容器项目 (比如 sneaky)
2. 远程模块项目

所有的项目均可单独启动，可独立开发部署。

## jarvis 项目配置

J.A.R.V.I.S 主要负责整体工程的配置管理，提供了管家咨询的服务。

目前存放了多种配置项

1. webpack 配置/vue-cli 配置
2. tailwind.css 配置
3. eslint 配置
4. stylelint 配置
5. project 项目单独配置

## friday 项目工具

Friday主要提供项目内所使用的node脚本

目前存在的脚本

1. dist拷贝
2. 格式化SARIF文件
3. polp项目模板生成

## environment `暂未使用`

可存储项目中使用的环境变量

## dist

最外层的`dist`目录为聚合工程的成果物目录，包含`project`内的所有项目成果物

## common

> 存放一些项目通用的库

### arc

`arc` 为项目的核心库，项目通用的`store`,`components`;项目路由生成;均由此库提供。

### copper

`copper` 主要存放项目通用的静态资源,无代码编写功能。

### gold

`gold` 主要存放项目通用的工具类,需做到尽量的解耦

### iron

`iron` 为项目中所用的图标库以及图标的生成

## silver

`silver` 为项目提供非业务型的通用组件