<template>
  <div class="stark-container" ref="mapDownRef">123</div>
</template>
<script lang="ts">
export default {
  name: "[midas]MapDown"
};
</script>
<script lang="ts" setup>
import { Feature } from "geojson";
import { onMounted, ref } from "vue";

import { useAMapStore } from "../store/amap.store";
import { china_boundary, china_full } from "./map.api";

type AMap = typeof window.AMap;
const $AMapStore = useAMapStore();
const mapDownRef = ref<HTMLDivElement>();
const country_polygon: Record<number, AMap.Polygon> = {};
onMounted(() => {
  $AMapStore.mapLoader("b215d067812c544cda931d12f784a7a7").then((amap) => {
    if (mapDownRef.value) {
      const map = new amap.Map(mapDownRef.value);

      map.setZoomAndCenter(4, [104.188_488, 34.302_032]);
      loadMap(amap, map);
    }
  });
});

function loadMap(amap: AMap, map: AMap.Map) {
  china_full().then((geoJSON) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const geo = new amap["GeoJSON"]({
      geoJSON,
      getPolygon: (_geojson: Feature, lnglats: AMap.LngLatLike[]) => {
        // var area = amap.GeometryUtil.ringArea(lnglats[0]);

        if (_geojson.properties?.adcode === "100000_JD") {
          const polygon = new amap.Polygon();
          polygon.setOptions({
            path: lnglats,
            strokeColor: "black",
            fillColor: "gray",
            fillOpacity: 0.2,
            cursor: "pointer"
          });
          return polygon;
        } else {
          const polygon = new amap.Polygon();
          polygon.setOptions({
            path: lnglats,
            strokeColor: "white",
            fillColor: "gray",
            fillOpacity: 0.2,
            cursor: "pointer"
          });
          polygon.on("click", () => {
            map.setZoomAndCenter(6, _geojson.properties?.center);
          });
          polygon.on("mouseover", () => {
            polygon.setOptions({
              fillColor: "blue"
            });
          });
          polygon.on("mouseout", () => {
            polygon.setOptions({
              fillColor: "gray"
            });
          });
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          country_polygon[_geojson.properties.adcode] = polygon;
          return polygon;
        }
      }
    });
    map.add(geo);
  });
  china_boundary().then((geoJSON) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const geo = new amap["GeoJSON"]({
      geoJSON,
      getPolyline: (_geojson: Feature, lnglats: AMap.LngLatLike[]) => {
        const polyline = new amap.Polyline();
        polyline.setOptions({
          path: lnglats,

          strokeColor: "black"
        });
        return polyline;
      }
    });
    map.add(geo);
  });
}

defineExpose({
  name: "[midas]MapDown"
});
</script>
<style lang="less" scoped></style>
