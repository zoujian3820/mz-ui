/*
 * @Author: mrzou
 * @Date: 2021-08-16 21:41:02
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-16 21:48:38
 * @Description: file content
 */
import { createApp, ref } from "vue"
import Button from "./button.vue"

const app = createApp({
  setup() {
    const list = ref([1, 2, 3])
    return { list }
  },
})
app.component("m-button", Button)
// app.use(Button)
app.mount("#app")
