import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
// import { useNotificationStore } from './notifications';

// const notificationStore = useNotificationStore()

export const useUserStore = defineStore('user', () => {
  const authenticated = ref(false)

  const user = ref('')

  function fetchUserData() {
    // TODO
  }

  function login(mail) {
    user.value = mail
    authenticated.value = true
  }

  function logout(wallet) {
    authenticated.value = false
  }

  return { authenticated, fetchUserData, login, logout, user }
})
