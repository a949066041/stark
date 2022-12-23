<!--
 * @Author: Rikka
 * @Date: 2022-11-29 21:59:33
 * @LastEditTime: 2022-12-23 22:22:42
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\wangEditor.vue
-->
<template>
  <div class="stark-container private-container">
    <description>
      <h2>WangEditor</h2>
      <p>方便的富文本编辑方案</p>
      <p>使用 @wangeditor/editor 和 @wangeditor/editor-for-vue@next</p>
    </description>
    <div style="border: 1px solid #ccc">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :default-config="editorConfig"
        :mode="mode"
        @on-created="handleCreated"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]WangEditor"
};
</script>
<script lang="ts" setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { Description } from "@stark/common-silver";
import { IDomEditor } from "@wangeditor/editor";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
});

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == undefined) return;
  editor.destroy();
});

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const mode = "default";
defineExpose({
  name: "[heartbreaker]WangEditor"
});
</script>
<style lang="less" scoped>
:global(:root, :host) {
  // textarea - css vars
  --w-e-textarea-bg-color: #fff;
  --w-e-textarea-color: #333;
  --w-e-textarea-border-color: #ccc;
  --w-e-textarea-slight-border-color: #e8e8e8;
  --w-e-textarea-slight-color: #d4d4d4;
  --w-e-textarea-slight-bg-color: #f5f2f0;
  --w-e-textarea-selected-border-color: #b4d5ff; // 选中的元素，如选中了分割线
  --w-e-textarea-handler-bg-color: #4290f7; // 工具，如图片拖拽按钮

  // toolbar - css vars
  --w-e-toolbar-color: #595959;
  --w-e-toolbar-bg-color: #fff;
  --w-e-toolbar-active-color: #333;
  --w-e-toolbar-active-bg-color: #f1f1f1;
  --w-e-toolbar-disabled-color: #999;
  --w-e-toolbar-border-color: #e8e8e8;

  // modal - css vars
  --w-e-modal-button-bg-color: #fafafa;
  --w-e-modal-button-border-color: #d9d9d9;
}
.private-container {
  @apply p-4;
}
</style>
