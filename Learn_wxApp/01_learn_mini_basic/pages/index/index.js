Page({
  data: {
    pages: [
      { name: "01_初体验", path: "/pages/01test/index" }
    ]
  },
  onBtnClick(event) {
    // 1.获取item
    const item = event.target.dataset.item

    // 2.点击跳转路径
    wx.navigateTo({
      url: item.path,
    })
  }
})