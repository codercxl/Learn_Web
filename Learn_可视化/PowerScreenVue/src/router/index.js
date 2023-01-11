import { createRouter, createWebHistory } from 'vue-router'
import PowerScreen from '../views/power-screen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'powerscreen',
      component: PowerScreen
    }
  ]
})

export default router
