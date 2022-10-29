// 定义有关counter的store
import { defineStore } from 'pinia'
import useUser from './user'
// 返回一个函数
const useCounter = defineStore("counter", {
  state: () => ({
    counter: 200,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ]
  }),
  getters: {
    // 1.基本使用
    doubleCounter(state) {
      return state.counter * 2
    },
    // 2.一个getter里面用另一个getter
    doubleCountAddOne() {
      // this: 当前store实例
      return this.doubleCounter + 1
    },
    // 3.访问其他store的Getters
    showMessage(state) {
      // 1.获取user的信息
      const userStore = useUser()
      // 2.获取自己的信息

      // 3.拼接信息
      return `name:${userStore.name}-counter:${state.counter}`
    },
    // 4.Getters返回一个函数
    getFriendById(state) {
      // return function(id) {
      //   return state.friends.find(item => item.id === id)
      // }
      return function(id) {
        for(let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i]
          if(friend.id === id) {
            return friend
          }
        }
      }
    }
  }
})

export default useCounter