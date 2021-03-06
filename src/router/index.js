import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/:pathMatch(.*)*', name: 'error', component: ErrorView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
