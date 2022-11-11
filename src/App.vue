<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <!-- 第一种方案：对路由进行修改 -->
    <!-- 是否隐藏TabBar -->
    <!-- <tab-bar v-show="!route.meta.hideTabBar"/> -->
    <!-- 第二种方案：进入相应页面Css控制 覆盖页面-->
    <tab-bar/>
    <loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "./components/loading/loading.vue";
import { useRoute } from "vue-router";
import { comment } from "postcss";


// useRoute() 返回当前活跃的路由对象(当前进入的页面的路由)
const route = useRoute()
</script>


<style scoped>

</style>
