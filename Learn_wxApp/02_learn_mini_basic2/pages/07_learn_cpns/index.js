// pages/07_learn_cpns/index.js
Page({
  data: {
    digitalTitle: ['电脑', '手机', 'ipad']
  },
  onSectionClick(event) {
    console.log("页面监听到组件内点击", event.detail);
  },

  onItemClick(event) {
    const index = event.detail

    console.log("onItemClick", this.data.digitalTitle[index]);
  },

  onTabTap() {
    const tab = this.selectComponent(".tab")
    tab.test(2)
  }
})