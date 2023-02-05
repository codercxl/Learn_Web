// 交叉类型：两种(多种)类型同时满足
type NewType = string & number // never

// 通常用于对象类型的交叉使用
interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

type IInfoType = IKun & ICoder

const info: IInfoType = {
  name: "cxl",
  age: 18,
  coding: function() {
    console.log("coding");
    
  }
}

export {}