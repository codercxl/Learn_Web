<template>
  <div class="city top-page">
    <div class="top">
        <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <!-- tab的切换 -->
      <!-- tabActive：默认是索引值 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <!-- 遍历对象 -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <!-- :name="key": 让 tabActive 绑定选中tab的key-->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :groupData="currentGroup" /> -->
      <!-- 优化 -->
      <template v-for="(value, key, index) in allCities">
      <city-group v-show="tabActive === key" :groupData="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { getCityAll } from "@/service"

import CityGroup from './components/city-group.vue'

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

// tab的切换功能
const tabActive = ref()


// 从Store中获取数据
// 分层架构：此页面向cityStore请求数据 -> cityStore的actions向service发起网络请求
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中tab后的数据
// allCities.value: Proxy {cityGroup: {…}, cityGroupOverSea: {…}}
// tabActive.value: cityGroup
// data["cityGroup"]
const currentGroup = computed(() => allCities.value[tabActive.value])

/**
 * 
    这个位置发送网络请求有两个缺点：
    1.加果网络清求太多，·那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
    2.如果页面封装了很多的子组件，·子组件需要这些数据，我们必须一步步将数据传速递过去(props)
 */
// 网络请求：请求城市的数据
// allCity 是一个对象
// const allCity = ref({})
// getCityAll().then(res => {
//   allCity.value = res.data
// })
</script>

<style lang= "less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  // 方案一
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
  // 方案二
  // top固定定位 ：滚动条问题
  // .top{
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content{
  //   margin-top: 98px;
  // }
}





// .city {
//   // 设置了position，z-index才生效
//   position: relative;
//   z-index: 9;
//   height: 100vh;
//   background-color: #fff;
//   // 只在页面滚动
//   overflow-y: auto;
// }
</style>