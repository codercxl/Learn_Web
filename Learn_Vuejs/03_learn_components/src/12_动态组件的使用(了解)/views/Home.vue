<template>
  <h2>home组件-{{name}}-{{age}}</h2>
  <button @click="homeBtnClick">homeBtn</button>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: "cxl"
      },
      age: {
        type: Number,
        default: 17
      }
    },
    emits: ["homeClick"],
    methods: {
      homeBtnClick() {
        this.$emit("homeClick", "home")
      }
    }
  }
</script>

<style scoped>
</style>


