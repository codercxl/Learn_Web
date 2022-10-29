<template>
  <h2>登录页面</h2>
  <button @click="loginBtnClick">登录</button>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  function loginBtnClick() {
    localStorage.setItem("token", "cxl")
    // 跳转页面
    router.push("/order")
  }
</script>

<style scoped>
</style>


