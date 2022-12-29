// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 1.获取数据库和集合
  const db = cloud.database()
  const lolCol = db.collection("lol")

  // 写代码逻辑
  const type = event.type
  if (type === 0) {
    // 英雄联盟
  } else if (type === 1) {
    // 王者荣耀
  }

  // 2.从集合中查询数据
  const res = await lolCol.get()
  return {
    name: "英雄联盟",
    lolList: res.data
  }
}