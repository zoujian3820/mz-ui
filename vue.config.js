/*
 * @Author: mrzou
 * @Date: 2021-08-20 00:04:45
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-20 18:08:38
 * @Description: file content
 */
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")
const CircularDependencyPlugin = require("circular-dependency-plugin")

// const isLib = process.env.TYPE === "lib"

module.exports = {
  css: {
    requireModuleExtension: true,
  },
  configureWebpack(config) {
    // console.log(config.plugins)
  },
  chainWebpack(config) {
    // if (!isLib) {
    //   config.plugin('monaco').use(new MonacoWebpackPlugin())
    // }
    config.plugin("circular").use(new CircularDependencyPlugin())
  },
  pwa: {},
}
