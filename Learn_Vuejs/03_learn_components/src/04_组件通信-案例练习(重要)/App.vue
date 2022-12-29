<!-- <template> -->
  <!-- <div class="app"> -->
    <!-- Tab-Control -->
    <!-- <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-click="tabClick"/> -->
    <!-- <tab-control :titles="['最新', '流行', '优惠']" /> -->
    <!-- 展示信息 -->
    <!-- <h2>{{ pageMessage[currentIndex] }}</h2> -->
  <!-- </div> -->
<!-- </template> -->
<!-- 
<script>
  import TabControl from './TabControl.vue';

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        pageMessage: ["衣服列表", "鞋子列表", "裤子列表"],
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
      }
    }
  }
</script> -->

<!-- <style scoped>
</style> -->


<template>
  <tab-control :titles="['衣服', '鞋子', '裤子']" @tab-click="tabClick" />

  <h2>{{ pageMessage[currentIndex] }}</h2>
</template>

<script>
  import TabControl from './TabControl.vue'

  export default {
    components: {
      TabControl
    },

    data() {
      return {
        pageMessage: ["衣服列表", "鞋子列表", "裤子列表"],
        currentIndex: 0
      }
    },

    methods: {
      tabClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>

</style>