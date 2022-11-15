<!--
 * @Author: Rikka
 * @Date: 2022-11-15 17:26:13
 * @LastEditTime: 2022-11-15 17:27:56
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\test2.vue
-->
<template>
  <span @click="handleClick">template2 {{ date }}</span>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const date = ref(Date.now());

function handleClick() {
  date.value = Date.now();
}
defineExpose({
  handleClick,
  name: "[nightclub]Test2"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]Test2"
};
</script>
