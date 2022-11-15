<!--
 * @Author: Rikka
 * @Date: 2022-11-12 18:47:05
 * @LastEditTime: 2022-11-15 17:06:03
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\test.vue
-->
<template>
  <span @click="handleClick">template {{ date }}</span>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const date = ref(Date.now());

function handleClick() {
  date.value = Date.now();
}
defineExpose({
  handleClick,
  name: "[nightclub]Test"
});
</script>
