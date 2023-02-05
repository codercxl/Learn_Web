// public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的；
// private 修饰的是仅在同一类中可见、私有的属性或方法；
// protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法；

class Person {
  protected name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log("eating", this.age, this.name)
  }
}

const p = new Person("cxl", 18)
// console.log(p.name, p.age)
// p.name = "why"
p.eating()

// 在子类中访问 name
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  student() {
    console.log(this.name) // 成功访问父类中的 protected name
  }
}

const s = new Student("uzi", 18)

export {}