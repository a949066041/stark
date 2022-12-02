<!--
 * @Author: Rikka
 * @Date: 2022-12-02 21:09:49
 * @LastEditTime: 2022-12-02 21:35:36
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\notification.vue
-->
<template>
  <div class="stark-container">
    <notifications group="custom-style" position="top center" classes="n-light" :max="3" :width="400" />
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]Notification"
};
</script>
<script lang="ts" setup>
import { getCurrentInstance } from "vue";
defineExpose({
  name: "[heartbreaker]Notification"
});
</script>
<style lang="scss" scoped></style>
