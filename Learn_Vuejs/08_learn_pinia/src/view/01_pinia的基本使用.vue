<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>当前计数: {{ counterStore.counter }}</h2>
    <h2>解构当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'
  import { storeToRefs } from 'pinia'
  import useCounter from '../store/counter'

  const counterStore = useCounter()
  
  // 默认解构不是响应式
  // const { counter } = counterStore
  // const { counter } = toRefs(counterStore)
  const { counter } = storeToRefs(counterStore)

  function increment() {
    counterStore.counter++
  }
</script>

<style scoped>
</style>


