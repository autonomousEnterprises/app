import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useNotificationStore } from './notifications';
import { useWalletStore } from './wallet';

const notificationStore = useNotificationStore()
const walletStore = useWalletStore()

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const useDeployerStore = defineStore('deployer', () => {
  const branding = ref({

  })

  const token = ref({
    // name: '',
    // symbol: '',
    // supply: '',
    // fee: '',
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
      if (!token.value.name && !token.value.symbol && !token.value.supply && !token.value.fee) {
        throw new Error('Please fill all token parameter!')
      }

      const res = await instance.post('/deploy', token)

      notificationStore.addNotification({
        type: 'success',
        msg: 'Successfully deployed!'
      })

      walletStore.addWallet({
        tokenName: res.data.genesisWallet.tokenName,
        tokenSymbol: res.data.genesisWallet.tokenSymbol,
        address: res.data.genesisWallet.address,
        balance: res.data.genesisWallet.balance
      })
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 403) {
        return notificationStore.addNotification({
          type: 'error',
          msg: 'Token already exists'
        })
      }

      notificationStore.addNotification({
        type: 'error',
        msg: error.message
      })
    }
  }

  function deploy() {
    deployBusiness()
    deployToken()
  }

  return { branding, token, deployBusiness, deployToken, deploy }
})
