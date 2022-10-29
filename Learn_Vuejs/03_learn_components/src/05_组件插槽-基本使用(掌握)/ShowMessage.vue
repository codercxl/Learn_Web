<template>
  <h2>{{ title }}</h2>
  <div class="countent">
    <slot>
      <p>我是slot默认值</p>
    </slot>
  </div>
</template>

<script>

  export default {
    props: {
      title: {
        type: String,
        default: "我是title默认值"
      },
      // countent: {
      //   type: String,
      //   default: "我是content默认值"
      // }
    }
  }
</script>

<style scoped>
</style>


