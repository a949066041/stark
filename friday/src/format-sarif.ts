/*
 * @Author: Rikka
 * @Date: 2022-12-26 20:56:41
 * @LastEditTime: 2022-12-26 21:17:52
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\friday\src\format-sarif.ts
 */
import fsExtra, { writeFileSync } from "fs-extra";
import { resolve } from "path";

interface SarifRunItem {
  // eslint-disable-next-line @typescript-eslint/ban-types
  tool: Object;
  artifacts: Array<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: Array<any>;
}

const { readFileSync } = fsExtra;
const sarif_path = readFileSync(resolve("../", "eslint-results.sarif"));
const sarif_file = JSON.parse(sarif_path.toString());
// eslint-disable-next-line unicorn/no-array-for-each
sarif_file.runs.forEach((item: SarifRunItem) => {
  item.results = item.results.filter((result) => result.suppressions === undefined);
});
writeFileSync(JSON.stringify(sarif_file, null, 2), sarif_path);
