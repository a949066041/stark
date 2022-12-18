/*
 * @Author: Rikka
 * @Date: 2022-12-18 11:14:02
 * @LastEditTime: 2022-12-18 11:56:03
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\src\views\permission\data\permission.types.ts
 */
import { DataNode } from "ant-design-vue/lib/tree";

export interface IDataNode extends DataNode {
  sort?: number;
  _icon?: [string, string];
}
