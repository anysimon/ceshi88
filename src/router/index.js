import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 按需加载

const router = new VueRouter({
  routes
})

export default router
