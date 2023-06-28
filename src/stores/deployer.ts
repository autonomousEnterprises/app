import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notifications';
import { useWalletStore } from './wallet';
import { useUserStore } from './user';
import { deployToken } from '../session';

const notificationStore = useNotificationStore()
const walletStore = useWalletStore()
const userStore = useUserStore()

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

      const res = await deployToken(token.value.name, token.value.symbol, token.value.totalSupply, token.value.transactionFee)

      notificationStore.addNotification({
        type: 'success',
        msg: 'Successfully deployed!'
      })

      walletStore.addWallet({
        tokenName: res.data.tokenName,
        tokenSymbol: res.data.tokenSymbol,
        balance: res.data.balance,
        address: res.data.publicKey,
        key: res.data.privateKey,
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

  return { token, deploy }
})
