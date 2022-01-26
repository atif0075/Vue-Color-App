import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/gradient',
    name: 'Gradient',
    component: () => import('../views/Gradient.vue')
  },
  {
    path: '/shortcut-keys',
    name: 'ShortCut',
    component: () => import('../views/ShortCut.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
