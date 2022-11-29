<!--
 * @Author: Rikka
 * @Date: 2022-11-29 22:42:31
 * @LastEditTime: 2022-11-29 22:49:54
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\milkdown.vue
-->
<template>
  <div class="stark-container">
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
const { editor } = useEditor((root) =>
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
    })
    .use(nord)
    .use(menu)
    .use(commonmark)
);
defineExpose({
  name: "[hearbreaker]Milkdown"
});
</script>
<style lang="scss" scoped></style>
