let foo: unknown = "aaa"
foo = 123

// unknown类型默认情况下在上面进行任意的操作都是非法的
// 要求 必须 进行类型的校验(缩小), 才能根据缩小之后的类型, 进行对应的操作
if (typeof foo === "string") { // 类型缩小
  console.log(foo.length, foo.split(" "))
}


// 案例
function foo1() {
  return "foo1"
}

function foo2() {
  return 111
}

const flag = true
let res: unknown

if (flag) {
  res = foo1()
} else {
  res = foo2()
}

if (typeof res === "string") { // 类型校验
  console.log(res.length);
}


export {}
