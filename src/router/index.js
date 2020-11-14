import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
