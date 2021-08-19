/*
 * @Author: mrzou
 * @Date: 2021-08-18 16:33:50
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-18 16:37:53
 * @Description: file content
 */
import { defineComponent, PropType } from "vue"
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
        <div>
          <h1>{props.msg}</h1>
        </div>
      )
    }
  },
})
