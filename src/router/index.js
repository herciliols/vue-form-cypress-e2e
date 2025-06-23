import { createRouter, createWebHistory } from 'vue-router'
import UserRegisterView from '@/modules/user/views/UserRegisterView.vue'

const routes = [
  { path: '/', redirect: '/register' }, 
  { path: '/register', component: UserRegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
