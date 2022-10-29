<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <!-- replace: 不会记录历史操作(了解) -->
      <router-link to="/home" replace active-class="active">首页</router-link>
      <router-link to="/about" replace active-class="active">关于</router-link>

      <router-link to="/user/123">用户123</router-link>
      <router-link to="/user/456">用户456</router-link>
      <router-link to="/order">订单</router-link>
      <!-- 其他元素跳转 -->
      <span @click="homeSpanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { classExpression } from '@babel/types';
import { useRouter } from 'vue-router'
  const router = useRouter()
  
  function homeSpanClick() {
    //  使用push的特点是压入一个新的页面，那么在用户点击返回时，上一个页面还可以回退，但是如果我们希望当前页面是一个替换
    // 操作，那么可以使用replace
    // router.push("/home")
    router.push({
      // name: "home"
      path: "/home"
    })
  }
  function aboutBtnClick() {
    router.push({
      path: "/about",
      // 向 about 组件传值
      query: {
        name: "cxl",
        age:18
      }
    })
  }
</script>

<style scoped>
  /* 默认的类名 */
  .router-link-active {
    color: red;
    font-size: 20px;
  }
  
  
  /* 自己定义的类名 */
  .active {
    color: orange;
    font-size: 20px;
  }
</style>


