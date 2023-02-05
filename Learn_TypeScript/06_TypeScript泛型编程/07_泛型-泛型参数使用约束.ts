
// function getObjProperty<O, K extends "name"|"age">(obj: O, key: K) {
function getObjProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const info = {
  name: "cxl",
  age: 18
}

// 传入的key 必须是obj中的其中之一
const name = getObjProperty(info, "name")
const age = getObjProperty(info, "age")
// const address = getObjProperty(info, "address")

export {}