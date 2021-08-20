/*
 * @Author: mrzou
 * @Date: 2021-08-17 16:17:18
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-20 17:47:30
 * @Description: file content
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}