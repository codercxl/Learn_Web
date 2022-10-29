<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>Counter: {{ counterStore.counter }}</h2>
    <button @click="increment">counter++</button>

    <!-- 展示数据 -->
    <h2>轮播数据</h2>
    <ul>
    <template v-for="item in homeStore.banners">
      <li>{{ item.title }}</li>
    </template>
    </ul>
  </div>
</template>

<script setup>
  import useCounter from '@/store/counter'
  import useHome from '@/store/home'

  const counterStore = useCounter()

  function increment() {
    // counterStore.increment()
    counterStore.incrementNum(10)
  }

  const homeStore = useHome()
  homeStore.fetchHomeMultidata().then(res => {
    console.log("fetchHomeMultidata的action已经完成了:", res)
  })
</script>

<style scoped>
</style>


