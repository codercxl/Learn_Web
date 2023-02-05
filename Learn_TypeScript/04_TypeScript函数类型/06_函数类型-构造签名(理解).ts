
class Person {}

interface ICTORPerson {
  new (): Person // 构造签名 可以使用 new 调用
}

function factory(fn: ICTORPerson) {
  const f = new fn()
  return f
}
factory(Person)

export {}