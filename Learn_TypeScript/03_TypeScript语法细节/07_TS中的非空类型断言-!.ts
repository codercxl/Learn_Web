interface IPerson {
  name: string
  age:number
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: "cxl",
  age: 18
}

// 1.访问属性：(可选链 ?.)
console.log(info.friend?.name)

// 2.属性赋值：
// 方案一：类型缩小
if (info.friend) {
  info.friend.name = "why"
}
// 方案二：非空类型断言
// 这时可确定 friend 是有值的 跳过TS的检测 但这样做是危险的
info.friend!.name = "why"

export {}