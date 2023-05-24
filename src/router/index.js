import { createRouter, createWebHistory } from 'vue-router'
import Standard from '../views/Standard.vue'
import Advanced from '../views/Advanced.vue'
import Result from '../views/Message.vue'

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
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
