// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
// import { authGuard } from '@auth0/auth0-vue';
import SideMenu from "../layouts/SideMenu/SideMenu.vue";
// import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
// import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import Wallet from "../pages/Wallet.vue";
import Calculator from "../pages/Calculator.vue";
import Login from "../pages/Login.vue";
import Transaction from "../pages/Transaction.vue";
import { auth0 } from '../utils/auth0';

const { authGuard } = auth0

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "Wallet",
        component: Calculator,
        beforeEnter: authGuard
      },
      // {
      //   path: "/calculator",
      //   name: "Calculator",
      //   component: Calculator,
      //   beforeEnter: auth0.authGuard
      // },
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
