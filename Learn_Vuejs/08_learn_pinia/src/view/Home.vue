<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>doubleCounter: {{ counterStore.doubleCounter }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
    <h2>getFriendById-111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>getFriendById-112: {{ counterStore.getFriendById(112) }}</h2>
    <!-- <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button> -->
  </div>
</template>

<script setup>
  import useCounter from '@/store/counter'

  const counterStore = useCounter()
</script>

<style scoped>
</style>


