// 这时的参数类型是固定死的
function foo(name: string, age: number) {}
foo("cxl", 18)

// 类型参数化
function bar<Type>(arg: Type): Type {
  return arg
}

// 完整的写法
const res1 = bar<number>(1111)
const res2 = bar<string>("aaaa")
const res3 = bar<{name: string, age: number}>({ name: "cxl", age: 18 })

// 省略写法 
const res4 = bar(1111) // 1111 字面量类型
let res5 = bar(1111) // number

export {}