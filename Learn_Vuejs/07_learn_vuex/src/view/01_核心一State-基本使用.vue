<template>
  <div class="app">
  <h2>模板当前计数: {{ $store.state.counter }}</h2>
  <h2>computed当前计数: {{ storeCounter }}</h2>
  <h2>setup当前计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    computed: {
      storeCounter() {
        return this.$store.state.counter
      }
    }
  }
</script>

<script setup>
  import { toRefs } from 'vue';
  import { useStore } from 'vuex'

  // 1.在组件中的状态管理
  // const counter = 100

  const store = useStore()
  const { counter } = toRefs(store.state)

  function increment() {
    // 能使用但不建议
    // store.state.counter++
    store.commit("increment")
  }
</script>

<style scoped>
</style>


