/*
 * @Author: Rikka
 * @Date: 2022-11-15 16:25:57
 * @LastEditTime: 2022-11-15 17:09:06
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\cache.store.ts
 */

import { defineStore, _GettersTree } from "pinia";

interface CacheStoreState {
  _cache: Record<string, unknown>;
}

interface CacheStoreGetter extends _GettersTree<CacheStoreState> {
  getCache: (state: CacheStoreState) => <T>(name: string) => T | undefined;
  cacheList: (state: CacheStoreState) => string[];
}

interface CacheStoreAction {
  setCache<T>(name: string, cache: T): void;
  deleteCache(name: string): void;
}

export const useCacheStore = defineStore<
  "arc_cache",
  CacheStoreState,
  CacheStoreGetter,
  CacheStoreAction
>("arc_cache", {
  state: () => ({
    _cache: {}
  }),
  actions: {
    setCache<T>(name: string, cache: T) {
      this._cache[name] = cache;
    },
    deleteCache<T>(name: string) {
      if (this._cache[name]) {
        delete this._cache[name];
      }
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
