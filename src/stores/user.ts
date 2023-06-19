import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
// import { useNotificationStore } from './notifications';  

// const notificationStore = useNotificationStore() 

export const useUserStore = defineStore('user', () => {
  const authenticated = ref(false)

  function fetchUserData() {
    // TODO
  }

  function login(wallet) {
    authenticated.value = true
  }

  function logout(wallet) {
    authenticated.value = false
  }

  return { authenticated, fetchUserData, login, logout }
})
