<template>
    <!-- template中ref(counter)对象自动解包 -->
  <h2>当前计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
  import { ref } from 'vue'
  import useCounter from './hooks/useCounter'
  export default {
    setup() {
      // 默认定义数据都不是响应式
      // 1.
      // let counter = ref(100)
      // const increment = () => {
      //   counter.value++
      // }
      // const decrement = () => {
      //   counter.value--
      // }
      
      // 2.
      // const { counter, increment, decrement } = useCounter()

      // 3.
      return {
        ...useCounter()
      }

      // return {
      //   counter,
      //   increment,
      //   decrement
      // }
    }
  }
</script>

<style scoped>
</style>


