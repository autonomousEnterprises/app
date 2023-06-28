import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notifications';
import { useWalletStore } from './wallet';
import { useUserStore } from './user';
import { deployToken } from '../session';
import { useAuth0 } from '@auth0/auth0-vue';

const notificationStore = useNotificationStore()
const walletStore = useWalletStore()
// const userStore = useUserStore()


export const useDeployerStore = defineStore('deployer', () => {

  const { user } = useAuth0();

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

      const data = await deployToken(user.value.email, token.value.name, token.value.symbol, token.value.supply, token.value.fee)
      console.log(data);

      notificationStore.addNotification({
        type: 'success',
        msg: 'Successfully deployed!'
      })

      walletStore.addWallet({
        tokenId: data.tokenId,
        tokenName: data.tokenName,
        tokenSymbol: data.tokenSymbol,
        balance: data.balance,
        publicKey: data.publicKey,
        privateKey: data.privateKey, // TODO Crypto Store & Export Option
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
