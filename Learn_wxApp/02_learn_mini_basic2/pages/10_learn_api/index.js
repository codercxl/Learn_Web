// pages/10_learn_api/index.js
Page({
  // 1.弹窗相关API
  onShowToast() {
    wx.showToast({
      title: '购买成功!',
      icon: 'error',
      duration: 3000,
      mask: true,
      // image: "../../assets/nhlt.jpg",
      success: (res) => {
        console.log("展示成功", res);
      },
      fail: (err) => {
        console.log("展示失败", err);
      }
    })
  },
  onShowModal() {
    wx.showModal({
      title: '确定购买吗？',
      content: '请确定钱包',
      confirmColor: '#f00',
      cancelColor: '#0f0',
      // editable: true,
      complete: (res) => {
        if (res.cancel) {
          console.log("点击了取消");
        }
        if (res.confirm) {
          console.log("点击了确定");
        }
      }
    })
  },
  onShowActiveSheet() {
    wx.showActionSheet({
      itemList: ["衣服", "裤子", "鞋子"],
      itemColor: "#f00",
      alertText: "警告！！",
      success: (res) => {
        console.log(res);
        console.log(res.tapIndex);
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },

  // 2.分享功能
  onShareAppMessage() {
    return {
      title: "崔新龙真帅",
      path: "/pages/10_learn_api/index",
      imageUrl: "/assets/cxl.jpg"
    }
  },

  // 3.获取设备信息
  onGetSysInfo() {
    // 获取手机信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
      }
    }),
    // 获取位置信息
    wx.getLocation({
      success: (res) => {
        console.log(res);
      }
    })
  },
  
  // 4.本地存储
  onStorage() {
    // 1.同步存储一些键值对
    // 存储完成才执行下一行
    // wx.setStorageSync('name', "why")
    // wx.setStorageSync('age', 18)
    // wx.setStorageSync('friends', ["abc", "cba", "nba"])

    // 2.获取storage中内容
    // const name = wx.getStorageSync('name')
    // const age = wx.getStorageSync('age')
    // const friends = wx.getStorageSync('friends')
    // console.log(name, age, friends);

    // 3.删除storage中内容
    // wx.removeStorageSync('name')

    // 4.清空storage中内容
    // wx.clearStorageSync()

    // 异步操作
    wx.setStorage({
      key: "books",
      data: ['高级js', 'vueJS设计'],
      encrypt: true,
      success: (res) => {
        wx.getStorage({
          key: "books",
          encrypt: true,
          success: (res) => {
            console.log(res);
          }
        })
      }
    })
  }
})