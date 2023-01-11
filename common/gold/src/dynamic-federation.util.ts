/*
 * @Author: Rikka
 * @Date: 2022-12-29 22:14:02
 * @LastEditTime: 2022-12-29 23:03:47
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\gold\src\dynamic-federation.util.ts
 */
import { from, concatMap, Observable } from "rxjs";
declare const __webpack_share_scopes__: any;
declare const __webpack_init_sharing__: any;

// 加载js标签
function loadScript(src: string) {
  return new Promise((res, rej) => {
    const srcirpt = document.createElement("script");
    srcirpt.src = src;
    srcirpt.onload = res;
    srcirpt.onerror = rej;
    document.body.appendChild(srcirpt);
  });
}

// 连接容器
function loadComponent(scope: string, module: string) {
  return async () => {
    // 初始化共享作用域（shared scope）用提供的已知此构建和所有远程的模块填充它
    await __webpack_init_sharing__("default");
    // @ts-ignore
    const container = window[scope]; // 或从其他地方获取容器
    // 初始化容器 它可能提供共享模块
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

export function loadRemote<T>(remoteEntry: string, scope: string, module: string): Observable<T> {
  return from(loadScript(remoteEntry)).pipe(concatMap(() => from(loadComponent(scope, module)())));
}
export { loadScript };
