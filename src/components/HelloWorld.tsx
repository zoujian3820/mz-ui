/*
 * @Author: mrzou
 * @Date: 2021-08-18 16:33:50
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-20 18:19:16
 * @Description: file content
 */
import { defineComponent, PropType } from "vue"
import styles from "./HelloWorld.module.scss"

const PropTypes = {
  msg: {
    type: String as PropType<string>,
    required: true,
  },
} as const

export default defineComponent({
  props: PropTypes,
  setup(props, { attrs, emit, slots }) {
    return () => {
      return (
        <div class={styles.box}>
          <h1>{props.msg}</h1>
        </div>
      )
    }
  },
})
