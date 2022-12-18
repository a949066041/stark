import { IDataNode } from "./permission.types";

export const feature_permission: IDataNode[] = [
  {
    title: "Feature",
    key: "feature",
    sort: 4,
    _icon: ["iron", "feature"],
    children: [
      {
        title: "缓存测试",
        key: "feature-cache",
        _icon: ["iron", "cache"],
        children: [
          {
            title: "缓存测试1",
            key: "feature-cache-cache_test"
          },
          {
            title: "二级菜单",
            key: "feature-cache-second",
            children: [
              {
                title: "深层缓存",
                key: "feature-cache-second-deep_menu"
              }
            ]
          }
        ]
      },
      {
        title: "跨页操作",
        key: "feature-operate",
        _icon: ["iron", "operate"],
        children: [
          { title: "数据页", key: "feature-operate-data" },
          { title: "操作页", key: "feature-operate-handle" }
        ]
      },
      {
        title: "权限",
        key: "feature-permission",
        _icon: ["iron", "permission"],
        children: [{ title: "权限树", key: "feature-permission-tree" }]
      }
    ]
  }
];
