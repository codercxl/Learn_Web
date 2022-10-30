// 常见配置选项
// 1.请求地址
//  url: '/user',
// 2.请求类型
//  method: 'get',
// 3.请根路径
//  baseURL: 'http://www.mt.com/api',
// 4.URL查询对象
//  params:{ id: 12 }
// 5.request body
//  data: { key: 'aa'},
// 6.超时设置
//  timeout: 1000

// 自定义的请求头
//  headers:{'x-Requested-With':'XMLHttpRequest'}




// 1.发送request请求
axios.request({
  url: "http://123.207.32.32:8000/home/multidata",
  // 默认是get
  method: "get"
}).then(res => {
  console.log("request res:", res.data)
})

// 2.发送get请求
// axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res => {
//   console.log("get res:", res.data.lrc)
// })
axios.get("http://123.207.32.32:9001/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("get res:", res.data.lrc)
})

// 3.发送post请求
// axios.post("http://123.207.32.32:1888/02_param/postjson", {
//   name: "cxl",
//   age: 18
// }).then(res => {
//   console.log("post res:", res.data)
// })

axios.post("http://123.207.32.32:1888/02_param/postjson", {
  data: {
    name: "cxl",
    age: 18
  }
}).then(res => {
  console.log("post res:", res.data)
})