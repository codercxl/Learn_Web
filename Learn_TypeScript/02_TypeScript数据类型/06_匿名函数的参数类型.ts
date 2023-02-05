
let names = ["aaa", "bbb"]
// 匿名函数参数一般不需要 类型注解
// 函数会根据 上下文 自动进行类型推导
names.forEach(function(item, index, arr) {
  console.log(item, index, arr);
})

export {}