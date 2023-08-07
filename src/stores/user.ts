import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { signup, signin } from '../session';
import { auth0 } from '../utils/auth';

// import { useNotificationStore } from './notifications';

// const notificationStore = useNotificationStore();

export const useUserStore = defineStore('user', () => {

  // const isAuthenticated = ref(false);
  // const user = ref('');
  const { isAuthenticated, user } = auth0;

  // const userMail = localStorage.getItem('user_mail')
  //
  // if (userMail) {
  //   user.value = userMail
  //   isAuthenticated.value = true
  // }

  async function register(email: string, password: string) {
    try {
      await signup(email, password)
      // localStorage.setItem('user_mail', mail)
      // user.value = email
      // isAuthenticated.value = true
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error.message
        // });
      } else {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error
        // });
      };
    };
  };

  async function login(email: string, password?: string) {
    try {
      // await signin(email, password)
      // localStorage.setItem('user_mail', mail)
      // user.value = email
      // isAuthenticated.value = true
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error.message
        // });
      } else {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error
        // });
      };
    };
  };

  async function updatePassword(newPassword: string, oldPassword: string) {
    // try {
    //
    // } catch (error) {
    //
    // }
  };

  function logout(wallet) {
    // localStorage.removeItem('user_mail')
    // isAuthenticated.value = false;
  };

  return { isAuthenticated, login, register, logout, user };
});
