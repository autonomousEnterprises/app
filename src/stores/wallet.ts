import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useNotificationStore } from './notifications';

const notificationStore = useNotificationStore()

export const useWalletStore = defineStore('wallet', () => {
  const wallets = ref([])

  function addWallet(wallet) {
    wallets.value.push(wallet)
    notificationStore.addNotification({
      type: 'info',
      msg: 'New Wallet added'
    })
  }

  return { wallets, addWallet }
})