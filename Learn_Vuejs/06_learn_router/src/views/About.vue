<template>
  <h2>About: {{ $route.query.name }}-{{ $route.query.age }}</h2>
  <button @click="backBtnClick">返回</button>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function backBtnClick() {
    router.back()
    // router.forward()
    // router.go(1) // 相当于router.forward()
    // router.go(-1) // 相当于router.back()
  }
</script>

<style scoped>
</style>


