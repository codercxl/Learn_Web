<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
  import useUser from '@/store/user'
  import { storeToRefs } from 'pinia';

  const userStore = useUser()
  const { name, age, level } = storeToRefs(userStore)

  function changeState() {
    // 1.通过 store 实例访问状态来直接读取和写入状态
    // 一个一个进行修改
    // userStore.name = "why",
    // userStore.age = 20,
    // userStore.level = 200

    // 2.同时对多个状态修改
    // userStore.$patch({
    //   name: "Uzi",
    //   age: 25
    // })

    // 3.通过将其 $state 属性设置为新对象来替换 Store 的整个状态
    userStore.$state = {
      name: "coderwhy",
      level: 200
    }
  }
  function resetState() {
    // 调用 store 上的 $reset() 方法将状态 重置 到其初始值
    userStore.$reset()
  }
</script>

<style scoped>
</style>


