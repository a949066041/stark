<template>
  <div class="stark-container" ref="mapDownRef"></div>
</template>
<script lang="ts">
export default {
  name: "[midas]MapDown"
};
</script>
<script lang="ts" setup>
import { Feature, GeoJsonProperties, Geometry, Position } from "geojson";
import { onMounted, ref } from "vue";

import { useAMapStore } from "../store/amap.store";
import { china_boundary, china_country, china_full } from "./map.api";

type AMap = typeof window.AMap;
const $AMapStore = useAMapStore();
const mapDownRef = ref<HTMLDivElement>();
const country_polygon: Record<number | string, AMap.Polygon> = {};
let city_polygon: Record<string | number, Record<number | string, AMap.Polygon>> = {};
let marker: AMap.Marker | null = null;
onMounted(() => {
  $AMapStore.mapLoader("b215d067812c544cda931d12f784a7a7").then((amap) => {
    if (mapDownRef.value) {
      const map = new amap.Map(mapDownRef.value);

      map.setZoomAndCenter(4, [104.188_488, 34.302_032]);
      loadMap(amap, map);
      map.on("click", (c) => {
        if (Object.keys(city_polygon).length === 1) {
          loadMap(amap, map);
          clearCountry();
        }
      });
    }
  });
});
function markerData(amap: AMap, map: AMap.Map, geo: Feature<Geometry, GeoJsonProperties>) {
  if (marker === null) {
    marker = new amap.Marker();
    marker.setMap(map);
  }
  if ((geo.geometry.type === "MultiPolygon" || geo.geometry.type === "Polygon") && geo.properties?.adcode) {
    const _lnglat = geo.geometry.coordinates
      .flat(geo.geometry.type === "MultiPolygon" ? 2 : 1)
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce((prev, curr) => ((prev as Position)[1] > (curr as Position)[1] ? prev : curr)) as [number, number];
    marker.setContent(
      [
        `<div class="w-40 bg-white rounded-4 p-2 shadow-md">`,
        `<div class="w-36 flex flex-row"><div class="w-12">adcode</div><div class="flex-1">${geo.properties.adcode}</div></div>`,
        `<div class="w-36 flex flex-row"><div class="w-12">name</div><div class="flex-1">${geo.properties.name}</div></div>`,
        "</div>"
      ].join("")
    );
    marker.setPosition(_lnglat);
    marker.show();
  }
}
function loadMap(amap: AMap, map: AMap.Map) {
  if (Object.keys(city_polygon).length === 0) {
    china_full().then((geoJSON) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const geo = new amap["GeoJSON"]({
        geoJSON,
        getPolygon: (_geojson: Feature, lnglats: AMap.LngLatLike[]) => {
          if (_geojson.properties?.adcode === "100000_JD") {
            // console.log("边界");
          } else {
            const polygon = new amap.Polygon();
            polygon.setOptions({
              path: lnglats,
              strokeColor: "black",
              strokeOpacity: 0.1,
              strokeWeight: 1,
              fillColor: "#f1f1f1",
              fillOpacity: 0.8,
              cursor: "pointer"
            });
            polygon.on("click", () => {
              map.setZoomAndCenter(6, _geojson.properties?.center);
              if (_geojson.properties?.adcode) {
                loadCountry(amap, map, _geojson.properties.adcode);
              }
            });
            polygon.on("mouseover", () => {
              polygon.setOptions({
                fillColor: "#5680FF",
                fillOpacity: 0.9
              });

              markerData(amap, map, _geojson);
            });
            polygon.on("mouseout", () => {
              polygon.setOptions({
                fillColor: "#f1f1f1",
                fillOpacity: 0.8
              });
              marker?.hide();
            });
            if (_geojson.properties?.adcode) country_polygon[_geojson.properties.adcode] = polygon;
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
          if (_geojson.properties?.type === "国界" || _geojson.properties?.type === "争议") {
            const polyline = new amap.Polyline();
            polyline.setOptions({
              path: lnglats,
              strokeWeight: 2,
              strokeOpacity: 1,
              strokeColor: "black"
            });
            return polyline;
          }
        }
      });
      map.add(geo);
    });
  } else {
    Object.keys(country_polygon).some((item) => {
      country_polygon[item].show();
    });
    map.setZoomAndCenter(4, [104.188_488, 34.302_032]);
  }
}
function clearCountry() {
  Object.keys(city_polygon).some((key) => {
    Object.keys(city_polygon[key]).some((city_key) => {
      city_polygon[key][city_key].destroy();
    });
  });
  city_polygon = {};
}
function loadCountry(amap: AMap, map: AMap.Map, adcode: number) {
  clearCountry();
  china_country(adcode).then((geoJSON) => {
    city_polygon[adcode] = {};
    Object.keys(country_polygon).some((item) => {
      country_polygon[item].hide();
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const geo = new amap["GeoJSON"]({
      geoJSON,
      getPolygon: (_geojson: Feature, lnglats: AMap.LngLatLike[]) => {
        const polygon = new amap.Polygon();
        polygon.setOptions({
          path: lnglats,
          strokeColor: "black",
          strokeStyle: "dashed",
          strokeWeight: 1,
          strokeDasharray: [0.5, 0.5],
          fillColor: "#f1f1f1",
          fillOpacity: 0.8,
          cursor: "pointer"
        });

        polygon.on("mouseover", () => {
          polygon.setOptions({
            fillColor: "#5680FF",
            fillOpacity: 0.9
          });
          if (_geojson.geometry.type === "MultiPolygon" && _geojson.properties?.adcode) {
            markerData(amap, map, _geojson);
          } else {
            console.log(_geojson);
          }
        });
        polygon.on("mouseout", () => {
          polygon.setOptions({
            fillColor: "#f1f1f1",
            fillOpacity: 0.8
          });
        });
        if (_geojson.properties?.adcode) {
          city_polygon[adcode][_geojson.properties?.adcode] = polygon;
        }
        marker?.hide();
        return polygon;
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
