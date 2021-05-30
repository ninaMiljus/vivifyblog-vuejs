import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from './components/AppPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    component: AppPosts,
    name: 'posts'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
