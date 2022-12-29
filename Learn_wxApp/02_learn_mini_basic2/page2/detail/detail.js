// page2/detail/detail.js
Page({
  data: {
    name: "",
    age: 0
  },
  onLoad(options) {
    // 接收的数据
    const name = options.name
    const age = options.age
    this.setData({
      name,
      age
    })
    console.log(options);
  },

  onBackTap() {
    wx.navigateBack({
      // 返回的层级
      // delta: 2
    })

    // 2.方式一：给上一级的页面传递数据
    // 2.1获取到上个页面的实例
    // const pages = getCurrentPages() // 获取到三个页面
    // const prePage = pages[pages.length - 2]

    // // 2.2通过setData给上个页面设置数据
    // prePage.setData({ message: "呵呵呵" })

    // 3.方式二
    // 3.1拿到eventChannel
    const eventChannel = this.getOpenerEventChannel()
    // 3.2通过eventChannel回调上个页面的函数
    eventChannel.emit("backEvent", { name: "Uzi", age: 28 })
    eventChannel.emit("cxl", { name: "cxl", age: 18 })
  },

  // 点击左上角的返回
  onUnload() {
    // 2.1获取到上个页面的实例
    const pages = getCurrentPages() // 获取到三个页面
    const prePage = pages[pages.length - 2]

    // 2.2通过setData给上个页面设置数据
    prePage.setData({ message: "呵呵呵" })
  }
})