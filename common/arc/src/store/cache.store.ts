/*
 * @Author: Rikka
 * @Date: 2022-11-15 16:25:57
 * @LastEditTime: 2022-12-23 19:05:53
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\cache.store.ts
 */

import { defineStore, _GettersTree } from "pinia";
import { computed, ref } from "vue";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";

export interface TagItem {
  name: string;
  link: string;

  title: string;
}

export const useCacheStore = defineStore("arc_cache", () => {
  const _cache = ref<Record<string, unknown>>({});
  const _tags = ref<TagItem[]>([]);

  const getCache = computed(() => {
    return <T>(name: string) => {
      return _cache.value[name] as T | undefined;
    };
  });
  const cacheList = computed(() => {
    return Object.keys(_cache.value);
  });

  function setCache<T>(name: string, cache: T, route: RouteLocationNormalizedLoaded) {
    _cache.value[name] = cache;
    if (route.meta["title"]) {
      const tagIndex = _tags.value.findIndex((item) => item.name === name);
      if (tagIndex !== -1) {
        _tags.value[tagIndex].link = route.fullPath;
      } else {
        _tags.value.push({
          name,
          link: route.fullPath,
          title: route.meta["title"] as string
        });
      }
    }
  }

  function deleteCache(name: string, router: Router) {
    if (_cache.value[name]) {
      const cacheList = Object.keys(_cache.value);
      if (cacheList.length === 1) {
      } else {
        const cacheIndex = cacheList.indexOf(name);
        if (cacheIndex === 0) {
          router.push(_tags.value[1].link);
        } else {
          router.push(_tags.value[cacheIndex - 1].link);
        }
      }
      delete _cache.value[name];
      _tags.value = _tags.value.filter((item) => item.name !== name);
      if (_tags.value.length === 0) {
        router.push("/view");
      }
    }
  }

  return {
    setCache,
    deleteCache,
    getCache,
    cacheList,
    _cache,
    _tags
  };
});
