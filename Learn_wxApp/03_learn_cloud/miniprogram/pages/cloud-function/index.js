// pages/cloud-function/index.js
Page({
  data: {
    qrCodeFileID: ""
  },

  async onTestTap() {
    const res = await wx.cloud.callFunction({
      name: "test"
    })
    console.log(res);
  },

  async onSumTap() {
    const num1 = 20
    const num2 = 40

    const res = await wx.cloud.callFunction({
      name: "sum",
      data: { num1, num2 }
    })
    console.log(res);
  },

  async onGetOpenidTap() {
    const res = await wx.cloud.callFunction({
      name: "getopenid"
    })
    console.log(res);
  },

  async onDBTap() {
    const res = await wx.cloud.callFunction({
      name: "handleDB"
    })
    console.log(res);
  },

  async onRequireTap() {
    const res = await wx.cloud.callFunction({
      name: "getRequire"
    })
    console.log(res);
  },

  async onQRCodeTap() {
    const res = wx.cloud.callFunction({
      name: "getQRCode"
    })
    this.setData({ qrCodeFileID: (await res).result.fileID })
    console.log(res);
  }
})