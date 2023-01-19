import { reactive } from 'vue'
import { defineStore } from "pinia";
import Eco from "../utils/eco";

// interface NomicsState {
//   darkModeValue: boolean;
// }

export const eco = reactive(new Eco())
//
// export const useEcoStore = defineStore("ecoStore", {
//   state: () => ({
//     initialized: false,
//     eco: {}
//   }),
//   // getters: {
//   //   async getClient(state) {
//   //     if (this.state.client) {
//   //       return state.client
//   //     } else {
//   //       throw new Error('Client is not connected')
//   //     }
//   //   }
//   // },
//   actions: {
//     async init() {
//       try {
//         this.eco = await new Eco()
//         this.initialized = true
//       } catch (error) {
//         throw new Error(error)
//       }
//     },
//     async fetchAccount(address: string) {
//       try {
//         return await this.eco.fetchAccount(address)
//       } catch (error) {
//         throw new Error(error)
//       }
//     },
//     async validateAccount(address: string) {
//       try {
//         return this.eco.validateAccount(address)
//       } catch (error) {
//         throw new Error(error)
//       }
//     },
//     async createAccount() {
//       try {
//         return this.eco.createWallet()
//       } catch (error) {
//         throw new Error(error)
//       }
//     },
//     async importAccount(passphrase: string) {
//       try {
//         return this.eco.importWallet(passphrase)
//       } catch (error) {
//         throw new Error(error)
//       }
//     },
//     async fetchBalance(address?: string) {
//       try {
//         return this.eco.fetchBalance(address)
//       } catch (error) {
//         throw new Error(error)
//       }
//     },
//     async transfer(recipientAddress, amount) {
//       console.log(amount);
//
//       try {
//         return this.eco.transfer(recipientAddress, amount)
//       } catch (error) {
//         throw new Error(error)
//       }
//     }
//   },
// });
