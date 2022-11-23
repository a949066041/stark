<!--
 * @Author: Rikka
 * @Date: 2022-11-23 14:07:42
 * @LastEditTime: 2022-11-23 14:18:45
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-table.vue
-->
<template>
  <div class="w-1/2 pr-4">
    <el-table :data="list">
      <el-table-column label="Order" prop="order" />
      <el-table-column label="Price" prop="price" />
      <el-table-column label="Status" prop="status">
        <template #default="{ row }">
          <el-tag :type="row.status === 'pending' ? 'danger' : 'success'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
const list = Array(8)
  .fill("")
  .map(() => ({
    order: Math.random().toString(32),
    price: "￥" + (Math.random() * 1000).toFixed(2).toLocaleString(),
    status: Math.random() > 0.5 ? "pending" : "success"
  }));

export default {
  name: "[nightclub]DataTable"
};
</script>
<script lang="ts" setup>
defineExpose({
  name: "[nightclub]DataTable"
});
</script>
<style lang="scss" scoped></style>
