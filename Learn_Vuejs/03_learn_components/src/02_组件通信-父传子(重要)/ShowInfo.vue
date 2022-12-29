<template>
  <div class="info">
    <!-- <h2 v-bind="$attrs">姓名: {{ name }}</h2> -->
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>
    <h2>Message: {{ showMessage }}</h2>
    <span>透传进来的 attribute: {{ $attrs }}</span>
    <span>透传进来的 attribute: {{ $attrs['cxl-why']}}</span>
  </div>
</template>

<script>
  export default {
    created() {
      // 访问组件的所有透传 attribute
      console.log(this.$attrs)
    },
    // 接收父组件传递来的属性
    // 1.props数组语法
    // 弊端: 1> 不能对类型进行验证 2.没有默认值的
    // props: ["name", "age", "height"]

    // 2.props对象语法(必须掌握)
    props: {
      name: {
        type: String,
        default: "我是默认name"
      },
      age: {
        type: Number,
        required: true, // 必传属性
        default: 0
      },
      height: {
        type: Number,
        default: 2
      },
      // 重要的原则: 对象类型写默认值时, 需要编写default的函数, 函数返回默认值
      friend: {
        type: Object,
        default() {
          return { name: "james" }
        }
      },
      hobbies: {
        type: Array,
        default: () => ["篮球", "rap", "唱跳"]
      },
      showMessage: {
        type: String,
        default: "我是showMessage"
      }
    },
    // 关闭组件自动地继承 attribute
    inheritAttrs: false
  }
</script>

<style scoped>
</style>


