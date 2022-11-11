import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'

// export default function useScroll(reachBottomCB) {
//   const scrollListenerHandler = () => {
//     const clientHeight = document.documentElement.clientHeight
//     const scrollTop = Math.ceil(document.documentElement.scrollTop)
//     const scrollHeight = document.documentElement.scrollHeight
//     if (clientHeight + scrollTop >= scrollHeight) {
//       if (reachBottomCB) reachBottomCB()
//     }
//   }

//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler)
//   })

//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler)
//   })
// }

export default function useScroll(elRef) {
  let el = window

  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = Math.ceil(document.documentElement.scrollTop)
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = Math.ceil(el.scrollTop)
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部")
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}

