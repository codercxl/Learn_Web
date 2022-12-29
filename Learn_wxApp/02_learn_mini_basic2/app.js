// app.js
App({
  // 作用二： 数据不是响应式，这里共享的数据通常是一些固定的数据
  globalData: {
    token: "",
    userInfo: {}
  },
  
  // 小程序初始化完成时触发，全局只触发一次
  // onLaunch(options) {
  //   // 0.从本地获取token/userInfo
  //   const token = wx.getStorageSync('token')
  //   const userInfo = wx.getStorageSync('userInfo')
  //   // 1.进行登录操作
  //   if (!token || !userInfo) {
  //     // 将登录成功的数据保存到storage
  //     wx.setStorageSync('token', "Uzitoken")
  //     wx.setStorageSync('userInfo', { nickname: "Uzi", age: 28 })
  //   }

  //   // 2.将获取到的数据保存到globalData中
  //   this.globalData.token = token
  //   this.globalData.userInfo = userInfo

  //   // 3.发送网络请求，优先请求必要的数据
  //   // wx.request({url: 'url',})
  // },
  onShow(options) {
    // 小程序启动，或从后台进入前台显示时触发
    // 作用一： options.scene：判断以什么方式场景进入小程序
    // console.log("onShow", options);
  },
  onHide() {
    // 小程序从前台进入后台时触发
    console.log("onHide");
  }
})
