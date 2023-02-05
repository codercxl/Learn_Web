// 1.类型别名
type PoitType = {
  x: number
  y: number
  z?: number
}

// 2.接口声明
interface PoitType2 {
  x: number
  y: number
  z?: number
}

function foo(point: PoitType2) {

}

export {}