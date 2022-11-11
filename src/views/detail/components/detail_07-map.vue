<template>
  <div class="map">
    <detail-section header-text="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
import { onMounted, ref } from 'vue';

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref()

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value); // 创建地图实例 
  const point = new BMapGL.Point(props.position.longitude, props.position.latitude); // 创建点坐标 
  // const point = new BMapGL.Point(114.356486, 36.071688); // 创建点坐标 
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  var marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  // map.setHeading(64.5);   //设置地图旋转角度
  // map.setTilt(73);       //设置地图的倾斜角度
})
</script>

<style lang= "less" scoped>
.baidu {
  height: 250px;
}
</style>