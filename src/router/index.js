import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },

    // {
    //   path: '/addnewproduct',
    //   name: 'Addnewproduct',
    //   component: () => import('../views/AddNewProduct.vue')
    // }
  ]
})

export default router
