import { createRouter, createWebHistory } from 'vue-router'
import Standard from '../views/Standard.vue'
import Advanced from '../views/Advanced.vue'
import Giveway from '../views/Giveway.vue'

const routes = [
  {
    path: '/',
    name: 'standard',
    component: Standard
  },
  {
    path: '/advance',
    name: 'advance',
    component: Advanced
  },
  {
    path: '/perte-a-priorite',
    name: 'giveway',
    component: Giveway
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
