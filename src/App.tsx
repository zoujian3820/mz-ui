/*
 * @Author: mrzou
 * @Date: 2021-08-17 17:19:44
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-18 16:39:02
 * @Description: file content
 */
import { defineComponent, reactive, ref } from "vue"

import HelloWorld from "./components/HelloWorld"
const img = require("./assets/logo.png") // eslint-disable-line

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
