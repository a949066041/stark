# 布局

页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。想要了解一个后台项目，先要了解它的基础布局。

> 对应代码
>
> [ark-layout](https://github.com/Muromi-Rikka/stark/tree/master/common/arc/src/components/layout)

stark-workspace 中大部分页面都是基于这个 layout 的，除了个别页面如：login 等页面没有使用该 layout。如果你想在一个项目中有多种不同的 layout 也是很方便的，只要在一级路由那里选择不同的 layout 组件就行。

这里使用了 vue-router 路由嵌套, 所以一般情况下，你增加或者修改页面只会影响 app-main 这个主体区域。其它配置在 layout 中的内容如：侧边栏或者导航栏都是不会随着你主体页面变化而变化的。

```
/foo                                  /bar
+------------------+                  +-----------------+
| layout           |                  | layout          |
| +--------------+ |                  | +-------------+ |
| | foo.vue      | |  +------------>  | | bar.vue     | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

当然你也可以一个项目里面使用多个不同的 layout，只要在你想作用的路由父级上引用它就可以了。

## router-view

**Different router the same component vue** 真实的业务场景中，这种情况很多。：

可以像本项目中 editForm 和 createForm 声明两个不同的 view 但引入同一个 component。

```html
<!-- create.vue -->
<template>
  <article-detail :is-edit="false"></article-detail> //create
</template>
<script>
  import ArticleDetail from "./components/ArticleDetail";
</script>

<!-- edit.vue -->
<template> <article-detail :is-edit="true"></article-detail> //edit </template>
<script>
  import ArticleDetail from "./components/ArticleDetail";
</script>
```

## 移动端

`element-plus` 官方对自己的定位是桌面端后台框架，而且对于管理后台这种重交互的项目来说是不能通过简单的适配来满足桌面端和移动端两端不同的交互，所以真要做移动版后台，建议重新做一套系统。

所以本项目也不会适配移动端，只是用 `media query` 做了一点简单的响应式布局，有需求请自行修改。
