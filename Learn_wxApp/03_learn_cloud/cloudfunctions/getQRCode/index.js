// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 1.生成小程序码
  const qrCodeRes = await cloud.openapi.wxacode.createQRCode({
    width: 320,
    path: "page/cloud-function/index"
  })

  // 2.获取到数据，并上传到云存储
  const wxContext = cloud.getWXContext()
  const timestamp = new Date().getTime()
  const openid = wxContext.OPENID
  const extension = qrCodeRes.contentType.split("/").pop()
  const cloudPath = `${timestamp}_${openid}.${extension}`
  const uploadRes = await cloud.uploadFile({
    fileContent: qrCodeRes.buffer,
    cloudPath
  })

  return uploadRes
}