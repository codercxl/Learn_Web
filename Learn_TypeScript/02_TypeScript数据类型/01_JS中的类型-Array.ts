// 明确指定 数组 的类型注解：两种方式
// 1. string[]: 数组类型，并且里面存放的是字符串类型
// 2. Array<string>: 数组类型，并且里面存放的是字符串类型
// 注意事项：在开发中，数组要存放相同的类型

let names: string[] = ["aaa", "bbb", "ccc"]
names.push("ddd")
// names.push(111)

let nums: Array<number> = [111, 222, 333]

export {}