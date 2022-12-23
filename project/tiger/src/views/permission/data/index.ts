/*
 * @Author: Rikka
 * @Date: 2022-12-18 11:01:00
 * @LastEditTime: 2022-12-23 19:08:32
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\src\views\permission\data\index.ts
 */
import { component_permission } from "./component";
import { dashboard_permission } from "./dashboard";
import { feature_permission } from "./feature";
import { form_permission } from "./form";
import { icon_permission } from "./icon";

const permission_tree = [
  ...component_permission,
  ...dashboard_permission,
  ...feature_permission,
  ...form_permission,
  ...icon_permission
].sort((x, y) => {
  const x_sort = x.sort ?? 99_999;
  const y_sort = y.sort ?? 99_999;
  return x_sort - y_sort;
});
export { permission_tree };
