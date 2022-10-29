import { defineStore } from 'pinia'

const useUser = defineStore("user", {
  state: () => ({
    name: "cxl",
    age: 18,
    level: 100
  })
})

export default useUser