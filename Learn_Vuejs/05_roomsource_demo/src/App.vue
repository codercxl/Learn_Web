<template>
  <div class="app">
    <room-area :areaData="highScore"></room-area>
  </div>
</template>

<script setup>
  import RoomArea from './components/RoomArea.vue'
  // 1.获取数据
  import highScore from './data/high_score.json'
  console.log(highScore)

</script>

<style lang="less" scoped>
  .app {
    width: 1032px;
    margin: 0 auto;
    padding: 40px;
    
  }
</style>


