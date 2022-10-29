<template>
  <button @click="message = '你好, vue'">修改message</button>
  <button @click="info.friend.name = '简自豪'">修改info</button>
</template>

<script>
import { watch, ref, reactive } from 'vue'
  export default {
    setup() {
      const message = ref("Hello Vue")
      watch(message, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      })

      const info = reactive({
        name: "cxl",
        age: 18,
        friend: {
          name: "Uzi"
        }
      })
      watch(info, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        // 默认会有深度监听
        // deep: true
        // 立即执行一次
        immediate: true
      })
      // 监听reactive数据变化后, 获取普通对象  默认返回Proxy
      // 此时不会深度监听
      watch(() => ({ ...info }), (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        immediate: true,
        deep: true
      })

      return {
        message,
        info
      }
    }
  }
</script>

<style scoped>
</style>


