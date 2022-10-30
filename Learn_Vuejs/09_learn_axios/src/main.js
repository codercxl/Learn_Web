import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

hyRequest.request({
  url: "/lyric?id=500665346"
}).then(res => {
  console.log("res:", res)
})

hyRequest.get({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res)
})