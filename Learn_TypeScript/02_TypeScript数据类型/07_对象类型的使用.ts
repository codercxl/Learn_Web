// 1. 基本使用
let info: {
  name: string
  age: number
} = {
  name: "cxl",
  age: 18
}

// 2.对象和函数结合使用
type PointType = {
  x: number
  y: number
  z?: number // 可选类型
}
// type PointType = {x: number, y: number}
function printCoordinate(point: PointType) {
  console.log("x坐标:", point.x);
  console.log("y坐标:", point.y);
}

// printCoordinate(123)
printCoordinate({x: 20, y: 50})

export {}