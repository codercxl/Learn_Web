// 1.创建类
// 类可以有自己的构造函数constructor，当通过new关键字创建一个实例时，构造函数会被调用
class Person {
  // 这时成员属性要声明
  // name: string
  // age: number
  name = "" // 默认值
  age = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    console.log(this)
  }

  eating() {
    console.log(this.name)
  }
}

// 2.类的实例对象
const p1 = new Person("cxl", 18)
const p2 = new Person("uzi", 28)

console.log(p1.name, p2.age)

export {}