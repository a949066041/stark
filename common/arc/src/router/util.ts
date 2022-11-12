/*
 * @Author: Rikka
 * @Date: 2022-11-11 15:36:21
 * @LastEditTime: 2022-11-12 19:12:43
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\util.ts
 */
import { _RouteRecordBase } from "vue-router";

export interface IEnhanceRouter extends _RouteRecordBase {
  name: string;
  parent_name?: string;
  is_router: true;
  sort?: number;
  component: any;
}

export interface EnhanceMenu {
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
