interface ICollection {
  // 索引签名：允许使用索引访问其内容
  // [index: number]: string  // number 类型的索引获取 string 类型的值 => 数组
  [index: string]: number  // key是string类型 value是number类型 => 对象
  // length的类型要和上面返回的类型一致
  length: number
}

const names: string[] = ["aaa", "bbb", "ccc"] // 数组
const tuple: [string, number] = ["cxl", 18] // 元组
function iteratorCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i])
  }
}

// iteratorCollection(names)
// iteratorCollection(tuple)
iteratorCollection({ name: 123, age: 18, length: 2 })

export {}