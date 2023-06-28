import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { auth0 } from '../utils/auth';

const { authGuard } = auth0

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: authGuard
    // beforeEnter: () => {
    //   if (!userStore.authenticated) {
    //     return false
    //   }
    // }
  },
  {
    path: '/b/:business',
    name: 'business',
    component: () => import('../views/b/Business.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/deployer',
    name: 'deployer',
    component: () => import('../views/Deployer.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../views/Wallet.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
})

export default router
