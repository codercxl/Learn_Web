
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// localStorage.setItem("token", "cxl")

const app = createApp(App)
app.use(router)
app.mount('#app')
