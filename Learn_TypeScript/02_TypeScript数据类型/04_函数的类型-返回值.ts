// 函数的返回值可以指定，也可以类型推导
function sum(num1: number, num2: number): number {
  return num1 + num2
}

// 类型推导 res: number
const res = sum(111, 222)
// sum("111", "222")

export {}