// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
// import { authGuard } from '@auth0/auth0-vue';
import SideMenu from "../layouts/SideMenu/SideMenu.vue";
// import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
// import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import AI from "../pages/AI.vue";
import Wallet from "../pages/Wallet.vue";
import Calculator from "../pages/Calculator.vue";
import Businesses from "../pages/Businesses.vue";
import Exchange from "../pages/Exchange.vue";
import Login from "../pages/Login.vue";
import Transaction from "../pages/Transaction.vue";
import Hub from "../pages/Hub.vue";
import Pro from "../pages/Pro.vue";
import { auth0 } from '../utils/auth0';

const { authGuard } = auth0

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/ai",
        name: "AI",
        component: AI,
        beforeEnter: authGuard
      },
      {
        path: "/wallet",
        name: "Wallet",
        component: Calculator,
        beforeEnter: authGuard
      },
      {
        path: "/businesses",
        name: "Businesses",
        component: Businesses,
        beforeEnter: authGuard
      },
      {
        path: "/",
        name: "Exchange",
        component: Exchange,
        beforeEnter: authGuard
      },
      {
        path: "/calculator",
        name: "Calculator",
        component: Calculator,
        beforeEnter: authGuard
      },
      {
        path: "/hub",
        name: "Hub",
        component: Hub,
        beforeEnter: authGuard
      },
      {
        path: "/pro",
        name: "Pro",
        component: Pro,
        beforeEnter: authGuard
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/transaction",
  //   name: "Transaction",
  //   component: Transaction,
  //   // beforeEnter: authGuard
  // },
  // {
  //   path: "/simple-menu",
  //   component: SimpleMenu,
  //   children: [
  //     {
  //       path: "Wallet",
  //       name: "simple-menu-Wallet",
  //       component: Wallet,
  //     },
  //     // {
  //     //   path: "login",
  //     //   name: "simple-menu-login",
  //     //   component: Login,
  //     // },
  //   ],
  // },
  // {
  //   path: "/top-menu",
  //   component: TopMenu,
  //   children: [
  //     {
  //       path: "Wallet",
  //       name: "top-menu-Wallet",
  //       component: Wallet,
  //     },
  //     // {
  //     //   path: "login",
  //     //   name: "top-menu-login",
  //     //   component: Login,
  //     // },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
