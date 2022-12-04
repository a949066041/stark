<!--
 * @Author: Rikka
 * @Date: 2022-12-04 11:35:35
 * @LastEditTime: 2022-12-04 11:46:45
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\cassanova\src\views\custom-form.vue
-->

<template>
  <div class="stark-container">
    <Form :form="form" :label-col="6" :wrapper-col="10" @autoSubmit="log" @autoSubmitFailed="log">
      <SchemaField>
        <SchemaStringField name="input" title="输入框" x-decorator="FormItem" x-component="Input" :required="true" />
        <SchemaStringField
          name="select"
          title="选择框"
          x-decorator="FormItem"
          x-component="Select"
          :enum="[
            {
              label: '选项1',
              value: 1
            },
            {
              label: '选项2',
              value: 2
            }
          ]"
          :required="true"
        />
      </SchemaField>
      <FormButtonGroup alignFormItem>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </Form>
  </div>
</template>
<script lang="ts">
export default {
  name: "[cassanova]CustomForm"
};
</script>
<script lang="ts" setup>
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";
import { Form, Input, Select, FormItem, FormButtonGroup, Submit } from "@formily/element-plus";
const form = createForm();
const fields = createSchemaField({ components: { Input, Select, FormItem } });
const { SchemaStringField, SchemaField } = fields;
function log(value: any) {
  console.log(value);
}
defineExpose({
  name: "[cassanova]CustomForm"
});
</script>
<style lang="scss" scoped></style>
