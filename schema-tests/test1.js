/*
 * @Author: mrzou
 * @Date: 2021-08-18 17:06:28
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-19 00:33:38
 * @Description: file content
 */
const Ajv = require("ajv").default
const addFormats = require("ajv-formats")
const lcalize = require("ajv-i18n")

const ajv = new Ajv({ allErrors: true /* jsonPointers: true */ }) // options can be passed, e.g. {allErrors: true}

require("ajv-errors")(ajv /*, {singleError: true} */)
addFormats(ajv)
// ajv.addFormat("test", (data) => {
//   console.log(data, "-----")
//   return data === "haha"
// })

ajv.addKeyword("test", {
  // validate: function fun(schema, data) {
  //   // console.log(schema, data)
  //   // if (schema) {
  //   //   return true
  //   // } else {
  //   //   return data.length === 6
  //   // }
  //   // fun.errors = [
  //   //   {
  //   //     instancePath: "/name",
  //   //     schemaPath: "#/properties/name/test",
  //   //     keyword: "test666",
  //   //     params: {},
  //   //     // message: '应当通过 "test 关键词校验"',
  //   //   },
  //   // ]
  //   return false
  // },
  // keyword: "test",
  // compile(sch, parentSchema) {
  //   console.log(sch, parentSchema)
  //   return () => true
  // },
  // metaSchema: {
  //   type: "boolean", //test 的赋值类型限制
  // },
  macro() {
    return {
      minLength: 10,
    }
  },
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
      // format: "test",
      // test: true, // addKeyword
      minLength: 10,
      additionalProperties: false,
      errorMessage: {
        type: "这是不对的",
        minLength: "长度最小必须10位",
        additionalProperties: "hahahahah",
      },
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
if (!valid) {
  lcalize.zh(validate.errors)
  console.log(validate.errors)
}
