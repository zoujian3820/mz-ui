/*
 * @Author: mrzou
 * @Date: 2021-08-17 17:19:44
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-20 18:14:37
 * @Description: file content
 */
import { defineComponent, reactive, ref, Ref } from "vue"

import HelloWorld from "./components/HelloWorld"
const img = require("./assets/logo.png") // eslint-disable-line

// import MonacoEditor from "./components/MonacoEditor"
function renderHelloWorld(str: string) {
  return <HelloWorld msg={str} />
}
// import { createUseStyles } from "vue-jss"

// function toJson(data: any) {
//   return JSON.stringify(data, null, 2)
// }

// const schema = {
//   type: "string",
// }

// const useStyles = createUseStyles({
//   editor: {
//     minHeight: 400,
//   },
// })

export default defineComponent({
  setup() {
    const state = reactive({ name: "mzou" })
    const numberRef = ref(1)
    // setInterval(() => {
    //   state.name += "1"
    //   numberRef.value += 1
    // }, 1000)
    // const schemaRef: Ref<any> = ref(schema)
    // const handleCodeChange = (code: string) => {
    //   let schema: any
    //   try {
    //     schema = JSON.parse(code)
    //   } catch (e) {
    //     console.log(e)
    //   }
    //   schemaRef.value = schema
    // }

    // const classesRef = useStyles()
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
      // const classes = classesRef.value
      // const code = toJson(schemaRef.value)
      // return (
      //   <div>
      //     <MonacoEditor
      //       code={code}
      //       onChange={handleCodeChange}
      //       title={"Schema"}
      //       class={classes.editor}
      //     />
      //   </div>
      // )
    }
  },
})
