// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  onLoad() {
    // 获取全局共享的数据：App实例中的数据
    // 1.获取App实例对象
    const app = getApp()

    // 2.从App实例对象获取数据
    const token = app.globalData.token
    const userInfo = app.globalData.userInfo
    console.log(token, userInfo);

    // 3.拿到token目的是发送网络请求

    // 4.将数据展示到界面
    // this.data.userInfo = userInfo  只会保存到data中 不会展示到界面
    this.setData({ userInfo })

  }
})