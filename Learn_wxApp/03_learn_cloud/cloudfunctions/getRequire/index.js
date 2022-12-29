// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require("axios")

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 1.从服务器获取数据
  const res = await axios.get("http://123.207.32.32:8000/home/multidata")

  // 2.对数据进行转化 返回客户端
  return {
    name: "hahaha",
    banners: res.data.data.banner.list,
    recommends: res.data.data.recommend.list,
  }
}