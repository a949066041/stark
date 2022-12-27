/*
 * @Author: Rikka
 * @Date: 2022-12-18 11:12:26
 * @LastEditTime: 2022-12-18 12:06:32
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\src\views\permission\data\form.ts
 */

import { IDataNode } from "./permission.types";

export const form_permission: IDataNode[] = [
  {
    title: "Form",
    key: "form",
    sort: 3,
    _icon: ["iron", "form"],
    children: [
      { title: "Custom Form", key: "form-custom_form", _icon: ["iron", "form"] },
      { title: "JSON Schema", key: "form-json_schema", _icon: ["iron", "json"] }
    ]
  }
];
