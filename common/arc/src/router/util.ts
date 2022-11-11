/*
 * @Author: Rikka
 * @Date: 2022-11-11 15:36:21
 * @LastEditTime: 2022-11-11 17:00:03
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\util.ts
 */
import { _RouteRecordBase } from "vue-router";

interface IEnhanceRouter extends _RouteRecordBase {
  name: string;
  parent_name?: string;
  is_router: true;
  sort?: number;
}

interface EnhanceMenu {
  name: string;
  parent_name: string;
  is_router: false;
  sort?: number;
  meta: {
    title: string;
    permission: string[];
  };
}

export type EnhanceRouter = IEnhanceRouter | EnhanceMenu;
