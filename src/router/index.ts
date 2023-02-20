import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/SideMenu/SideMenu.vue";
// import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
// import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import Wallet from "../pages/Wallet.vue";
import Login from "../pages/Login.vue";
import Transaction from "../pages/Transaction.vue";

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "Wallet",
        component: Wallet,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: Transaction,
  },
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
