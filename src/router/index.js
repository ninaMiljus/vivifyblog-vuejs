import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts.vue'
import AppSinglePost from '../components/AppPosts.vue'
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
  },
  {
    path: '/posts/:id',
    component: AppSinglePost,
    name: 'Post'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
