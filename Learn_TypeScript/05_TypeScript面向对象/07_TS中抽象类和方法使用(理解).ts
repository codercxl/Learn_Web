// 抽象类有如下的特点：
// 抽象类是不能被实例的话（也就是不能通过new创建）
// 抽象类可以包含抽象方法，也可以包含有实现体的方法；
// 有抽象方法的类，必须是一个抽象类；
// 抽象方法必须被子类实现，否则该类必须是一个抽象类；

abstract class Shape {
  // getArea方法只有声明没有实现体
  // 实现让子类自己实现
  // 可以将getArea方法定义为抽象方法: 在方法的前面加abstract
  // 抽象方法必须出现在抽象类中, 类前面也需要加abstract
  abstract getArea()  // 抽象方法
}


class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return this.radius ** 2 * Math.PI
  }
}

class Triangle extends Shape {
  getArea() {
    return 100
  }
}


// 通用的函数
function calcArea(shape: Shape) {
  return shape.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(5))
calcArea(new Triangle())

// 在Java中会报错: 不允许
calcArea({ getArea: function() {} })

// 抽象类不能被实例化
// calcArea(new Shape())


// calcArea(100)
// calcArea("abc")

export {}