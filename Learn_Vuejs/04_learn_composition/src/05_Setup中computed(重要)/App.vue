<template>
  <!-- <h2>{{ names.firstName + " " + names.lastName }}</h2> -->
  <h2>{{ fullName }}</h2>
  <button @click="setFullname">设置fullname</button>
  <h2>{{ scoreLevel }}</h2>
</template>

<script>
import { reactive, computed, ref } from 'vue'
  export default {
    setup() {
      // 1.定义数据
      const names = reactive({
        firstName: "Uzi",
        lastName: "简自豪"
      })

      // const fullName = computed(() => {
      //   return names.firstName + " " + names.lastName
      // })
      const fullName = computed({
        set: function(newValue) {
          const tempNames = newValue.split(" ")
          names.firstName = tempNames[0]
          names.lastName = tempNames[1]
          console.log(newValue) // coder why
          // console.log(tempNames)
        },
        get: function() {
          return names.firstName + " " + names.lastName
        }
      })
      function setFullname() {
        fullName.value = "coder why"
        console.log(names)
      }

      // 2. 定义分数
      const score = ref(89)
      const scoreLevel = computed(() => {
        return score.value > 60 ? "及格": "不及格"
      })

      return {
        names,
        fullName,
        scoreLevel,
        setFullname
      }
    }
  }
</script>

<style scoped>
</style>


