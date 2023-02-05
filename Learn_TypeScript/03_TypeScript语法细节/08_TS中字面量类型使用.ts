// 1.基本使用
const name: "cxl" = "cxl"
const age: 18 = 18

// 2.把多个字面量类型联合
type Direction = "left" | "right" | "top" | "bottom"
const info: Direction = "top"

// 3.案例 method: 只接收 get post
// function request(url: string, method: string) {}
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {}

request("http://coder.com/api", "post")

// 细节
const foo = {
  url: "http://coder.com/api",
  method: "post"
}
// 这时的 method 是 string 类型
// request(foo.url, foo.method) // 报错

// 方案一：类型断言
request(foo.url, foo.method as "post")

// 方案二：
// const foo1: { url: string, method: "get" | "post" } = {
//   url: "http://coder.com/api",
//   method: "post"
// }
const foo1 = {
  url: "http://coder.com/api",
  method: "post"
} as const
// 这时的 URL 本身就是 string 类型
request(foo1.url, foo1.method)


export {}