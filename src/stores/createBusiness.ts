import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useNotificationStore } from './notifications';
import { useWalletStore } from './wallet';

const notificationStore = useNotificationStore()
const walletStore = useWalletStore()

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const useCreateBusinessStore = defineStore('createBusiness', () => {
  const branding = ref({

  })

  const token = ref({
    // name
    // symbol
    // supply
    // fee
  })

  function deployBusiness() {
    try {

    } catch (error) {
      throw new Error(error)
    }
    // brandinges.value.push(branding)
  }

  async function deployToken() {
    try {
      const res = await instance.post('/create', token)
      notificationStore.addNotification({
        type: 'success',
        msg: 'Successfully deployed!'
      })
      console.log(res);

      walletStore.addWallet(res.data.genesisWallet)
    } catch (error) {
      notificationStore.addNotification({
        type: 'error',
        msg: error
      })
    }
  }

  function deploy() {
    deployBusiness()
    deployToken()
  }

  return { branding, token, deployBusiness, deployToken, deploy }
})
