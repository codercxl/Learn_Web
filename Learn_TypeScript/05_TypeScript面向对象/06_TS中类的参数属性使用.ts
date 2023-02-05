class Person {
  // 语法糖
  constructor(public name: string, private _age: number, readonly height: number) {
  }

  // 等价于
  
  // name: string
  // private _age: number
  // readonly height: number
  // constructor(name: string, age: number, height: number) {
  //   this.name = name
  //   this._age = age
  //   this.height = height
  // }

  running() {
    console.log(this._age, "eating")
  }
}

const p = new Person("why", 18, 1.88)
console.log(p.name, p.height)

// p.height = 1.98

export {}
