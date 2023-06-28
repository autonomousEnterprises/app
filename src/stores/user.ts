import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { signup, signin } from '../session';
// import { useNotificationStore } from './notifications';

// const notificationStore = useNotificationStore()

export const useUserStore = defineStore('user', () => {
  const authenticated = ref(false)
  const user = ref('')

  // const userMail = localStorage.getItem('user_mail')
  //
  // if (userMail) {
  //   user.value = userMail
  //   authenticated.value = true
  // }

  async function register(email: string, password: string) {
    try {
      await signup(email, password)
      // localStorage.setItem('user_mail', mail)
      user.value = email
      authenticated.value = true
    } catch (error) {
      console.log(error)
      throw new Error(error)
      // notificationStore.addNotification({
      //   type: 'error',
      //   msg: error
      // })
    }
  }

  async function login(email: string, password: string) {
    try {
      await signin(email, password)
      // localStorage.setItem('user_mail', mail)
      user.value = email
      authenticated.value = true
    } catch (error) {
      console.log(error)
      throw new Error(error)
      // notificationStore.addNotification({
      //   type: 'error',
      //   msg: error
      // })
    }
  }

  async function updatePassword(newPassword: string, oldPassword: string) {
    // try {
    //
    // } catch (error) {
    //
    // }
  }

  function logout(wallet) {
    // localStorage.removeItem('user_mail')
    authenticated.value = false
  }

  return { authenticated, login, register, logout, user }
})
