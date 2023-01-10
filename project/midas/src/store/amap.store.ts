import "@amap/amap-jsapi-types";

import { defineStore } from "pinia";
import { ref } from "vue";

export const useAMapStore = defineStore("midas_amap", () => {
  const loaded = ref(false);
  let _AMap: typeof window.AMap | null = null;
  function setLoader() {
    loaded.value = true;
    console.log(123);
  }

  function mapLoader(key: string): Promise<typeof AMap> {
    return new Promise((resolve, reject) => {
      if (_AMap) {
        return resolve(_AMap);
      }

      const aMapUrl = "https://webapi.amap.com/loader.js";
      const jsApi = document.createElement("script");
      jsApi.src = aMapUrl;
      jsApi.addEventListener("load", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const AMapLoader = window["AMapLoader"];
        if (AMapLoader) {
          AMapLoader.load({
            key,
            version: "2.0",
            plugins: ["AMap.GeoJSON"]
          }).then((__AMap: typeof AMap) => {
            _AMap = __AMap;
            resolve(_AMap);
          });
        }
      });
      jsApi.addEventListener("error", reject);

      document.head.append(jsApi);
    });
  }
  return { loaded, setLoader, mapLoader };
});
