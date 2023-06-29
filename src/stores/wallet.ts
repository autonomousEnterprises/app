import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notifications';
// import { useUserStore } from './user';
import { getTokens, sendTokens } from '../session';

import { useAuth0 } from '@auth0/auth0-vue';

const notificationStore = useNotificationStore()
// const userStore = useUserStore()

export const useWalletStore = defineStore('wallet', () => {

  const { user } = useAuth0();

  const tokens = ref([])

  async function fetchWallets() {
    try {
      tokens.value = await getTokens(user.value.email)
    } catch (error) {
      notificationStore.addNotification({
        type: 'error',
        msg: error
      })
    }
  }

  function addWallet(wallet) {
    tokens.value.push(wallet)
    notificationStore.addNotification({
      type: 'info',
      msg: 'New wallet added'
    })
  }

  function exportWallet(password: string) {
    // TODO
  }

  function importWallet(token: string) {
    // TODO
  }

  async function transfer(email: string, amount: number, token: any) {
    try {
      return await sendTokens(user.value.email, email, amount, token)
      notificationStore.addNotification({
        type: 'success',
        msg: `Token transferred to ${email}`
      })
    } catch (error) {
      notificationStore.addNotification({
        type: 'error',
        msg: error
      })
    }
  }

  return { tokens, addWallet, fetchWallets, transfer }
})
