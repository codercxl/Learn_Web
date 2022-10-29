<template>
  <nav-bar>
    <template #left>
      <!-- 父级模板里的所有内容都是在父级作用域中编译的 -->
      <!-- 只能访问自己里面的数据 -->
      <button>{{ leftText }}</button>
    </template>

    <template #center>
      <span>搜索</span>
    </template>

    <template v-slot:right>
      <a href="#">登录</a>
    </template>
  </nav-bar>

  <!-- nav-bar只给一个插槽传入数据 -->
  <!-- 动态插槽名 -->
  <nav-bar>
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
  </nav-bar>
  <button @click=" position = 'left' ">左边</button>
  <button @click=" position = 'center' ">中间</button>
  <button @click=" position = 'right' ">右边</button>
</template>

<script>
  import NavBar from './NavBar.vue';
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        position: "center",
        leftText: "返回"
      }
    }
  }
</script>

<style scoped>
</style>


