import { Feature } from "geojson";

export function china_full() {
  return getGEOJson("https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full");
}

export function china_boundary() {
  return getGEOJson("https://geo.datav.aliyun.com/areas_v3/bound/100000_boundary.json");
}
export function china_country(adcode: string | number) {
  return getGEOJson(`https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=${adcode}_full`);
}
function getGEOJson(url: string) {
  return new Promise<Feature>((resolve) => {
    fetch(url, {
      method: "GET",
      mode: "cors"
    }).then((response) => {
      response.json().then((geoJSON) => {
        resolve(geoJSON);
      });
    });
  });
}
