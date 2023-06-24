import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notifications';
import { useWalletStore } from './wallet';
import { instance } from '../session';

const notificationStore = useNotificationStore()
const walletStore = useWalletStore()

export const useDeployerStore = defineStore('deployer', () => {
  const token = ref({
    // url: '',
    // name: '',
    // symbol: '',
    // supply: '',
    // fee: '',
  })

  async function deploy() {
    try {
      if (!token.url, !token.value.name && !token.value.symbol && !token.value.supply && !token.value.fee) {
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
  
  return { branding, token, deployBusiness, deployToken, deploy }
})
