import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '@/views/日期选择.vue')
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Transfer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
