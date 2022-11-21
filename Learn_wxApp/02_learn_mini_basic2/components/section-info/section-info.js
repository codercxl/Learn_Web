// components/section-info/section-info.js
Component({
  properties: {
    title: {
      type: String,
      value: "默认标题"
    },
    content: {
      type: String,
      value: "默认内容"
    }
  },
  externalClasses: ["info"],
  methods: {
    onTitleTap() {
      console.log("组件内监听到被title点击");
      // 向页面发送事件
      this.triggerEvent("titleClick", "发送事件所传递的数据")
    }
  }
})
