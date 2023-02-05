// 获取DOM元素 <img class="img" />
// 1.用元素名获取 弊端：代码中可能有多个相同的
const imgEl1 = document.querySelector("img") // HTMLImageElement | null
// 返回的类型：HTMLImageElement | null 这样会更方便的使用其属性
if (imgEl1 !== null) {
  imgEl1.src = "aaa"
  imgEl1.alt = "bbb"
}

// 2.用类选择器获取 弊端：不能使用其属性
const imgEl2 = document.querySelector(".img") // Element | null
// 返回的类型：Element | null 这时使用其对应的属性则会报错
// 类型 Element 上不存在属性 src
if (imgEl2 !== null) {
  // imgEl2.src = "aaaa"
}

// 3.所以使用类型断言就可解决上述问题
const imgEl3 = document.querySelector(".img") as HTMLImageElement
imgEl3.src = "aaa"
imgEl3.alt = "bbb"

// 类型断言规则：断言只能断言成 更具体 或 不太具体(any/unknown) 的类型
const age: number = 18
// const age2 = age as string // 报错
// 这样可以通过TS类型检测，但不推荐
const age3 = (age as unknown) as string
console.log(age3.length);


export {}