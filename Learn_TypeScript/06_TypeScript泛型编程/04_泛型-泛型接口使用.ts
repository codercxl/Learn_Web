interface IType<Type = string> { // 默认值
  name: Type
  age: number
  slogan: Type
}

const foo: IType<string> = { // 没有默认值 必须指定类型
  name: "ccc",
  age: 18,
  slogan: "111"
}

const foo1: IType<number> = {
  name: 1111,
  age: 18,
  slogan: 2222
}

const foo2: IType = {
  name: "cxl",
  age: 18,
  slogan: "2222"
}

export {}