// pages/lol/index.js

const db = wx.cloud.database()

const lolCol = db.collection("lol")

Page({
  data: {
    lolList: [],
    offset: 0
  },

  onLoad() {
    this.fetchLOLData()
  },

  fetchLOLData() {
    lolCol.skip(this.data.offset).limit(10)
      .get().then(res => {
        const newList = [...this.data.lolList, ...res.data]
        this.setData({ lolList: newList })
        this.data.offset = this.data.lolList.length
      })
  },

  async onDeleteTap(event) {
    // 将数据库中相应数据删除
    const { item, index } = event.currentTarget.dataset
    
    const res = await lolCol.doc(item._id).remove()
    // 再向数据库请求新数据
    if (res) {
      this.setData({ lolList: [], offset: 0 })
      this.fetchLOLData()
    }
  },

  async onUpdateTap(event) {
    const { item, index } = event.currentTarget.dataset
    const roomImg = this.data.lolList[index].roomSrc
    const res = await lolCol.doc(item._id).update({
      data: { avatar: roomImg }
    })

    if (res) {
      this.setData({ lolList: [], offset: 0 })
      this.fetchLOLData()
    }
  },

  onReachBottom() {
    this.fetchLOLData()
  }
})