import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHouselist } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouselistData() {
      const res = await getHouselist(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
