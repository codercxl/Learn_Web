<template>
  <h2>Home</h2>
  <router-link to="/home/recommend">推荐</router-link>
  <router-link to="/home/products">价格</router-link>
  <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
  .router-link-exact-active {
    color: aqua;
    font-size: 20px;
  }
</style>


