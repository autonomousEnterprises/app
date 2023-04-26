// import { reactive } from 'vue'
// import { defineStore } from 'pinia';
// // import { Eco } from '@ecosis/eco';
//
// import EventEmitter from 'events'
// import { AsyncConstructor } from 'async-constructor'
// import { apiClient, cryptography, passphrase, transactions } from '@liskhq/lisk-client'
//
// const RPC_ENDPOINT = 'ws://localhost:8080/ws'
//
export class Eco {
  constructor() {

  }
}
// export class Eco extends AsyncConstructor {
//   initialized: boolean = false
//   endpoint: string = RPC_ENDPOINT
//   prefix: string = 'lsk'
//   client: any // TODO Interface
//   account: any // TODO Interface
//   // plugins: any[]
//   nomics: any // TODO Nomics Interface
//   events: any = new EventEmitter()
//   // bulk: any[]
//
//   constructor(config?: any) {
//     super(async () => {
//
//       if (config && config.endpoint) { this.endpoint = config.endpoint }
//       if (config && config.prefix) { this.prefix = config.prefix }
//       try {
//         this.client = await apiClient.createWSClient(this.endpoint)
//       } catch (error) {
//         this.emit('error', error)
//       }
//
//       this.emit('connected')
//     })
//
//     this.on('connected', () => {
//       console.log(`Connected with '${this.endpoint}'`);
//       this.initialized = true
//     })
//
//     // this.on('balance-fetched', async () => {
//     //   await this.fetchBalance()
//     // })
//
//     this.on('transferred', async (tx: any) => {
//       console.log(tx);
//       await this.fetchBalance()
//     })
//
//     this.on('error', (err: any) => {
//       console.log(err);
//     })
//   }
//
//   on(event: string, payload: any) {
//     this.events.on(event, payload)
//   }
//
//   emit(event: string, data?: any) {
//     this.events.emit(event, data || undefined)
//   }
//
//   async fetchAccount(address: string) {
//     try {
//       const res = await this.client.account.get(cryptography.getAddressFromBase32Address(address))
//       return JSON.parse(JSON.stringify(res, (_, v) => typeof v === 'bigint' ? v.toString() : v))
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   async validateAccount(address: string) {
//     try {
//       return cryptography.validateLisk32Address(address, this.prefix)
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   async createWallet() {
//     try {
//       const pass = passphrase.Mnemonic.generateMnemonic()
//       const keys = cryptography.getPrivateAndPublicKeyFromPassphrase(pass)
//       return this.account = {
//         address: cryptography.getBase32AddressFromPassphrase(pass),
//         binaryAddress: cryptography.getAddressFromPassphrase(pass).toString('hex'),
//         passphrase: pass,
//         publicKey: keys.publicKey.toString('hex'),
//         privateKey: keys.privateKey.toString('hex'),
//         balance: 0,
//         transactions: []
//       }
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   async importWallet(passphrase: string) {
//     try {
//       const { publicKey, privateKey } = cryptography.getPrivateAndPublicKeyFromPassphrase(passphrase)
//       const address = cryptography.getLisk32AddressFromPassphrase(passphrase, this.prefix)
//
//       return this.account = {
//         address: cryptography.getLisk32AddressFromPassphrase(passphrase, this.prefix),
//         binaryAddress: cryptography.bufferToHex(cryptography.getAddressFromLisk32Address(address, this.prefix)),
//         passphrase:  passphrase,
//         publicKey:  cryptography.bufferToHex(publicKey),
//         privateKey: cryptography.bufferToHex(privateKey),
//         balance: 0,
//         transactions: []
//       }
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   async fetchBalance(address?: string) { // TODO
//     try {
//       const res = await this.fetchAccount(address || this.account.address)
//
//       if (res.token.balance !== 0) {
//         const balance = this.convertBeddowsToLSK(res.token.balance)
//         this.emit('balance-fetched', balance)
//
//         return balance
//       } else {
//         return 0
//       }
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   async fetchTransactions () {
//     try {
//       return // TODO
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   async transfer(recipientAddress: string, amount: string, message?: string, bulk?: boolean) {
//     try {
//       let nonce = undefined
//       const address = cryptography.getAddressFromBase32Address(recipientAddress)
//
//       if (bulk) {
//         // const account = await this.fetchAccount(this.account.address)
//         //
//         // let num = Number(account.sequence.nonce) + 1
//         //
//         // nonce = BigInt(Number(account.sequence.nonce) + 1)
//         // console.log(num);
//         //
//         // this.manageBulk(this.account.address, Number(account.sequence.nonce))
//       }
//
//       const tx = await this.client.transaction.create({
//         moduleID: 2,
//         assetID: 0,
//         nonce,
//         fee: BigInt(transactions.convertLSKToBeddows('0.01')), // TODO build in a Fee Calc
//         asset: {
//             amount: BigInt(transactions.convertLSKToBeddows(amount)),
//             recipientAddress: address,
//             data: message || ''
//         }
//       }, this.account.passphrase)
//
//       const res = await this.client.transaction.send(tx)
//
//       this.emit('transferred', res)
//       await this.fetchBalance()
//       // return res
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
//
//   // manageBulk(account: any, nonce: any) {
//   //   const res = this.bulk.find(b => b.account)
//   //   if (!res) {
//   //     this.bulk.push({
//   //       account,
//   //       nonce: nonce + 1
//   //     })
//   //   } else {
//   //     return res.nonce + 1
//   //   }
//   // }
//
//   convertLSKToBeddows(amount: string) {
//     return transactions.convertLSKToBeddows(amount)
//   }
//
//   convertBeddowsToLSK(amount: string) {
//     return transactions.convertBeddowsToLSK(amount)
//   }
//
//   // addPlugin(plugin: any) { // TODO Finalize & Plugin Interface
//   //   this.plugins.push(plugin)
//   // }
// }
//
//
// export const eco = reactive(new Eco())
