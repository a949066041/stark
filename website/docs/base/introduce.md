# 介绍

stark-workspace 是一个后台前端解决方案，它基于 vue 和 element-plus 实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

## 前序准备

你需要在本地安装 nodejs、git 和 pnpm。本项目技术栈基于 TypeScript、vue3.2、pinia、vue-router 、vue-cli 、axios 和 element-plus，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 安装

```bash
# 克隆项目
git clone https://github.com/Muromi-Rikka/stark.git

# 进入项目目录
cd stark

# 安装依赖
pnpm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
pnpm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
pnpm serve:all
```

> TIP
>
> 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。

启动完成后打开浏览器访问 http://localhost:4400， 你看到页面就代表操作成功了。

接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、国际化、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。

## Contribution

本文档项目基于 docusaurus 开发。

有任何修改和建议都可以该项目 pr 和 issue

stark workspace 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和反馈。
