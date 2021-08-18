/*
 * @Author: mrzou
 * @Date: 2021-08-18 17:06:28
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-18 18:04:46
 * @Description: file content
 */
const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const addFormats = require("ajv-formats")

addFormats(ajv)

ajv.addFormat("test", (data) => {
  console.log(data, "-----")
  return data === "haha"
})

// const schema = {
//   type: "string",
//   minLength: 10,
//   //   properties: {
//   //     foo: { type: "integer" },
//   //     bar: { type: "string" },
//   //   },
//   //   required: ["foo"],
//   //   additionalProperties: false,
// }

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      //   format: "email",
      format: "test",
      //   minLength: 10,
    },
    age: {
      type: "number",
    },
    pets: {
      type: "array",
      //   items: { type: "string" },
      items: [{ type: "string" }, { type: "number" }],
    },
    isWorker: {
      type: "boolean",
    },
  },
  required: ["name", "age"], // 必填选项
}

const validate = ajv.compile(schema)

// const data = {
//   foo: 1,
//   bar: "abc",
// }

const valid = validate({
  //   name: "nz@qq.com",
  name: "haha",
  age: 18,
  pets: ["mini", 16],
  isWorker: true,
})
if (!valid) console.log(validate.errors)
