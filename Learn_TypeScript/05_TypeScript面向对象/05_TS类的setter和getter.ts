class Person {
  // 私有属性用 _ 命名
  private _name: string
  private _age: number
  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }
  eating() {
    console.log("eating")
  }

  // setter/getter
  set name(newValue: string) {
    this._name = newValue
  }

  get name() {
    return this._name
  }

  // 作用：对属性的访问进行拦截操作
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue
    }
  }

  get age() {
    return this._age
  }
}

const p = new Person("cxl", 18)
p.name = "uzi"

p.age = -10  // 并没有成功设置
console.log(p.age)

export {}