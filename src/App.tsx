/*
 * @Author: mrzou
 * @Date: 2021-08-17 17:19:44
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-17 18:00:45
 * @Description: file content
 */
import { defineComponent, reactive, ref } from "vue"

import HelloWorld from "./components/HelloWorld.vue"
const img = require("./assets/logo.png")

function renderHelloWorld(str: string) {
  return <HelloWorld msg={str} />
}

export default defineComponent({
  setup() {
    const state = reactive({ name: "mzou" })
    const numberRef = ref(1)
    // setInterval(() => {
    //   state.name += "1"
    //   numberRef.value += 1
    // }, 1000)

    return () => {
      const number = numberRef.value

      return (
        <div id="app">
          <img src={img} alt="" />
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name} name={state.name} />
          {renderHelloWorld(state.name)}
        </div>
      )
    }
  },
})
