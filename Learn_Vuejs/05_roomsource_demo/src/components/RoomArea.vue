<template>
  <div class="room-area">
    <!-- 1.header区域 -->
    <area-header :title="areaData.title" :subtitle="areaData.subtitle"></area-header>
    <!-- 2.房间列表 -->
    <div class="room-list">
      <template v-for="item in areaData.list" :key="item.id">
        <room-item :item-data="item"></room-item>
      </template>
    </div> 
  </div>

</template>

<script setup>
  import AreaHeader from './AreaHeader.vue'
  import RoomItem from './RoomItem.vue'

  defineProps({
    areaData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style scoped>
  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -8px;
  }
</style>


