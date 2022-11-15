/*
 * @Author: Rikka
 * @Date: 2022-11-15 16:25:57
 * @LastEditTime: 2022-11-15 17:42:25
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\cache.store.ts
 */

import { defineStore, _GettersTree } from "pinia";
import { RouteLocationNormalizedLoaded } from "vue-router";

interface TagItem {
  name: string;
  link: string;

  title: string;
}

interface CacheStoreState {
  _cache: Record<string, unknown>;
  _tags: TagItem[];
}

interface CacheStoreGetter extends _GettersTree<CacheStoreState> {
  getCache: (state: CacheStoreState) => <T>(name: string) => T | undefined;
  cacheList: (state: CacheStoreState) => string[];
}

interface CacheStoreAction {
  setCache<T>(
    name: string,
    cache: T,
    route: RouteLocationNormalizedLoaded
  ): void;
  deleteCache(name: string): void;
}

export const useCacheStore = defineStore<
  "arc_cache",
  CacheStoreState,
  CacheStoreGetter,
  CacheStoreAction
>("arc_cache", {
  state: () => ({
    _cache: {},
    _tags: []
  }),
  actions: {
    setCache<T>(name: string, cache: T, route: RouteLocationNormalizedLoaded) {
      this._cache[name] = cache;
      if (route.meta["title"]) {
        const tagIndex = this._tags.findIndex((item) => item.name === name);
        if (tagIndex !== -1) {
          this._tags[tagIndex].link = route.fullPath;
        } else {
          this._tags.push({
            name,
            link: route.fullPath,
            title: route.meta["title"] as string
          });
        }
      }
    },
    deleteCache<T>(name: string) {
      if (this._cache[name]) {
        delete this._cache[name];
      }
      this._tags = this._tags.filter((item) => item.name !== name);
    }
  },
  getters: {
    getCache: (state: CacheStoreState) => {
      return <T>(name: string) => {
        return state._cache[name] as T | undefined;
      };
    },
    cacheList: (state: CacheStoreState) => Object.keys(state._cache)
  }
});
