import { Feature } from "geojson";

export function china_full() {
  return getGEOJson("china.json");
}

export function china_boundary() {
  return getGEOJson("1000000_boundary.json");
}
export function china_province(adcode: string | number) {
  return getGEOJson(`province/${adcode}.json`);
}
function getGEOJson(url: string) {
  return new Promise<Feature>((resolve) => {
    fetch("https://stark.rikka.cc/geo/" + url, {
      method: "GET",
      mode: "cors"
    }).then((response) => {
      response.json().then((geoJSON) => {
        resolve(geoJSON);
      });
    });
  });
}
