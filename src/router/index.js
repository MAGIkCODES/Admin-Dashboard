import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dashboard.vue')
    }
  ]
})

export default router
