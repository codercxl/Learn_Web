<template>
  <show-message title="哈哈哈哈">
    <p>呵呵呵呵</p>
  </show-message>
  <show-message>
    <button>我是button元素</button>
  </show-message>
  <show-message>
    <a href="#">百度一下</a>
  </show-message>
  <show-message>
    <input type="text">
  </show-message>
  <show-message>
    <img src="@/img/kobe02.png" alt="">
  </show-message>

  <show-message></show-message>
  
</template>

<script>
  import ShowMessage from './ShowMessage.vue';

  export default {
    components: {
      ShowMessage
    }
  }
</script>

<style scoped>
</style>


