class Poit<Type = number> {
  x: Type
  y: Type
  constructor(x: Type, y: Type) {
    this.x = x
    this.y = y
  }
}

const p1 = new Poit(10, 20)
p1.x
const p2 = new Poit("10", "20")
p2.x

export {}