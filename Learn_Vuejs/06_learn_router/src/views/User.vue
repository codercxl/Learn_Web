<template>
  <!-- 1.在模板中获取值 -->
  <h2>User: {{ $route.params.id }}</h2>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
  // 2. 在代码中获取
  const route = useRoute()
  console.log(route.params.id)

  // 获取route跳转id
  onBeforeRouteUpdate((to, from) => {
    console.log("from:", from.params.id)
    console.log("to:", to.params.id)
  })
</script>

<style scoped>
</style>


