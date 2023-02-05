// 1.函数类型表达式
type BarType = (num1: number) => number

// 2.函数调用签名(从对象角度看 函数也可以有属性)
interface IBar {
  name: string
  age: number
  (num1: number): number // 调用签名
}
const bar: IBar = (num: number): number => {
  return 123
}

bar.name = "aaa"
bar.age = 18
bar(111)

// 如何选择
// 1.如果只是描述函数类型本身(函数可以被调用)，则使用函数类型表达式
// 2.如果在描述函数作为对象可以被调用，同时也要其他属性时，则使用调用签名

export {}