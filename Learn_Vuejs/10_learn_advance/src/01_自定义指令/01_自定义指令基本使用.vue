<template>
  <div class="app">
    <!-- <input type="text" ref="inputRef"> -->
    <input type="text" v-focus>
  </div>
</template>

<!-- <script>
// 方式二：自定义指令
export default {
  directives: {
    focus: {
      // 生命周期函数
      mounted(el) {
        el?.focus()
        console.log("v-focus应用的元素被挂载了", el)
      }
    }
  }
}
</script> -->

<script setup>
// 方式一：定义ref绑定到input，调用focus
// import useInput from './hook/useInput'
// const { inputRef } = useInput()

// 方式二：自定义指令(局部)
// const vFocus = {
//   mounted(el) {
//     el?.focus()
//     console.log("v-focus应用的元素被挂载了", el)
//   }
// }
</script>

<style scoped>

</style>