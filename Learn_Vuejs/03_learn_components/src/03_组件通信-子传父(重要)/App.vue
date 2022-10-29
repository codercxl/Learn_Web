<template>
  <h2>当前计数: {{ counter }}</h2>
  <!-- 接收事件并执行对应事件 -->
  <add-counter @add="addBtnclick"></add-counter>
  <sub-counter @sub="subBtnclick"></sub-counter>
</template>

<script>
  import AddCounter from "./AddCounter.vue"
  import SubCounter from "./SubCounter.vue"
  export default {
    components: {
      AddCounter,
      SubCounter
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addBtnclick(count) {
        this.counter += count
      },
      subBtnclick(count) {
        this.counter -= count
      }
    }
  }
</script>

<style scoped>
</style>


