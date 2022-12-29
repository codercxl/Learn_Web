// pages/cloud-storage/index.js
Page({
  data: {
    tempFiles: ""
  },

  async onUploadTap() {
    // 1.选中本地的文件
    const imageRes = await wx.chooseMedia({
      type: "image"
    })

    // 2.获取照片路径
    const imagePath = imageRes.tempFiles[0].tempFilePath

    // 拼接图片名称
    const timestamp = new Date().getTime() // 时间戳
    const openid = "open_id"
    const extension = imagePath.split(".").pop() // 后缀名
    const imageName = `${timestamp}_${openid}.${extension}`

    // 3.把照片上传到云存储
    const uploadRes = await wx.cloud.uploadFile({
      filePath: imagePath,
      // cloudPath: imageName
      cloudPath: "icon/" + imageName
    })
    console.log(uploadRes);
  },

  async onDownTap() {
    const res = await wx.cloud.downloadFile({
      fileID: "cloud://cloud1-0gxh9apkb864c60c.636c-cloud1-0gxh9apkb864c60c-1315723394/icon/1670476790631_open_id.png"
    })
    this.setData({ tempFiles: res.tempFilePath })
    console.log(res);
  },

  async onDeleteTap() {
    const res = await wx.cloud.deleteFile({
      fileList: [
        "cloud://cloud1-0gxh9apkb864c60c.636c-cloud1-0gxh9apkb864c60c-1315723394/music_active.png"
      ]
    })
    console.log(res);
  },

  async onTempTap() {
    const res = await wx.cloud.getTempFileURL({
      fileList: [
        "cloud://cloud1-0gxh9apkb864c60c.636c-cloud1-0gxh9apkb864c60c-1315723394/1670476707505_open_id.png",
        "cloud://cloud1-0gxh9apkb864c60c.636c-cloud1-0gxh9apkb864c60c-1315723394/icon/video_active.png"
      ]
    })
    console.log(res);
  }
})