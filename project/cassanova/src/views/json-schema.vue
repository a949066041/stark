<!--
 * @Author: Rikka
 * @Date: 2022-12-05 10:02:14
 * @LastEditTime: 2022-12-23 22:23:14
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\cassanova\src\views\json-schema.vue
-->
<template>
  <div class="stark-container p-8">
    <Form :form="form" class="max-w-screen-sm">
      <SchemaField :schema="schema" />
      <Submit @submit="onSubmit">提交</Submit>
    </Form>
  </div>
</template>
<script lang="ts">
export default {
  name: "[cassanova]JSONSchema"
};
</script>
<script lang="ts" setup>
import {
  ArrayCards,
  ArrayTable,
  Cascader,
  Checkbox,
  DatePicker,
  Editable,
  Form,
  FormCollapse,
  FormGrid,
  FormItem,
  FormLayout,
  FormTab,
  Input,
  InputNumber,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  Switch,
  TimePicker,
  Transfer,
  Upload
} from "@formily/antdv-x3";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";

import { CustomJSONSchema } from "./schema/json-schema";

const schema = CustomJSONSchema.schema;

const form = createForm();
const { SchemaField } = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    Upload,
    InputNumber
  }
});

const onSubmit = (value: string) => {
  console.log(value);
};
defineExpose({
  name: "[cassanova]JSONSchema"
});
</script>
<style lang="less" scoped></style>
