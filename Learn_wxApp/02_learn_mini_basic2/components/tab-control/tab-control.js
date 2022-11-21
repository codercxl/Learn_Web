// components/tab-control/tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    onItemTap(event) {
      const currentIndex = event.currentTarget.dataset.index
      this.setData({currentIndex})

      // 发送自定义事件
      this.triggerEvent("itemTap", currentIndex)
    },

    test(index) {
      this.setData({
        currentIndex: index
      })
      console.log("组件的test方法调用");
    }
  }
})
