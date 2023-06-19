import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useNotificationStore } from './notifications';

const notificationStore = useNotificationStore()

export const useWalletStore = defineStore('wallet', () => {
  const wallets = ref([])

  function fetchWallets() {
    // TODO
  }

  function addWallet(wallet) {
    wallets.value.push(wallet)
    notificationStore.addNotification({
      type: 'info',
      msg: 'New wallet added'
    })
  }

  return { wallets, addWallet }
})
