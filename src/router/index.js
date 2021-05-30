import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts.vue'
import AppSinglePost from '../components/AppPosts.vue'
import AppAddPost from '../components/AppAddPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    component: AppPosts,
    name: 'Posts'
  },
  {
    path: '/posts/:id',
    component: AppSinglePost,
    name: 'Post'
  },
  {
    path: '/add',
    component: AppAddPost,
    name: 'AddPost' 
  },
  {
    path: 'edit/:id',
    component: AppAddPost
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
