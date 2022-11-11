<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control 
      :titles="names" 
      class="tabs"
      v-if="showTabControl"
      @tabClick="tabClick"
      ref="tabControlRef"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos name="描述" :ref="getSectionRef" :top-module="mainPart.topModule" />
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <detail-map name="地图" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/service'
import useScroll from '@/hooks/useScroll'

import TabControl from '@/components/tab-control/tab-control.vue'
import DetailSwipe from './components/detail_01-swipe.vue'
import DetailInfos from './components/detail_02-infos.vue'
import DetailFacility from './components/detail_03-facility.vue'
import DetailLandlord from './components/detail_04-landlord.vue'
import DetailComment from './components/detail_05-comment.vue'
import DetailNotice from './components/detail_06-notice.vue'
import DetailMap from './components/detail_07-map.vue'
import DetailIntro from './components/detail_08-intro.vue'

const router = useRouter()
const route = useRoute()
console.log(route.params.id)

// 发送网络请求
const houseId = route.params.id
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

const onClickLeft = () => {
  router.back()
}

// tabControl相关操作
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value > 300
})

// const landlordRef = ref()
// const sectionEls = []
// const getSectionRef = (value) => {
//   if(value) sectionEls.push(value.$el)
// }
// const tabClick = (index) => {
//   let instance = sectionEls[index].offsetTop
//   if (index !== 0) {
//     instance = instance - 44
//   }
//   detailRef.value.scrollTo({
//     top: instance,
//     behavior: "smooth"
//   })
// }

const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}
// 点击标题跳动问题
let isClick = false
let currentDistance = -1
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let distance = el.offsetTop
  if (index !== 0) {
    distance = distance - 44
  }

  isClick = true
  currentDistance = distance

  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}


// 1 把获取到的offsetTop值放到数组里
// 2 滚动的scrollTop去匹配数组的值 一旦发现offsetTop>scrollTop返回索引值 -1
// 需求： 返回300的索引  这时匹配到500的索引 所以 -1
// const offsetTop = [100, 300, 500, 800, 1000]
// const scrollTop = 400
// 页面滚动 匹配对应的tabControll的标题(index)
const tabControlRef = ref()
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance) {
    isClick = false
  }
  if (isClick) return
  // 1.获取所有的区域的offsetTop
  const els = Object.values(sectionEls.value)
  const values = els.map(el => el.offsetTop)

  // 2.根据newValue去匹配索引
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1
      break
    }
  }
  tabControlRef.value?.setCurrentIndex(index)
})
</script>

<style lang= "less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>