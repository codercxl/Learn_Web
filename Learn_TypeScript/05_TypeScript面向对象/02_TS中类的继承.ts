
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  running() {
    console.log("running")
  }
}

class Student extends Person {
  sno: number
  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }

  student() {
    super.running()
    console.log(this.name + " student")
  }
}

const s = new Student("cxl", 18, 100)
console.log(s.name, s.age, s.sno)
s.student()

export {}