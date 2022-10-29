import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载：分包处理
// webpackChunkName：对分包进行命名
// const Home = () => import(/* webpackChunkName: 'home' */"../views/Home.vue")
// const About = () => import(/* webpackChunkName: 'about' */"../views/About.vue")

// 配置路由映射
// const routes = [
  
// ]

// 创建router对象
const router = createRouter({
  // 指定采用的模式: hash
  history: createWebHashHistory(),
  // 指定采用的模式: history
  // history: createWebHistory(),
  // 映射关系
  routes: [
    //  redirect是重定向, 也就是将根路径重定向到/home的路径下
    //  name属性：路由记录独一无二的名称；
    //  meta属性：自定义的数据

    { 
      path: '/', 
      redirect: '/home' 
    },
    { 
      name:"home",
      path: '/home', 
      component: () => import(/* webpackChunkName: 'Home' */"../views/Home.vue"),
      meta: {
        name: "cxl",
        age: 18
      },
      // 路由嵌套
      children: [
        {
          path: "/home",
          redirect: "/home/recommend"
        },
        {
          path: "recommend", // /home/recommend
          component: () => import("../views/HomeRecommend.vue")
        },
        {
          path: "products", // /home/products
          component: () => import("../views/HomeProducts.vue")
        }
      ]
    },
    { 
      path: '/about', 
      component: () => import(/* webpackChunkName: 'About' */"../views/About.vue") 
    },
    {
      // 动态路由
      path: '/user/:id',
      component: () => import("../views/User.vue")
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/order",
      component: () => import("../views/Order.vue")
    },
    {
      // 在/:pathMatch(.*)后面又加了一个 *:  是否解析 /
      path: '/:path(.*)*',
      component: () => import("../views/NotFound.vue")
    }
  ]
})

  // 1.动态管理路由
  let isAdmin = true
  if (isAdmin) {
  // 一级路由
    router.addRoute({
      path: "/admin",
      component: () => import("../views/Admin.vue")
    })
    // 二级路由
    router.addRoute("home", {
      path: "vip",
      component: () => import("../views/HomeVip.vue")
    })
  }
  // 获取router中所有的映射路由对象
  console.log(router.getRoutes())

  // 2.路由导航守卫
  // 进行任何的路由跳转之前, 传入的beforeEach中的函数都会被回调
  router.beforeEach((to, from) => {
    // 1.进入到任何别的页面时, 都跳转到login页面
    //  if (to.path !== "/login") {
    //    return "/login"
    //  }

    // 2.进入到订单页面时, 判断用户是否登录
    const token = localStorage.getItem("token")
    if (to.path === "/order" && !token) {
      return "/login"
    }
  })

export default router