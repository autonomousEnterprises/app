<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import {
  LayoutDashboard,
  PlusSquare,
  Wallet,
  Settings,
  LogOut
} from 'lucide-vue-next';
import { useThemeStore } from './stores/theme';
import { useNotificationStore } from './stores/notifications';
import { useUserStore } from './stores/user';

import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

const router = useRouter()
const themeStore = useThemeStore()
const notificationStore = useNotificationStore()
const userStore = useUserStore()

// const logout = () => {
//   userStore.logout()
//   router.push('/login')
// }

const getNotifcationType = (notificationType) => {
  if (notificationType === 'standard') {
    return 'bg-base-100';
  };
  if (notificationType === 'success') {
    return 'alert-success';
  };
  if (notificationType === 'warning') {
    return 'alert-warning';
  };
  if (notificationType === 'error') {
    return 'alert-error';
  };
}

onBeforeMount(() => {
  if (!isAuthenticated.value) {
    return router.push('/login')
  }
})
</script>

<template>
  <div class="min-h-screen w-full bg-base-300" :data-theme="themeStore.theme">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <!-- <div class="w-full navbar backdrop-blur-sm bg-base-100/50 shadow fixed z-40" v-if="userStore.authenticated"> -->
        <div class="w-full navbar backdrop-blur-sm bg-base-100/50 shadow fixed z-40" v-if="userStore.isAuthenticated">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">
            <img class="w-12 mr-4" src="@/assets/logo.svg">
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
              <li><RouterLink to="/"><LayoutDashboard/>Hub</RouterLink></li>
              <li><RouterLink to="/deployer"><PlusSquare/>Deploy</RouterLink></li>
              <li><RouterLink to="/wallet"><Wallet/>Wallet</RouterLink></li>
              <li><RouterLink to="/settings"><Settings/>Settings</RouterLink></li>
              <!-- <li class="tooltip tooltip-bottom" data-tip="Logout"><button @click="logout()"><LogOut/></button></li> -->
              <li class="tooltip tooltip-bottom" data-tip="Logout"><button @click="logout()"><LogOut/></button></li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <section class="flex justify-center overflow md:mt-12 z-0">
          <RouterView/>
        </section>
      </div>
      <div class="drawer-side z-50">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 h-full bg-base-200">
          <!-- Sidebar content here -->
            <li><RouterLink to="/"><LayoutDashboard/>Hub</RouterLink></li>
            <li><RouterLink to="/deployer"><PlusSquare/>Deploy</RouterLink></li>
            <li><RouterLink to="/wallet"><Wallet/>Wallet</RouterLink></li>
            <li><RouterLink to="/settings"><Settings/>Settings</RouterLink></li>
            <div class="divider"></div>
            <!-- <button class="btn btn-warning" @click="userStore.logout()" v-if="userStore.authenticated"><LogOut/>Logout</button> -->
            <button class="btn btn-warning" @click="logout()" v-if="userStore.isAuthenticated"><LogOut/>Logout</button>
        </ul>
      </div>

    </div>

    <!-- Notification Toasts -->
    <div class="toast toast-end">
      <div class="alert shadow" v-for="notification in notificationStore.notifications" :class="getNotifcationType(notification.type)" @click="notificationStore.closeNotification(notification)">
        <svg v-if="notification.type === 'info'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <svg v-if="notification.type === 'success'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <svg v-if="notification.type === 'warning'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <svg v-if="notification.type === 'error'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{{ notification.msg }}</span>
      </div>
    </div>

  </div>
</template>
<style scoped>

</style>
