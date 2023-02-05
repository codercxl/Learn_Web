// 把接收的参数 放到数组里
function foo(...args: (string | number)[]) {

}

foo(123, 321)
foo("abc", 111, "cba")

// 案例
function sum(...nums: number[]) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}

const res1 = sum(10, 20, 30, 40)
console.log(res1)

export {}