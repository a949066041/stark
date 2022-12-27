/*
 * @Author: Rikka
 * @Date: 2022-12-26 20:56:41
 * @LastEditTime: 2022-12-26 22:27:18
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\friday\src\format-sarif.ts
 */
import fsExtra from "fs-extra";
import { resolve } from "path";
import { Log } from "sarif";

const { readFileSync, writeFileSync } = fsExtra;

const sarif_path = resolve("../", "eslint-results.sarif");
const sarif_file: Log = JSON.parse(readFileSync(sarif_path).toString());
// eslint-disable-next-line unicorn/no-array-for-each
sarif_file.runs.forEach((item) => {
  if (item.results) {
    item.results = item.results.filter((result) => result.suppressions === undefined);
  }
});
writeFileSync(sarif_path, JSON.stringify(sarif_file, null, 2));
