/*
 * @Author: Rikka
 * @Date: 2022-12-18 11:11:18
 * @LastEditTime: 2022-12-18 12:05:27
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\src\views\permission\data\component.ts
 */

import { IDataNode } from "./permission.types";

export const component_permission: IDataNode[] = [
  {
    title: "Component",
    key: "component",
    sort: 2,
    _icon: ["iron", "component"],
    children: [
      {
        title: "WangEditor",
        key: "component-wangeditor",
        _icon: ["iron", "editor"]
      },
      {
        title: "Milkdown",
        key: "component-milkdown",
        _icon: ["iron", "milk"]
      },
      {
        title: "AgGrid",
        key: "component-aggrid",
        _icon: ["iron", "grid"]
      },
      {
        title: "V-Calendar",
        key: "component-v_calendar",
        _icon: ["iron", "calendar"]
      },
      {
        title: "Notification",
        key: "component-notification",
        _icon: ["iron", "notification"]
      }
    ]
  }
];
