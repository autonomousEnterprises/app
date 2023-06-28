import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notifications';
// import { useUserStore } from './user';
import { getTokens } from '../session';

const notificationStore = useNotificationStore()
// const userStore = useUserStore()

export const useWalletStore = defineStore('wallet', () => {
  const tokens = ref([])

  async function fetchWallets(user) {
    tokens.value = await getTokens(user)
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

  return { tokens, addWallet, fetchWallets }
})
