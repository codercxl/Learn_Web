// 在设置配置选项(编译选项compilerOptions, noImplicitThis设置为true, 不允许模糊(any类型)的this存在)

// 1.对象中的函数中的this
const obj = {
  name: "why",
  studying: function(this: {}) {
    // 默认情况下, this是any类型
    console.log(this, "studying")
  }
}

// obj.studying()
obj.studying.call({})


// 2.普通的函数
// 指定 this 类型 要通过 call 来调用
// 函数的第一个参数我们可以根据该函数之后被调用的情况，用于声明this的类型（名词必须叫this）；
// 在后续调用函数传入参数时，从第二个参数开始传递的，this参数会在编译后被抹除
function foo(this: { name: string }, info: {name: string}) {
  console.log(this, info)
}

foo.call({ name: "why" }, { name: "kobe" })

export {}
