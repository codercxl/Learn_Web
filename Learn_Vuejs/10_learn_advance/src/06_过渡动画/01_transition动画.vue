<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <transition>
      <h2 v-if="isShow">哈哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let isShow = ref(false)
</script>

<style scoped>
h2 {
  display: inline-block;
}
/* 
   class的name命名规则如下：
  如果我们使用的是一个没有name的transition，那么所有的class是以 v- 作为默认前缀；
  如果我们添加了一个name属性，比如 <transtion name="why">，那么所有的class会以 why- 开头
*/

/* .cxl-enter-from,
.cxl-leave-to {
  opacity: 0;
  transform: scale(0.6);
} */
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: scale(1);
}


.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}
</style>