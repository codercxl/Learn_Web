// pages/11_learn_nav/index.js
Page({
  data: {
    name: "Uzi",
    age: 30,
    message: "哈哈哈"
  },
  onNavTap() {
    const name = this.data.name
    const age = this.data.age
    // 页面跳转操作
    wx.navigateTo({
      // 传递参数
      url: `/page2/detail/detail?name=${name}&age=${age}`,
      // 接收跳转页面的参数
      events: {
        backEvent(data) {
          console.log("backEvent", data);
        },
        cxl(data) {
          console.log("cxl", data);
        }
      }
    })
  }
})