
let info: {
  name: string,
  age: number,
  friends: string[]
} = {
  name: "cxl",
  age: 18,
  friends: ["aaa", "bbb"]
}

// 类型推导
let info1 = {
  name: "cxl",
  age: 18,
  friends: ["aaa", "bbb"],
  foo: {
    height: 1.88
  }
}

console.log(info.name);


export {}