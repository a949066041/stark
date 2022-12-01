<!--
 * @Author: Rikka
 * @Date: 2022-11-29 22:42:31
 * @LastEditTime: 2022-12-01 20:46:04
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\milkdown.vue
-->
<template>
  <div class="stark-container p-4">
    <description>
      <h2>milkdown</h2>
      <p>一款markdown编辑器</p>
      <el-link>
        <a target="_blank" href="https://milkdown.dev/why-milkdown">https://milkdown.dev/why-milkdown</a>
      </el-link>
    </description>
    <VueEditor :editor="editor" />
  </div>
</template>
<script lang="ts">
export default {
  name: "[hearbreaker]Milkdown"
};
</script>
<script lang="ts" setup>
import { Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { VueEditor, useEditor } from "@milkdown/vue";
import { commonmark } from "@milkdown/preset-commonmark";
import { menu } from "@milkdown/plugin-menu";
import { Description } from "@stark/common-silver";
const { editor } = useEditor((root) =>
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
    })
    .use(nord)
    .use(commonmark)
    .use(menu)
);
defineExpose({
  name: "[hearbreaker]Milkdown"
});
</script>
<style lang="scss" scoped></style>
