// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 1.获取参数
  const { num1, num2 } = event
  console.log(num1, num2);
  return num1 + num2
}