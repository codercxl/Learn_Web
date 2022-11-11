<template>
  <div class="home" ref="homeRef">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>
    <home-countent />
    <!-- <button @click="btnClick">加载更多</button> -->
  </div>
</template>

<script>
export default { name: "home" }
</script>
<script setup>
import { ref, watch, computed, onMounted, onActivated } from 'vue';
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearchBox from './components/home-search-box.vue'
import HomeCategories from './components/home-categories.vue'
import HomeCountent from './components/home-countent.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

import useScroll from '@/hooks/useScroll'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// function btnClick() {
//   homeStore.fetchHouselistData()
// }

// 方案一 传入回调 监听window滚动到底部
// useScroll(() => {
//   homeStore.fetchHouselistData()
// })

// 方案二 定义变量 通过watch监听变量的变化
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 监听search-bar
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
// 定义的可响应数据，依赖另外一个可响应的数据，那么可使用computed
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

// 跳转回hone时 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}


</style>