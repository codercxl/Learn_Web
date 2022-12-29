// pages/cloud-database/index.js
// 1.获取到对应的数据库
const db = wx.cloud.database()

// 2.获取到操作的集合(collection)
const stuCol = db.collection("students")
const lolCol = db.collection("lol")

Page({
  async onAddDataTap() {
    // 1.向云数据库中添加数据
    // 通过回调函数返回结果
    // stuCol.add({
    //   data: {
    //     name: "Uzi",
    //     age: 28,
    //     address: {
    //       name: "上海",
    //       code: 7777,
    //       alias: "ShangHai"
    //     },
    //     hobbies: ["LOL", "VN", "走A"]
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })

    // 通过Promise返回结果
    const res = await stuCol.add({
      data: {
        name: "cxl",
        age: 18,
        address: {
          name: "河南",
          code: 6666,
          alias: "HeNan"
        },
        hobbies: ["code", "篮球", "lol"]
      }
    })
    console.log(res);
  },
  onDeleteDataTap() {
    // 1.明确删除某一条数据
    // stuCol.doc("c658c1c5638ee7da013d54ca4a366d96")
    //   .remove().then(res => {
    //     console.log(res);
    //   })
    
    // 2.根据条件 查询到数据的结果 将对应的数据删除
    // 把rid大于2000000的数据删除  需要用到查询指令
    const cmd = db.command
    lolCol.where({
      rid: cmd.gt(2000000)
    }).remove().then(res => {
      console.log(res);
    })
  },
  onUpdateDataTap() {
    // 1.更新单条数据
    // 1.1update方式 只更新对应字段
    // stuCol.doc("ac74c002638ef6a90128cced3eec7f8f")
    //   .update({
    //     data: {
    //       age: 30
    //     }
    //   }).then(res => {
    //     console.log(res);
    //   })

    // 1.2set方式 替换所有字段
    // stuCol.doc("c5739f2e639028380010456e2e1af369")
    //   .set({
    //     data: { age: 30 }
    //   }).then(res => {
    //     console.log(res);
    //   })

    // 2.更新多条数据
    const cmd = db.command
    stuCol.where({
      age: cmd.gt(25)
    }).update({
      data: { age: 10 }
    }).then(res => {
      console.log(res);
    })
  },
  onQueryDataTap() {
    // 方式一：通过ID查询精确的某一条数据
    // lolCol.doc("9c6f30ad638efdbe00b652d44aab94ae")
    //   .get().then(res => {
    //     console.log("对象类型：", res.data);
    //   })

    // 方式二：根据条件查询满足条件的数据
    // lolCol.where({
    //   nickname: "狂人昊"
    // }).get().then(res => {
    //   console.log("数组类型：", res.data);
    // })

    // 方式三：通过指令过滤数据
    // const cmd = db.command
    // lolCol.where({
    //   rid: cmd.lte(1881501)
    // }).get().then(res => {
    //   console.log("数组类型：", res.data);
    // })

    // 方式四：通过正则表达式匹配符合的数据
    // lolCol.where({
      // nickname: db.RegExp({
      //   regexp: "英雄联盟",
      //   options: "i"
      // })
    //   nickname: /英雄联盟/i
    // }).get().then(res => {
    //   console.log(res.data);
    // })

    // 方式五：获取整个集合的数据（小程序端一次性最多20条，云函数中可以获取100条）；
    // lolCol.get().then(res => {
    //   console.log(res);
    // })

    // 方式六：过滤、分页、排序查询数据 使用field、skip、limit、orderBy
    // 1. 分页：skip(offset)/limit(size)
    let page = 1
    // 从第5条开始查询6条数据
    // lolCol.skip(page * 5).limit(6).get().then(res => {
    //   console.log(res);
    // })

    // 2.排序：orderBy 过滤：field
    // asc: 升序 desc: 降序
    lolCol.field({
      _id: true,
      rid: true,
      nickname: true
    }).skip(page * 5).limit(6).orderBy("rid", "asc").get().then(res => {
      console.log(res.data);
    })
  },

  onAddLOLDataTap() {
    // 1.获取数据
    for (let i = 0; i < 100; i++) {
      wx.request({
        url: 'https://m.douyu.com/api/room/list',
        data: { type: "LOL", page: i + 1 },
        success: (res) => {
          const list = res.data.data.list
          this.handleLOLList(list)
        }
      })
    }
  },
  handleLOLList(list) {
    for (const item of list) {
      lolCol.add({data: item}).then(res => {
        console.log("item插入成功：", item.nickname);
      })
    }
  },

  onShowLOLTap() {
    wx.navigateTo({
      url: '/pages/lol/index',
    })
  }
})