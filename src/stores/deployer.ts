import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notifications';
import { useWalletStore } from './wallet';
import { useUserStore } from './user';
import { deployToken } from '../session';
import { useAuth0 } from '@auth0/auth0-vue';

const notificationStore = useNotificationStore()
const walletStore = useWalletStore()
const userStore = useUserStore()


export const useDeployerStore = defineStore('deployer', () => {

  // const { user } = useAuth0();

  const token = ref({
    name: '',
    symbol: '',
    supply: '',
    fee: '',
  })

  async function deploy() {
    try {
      if (!token.value.name && !token.value.symbol && !token.value.supply && !token.value.fee) {
        throw new Error('Please fill all token parameter!')
      }

      const data = await deployToken(userStore.user.email, token.value.name, token.value.symbol, token.value.supply, token.value.fee)

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
      if (error instanceof Error) {
        notificationStore.addNotification({
          type: 'error',
          msg: error.message
        });
        console.log(error.message);
      } else {
        notificationStore.addNotification({
          type: 'error',
          msg: error
        });
      };
    };
  };

  return { token, deploy }
});
