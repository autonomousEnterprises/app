import EventEmitter from 'events'
import { AsyncConstructor } from 'async-constructor'
import { apiClient, cryptography, passphrase, transactions } from '@liskhq/lisk-client'

const RPC_ENDPOINT = 'ws://localhost:8080/ws'

// class Account { // TODO
//   constructor(data) {
//     address: data
//     binaryAddress: data
//     passphrase: data
//     publicKey: data
//     privateKey: data
//     amount: data
//     transactions: data
//   }
// }

// class Nomics {
//   constructor(node: string) {
//
//   }
// }

export default class Eco extends AsyncConstructor {
  initialized: boolean = false
  endpoint: string = RPC_ENDPOINT
  prefix: string = 'lsk'
  client: any // TODO Interface
  account: any // TODO Interface
  plugins: any[] = []
  nomics: any // TODO Nomics Interface
  events: any = new EventEmitter()

  constructor(endpoint?: string, prefix?: string) {
    super(async () => {

      if (endpoint) { this.endpoint = endpoint }
      if (prefix) { this.prefix = prefix }
      try {
        this.client = await apiClient.createWSClient(this.endpoint)
      } catch (error) {
        throw new Error(error)
      }

      const passphrase = localStorage.getItem('passphrase') || null
      if (passphrase) {
        await this.importWallet(passphrase)
        await this.fetchBalance()
        this.emit('balanced-fetched')
      }

      this.emit('connected')
    })

    this.on('connected', () => {
      console.log(`Connected with '${this.endpoint}'`);
      this.initialized = true
    })

    this.on('transferred', async (tx: any) => {
      console.log(tx);
      await this.fetchBalance()
    })
  }

  on(event: string, payload: any) {
    this.events.on(event, payload)
  }

  emit(event: string, data?: any) {
    this.events.emit(event, data || undefined)
  }

  async fetchAccount(address: string) {
    try {
      const res = await this.client.account.get(cryptography.getAddressFromBase32Address(address))
      return JSON.parse(JSON.stringify(res, (_, v) => typeof v === 'bigint' ? v.toString() : v))
    } catch (error) {
      throw new Error(error)
    }
  }

  async validateAccount(address: string) {
    try {
      return cryptography.validateLisk32Address(address, this.prefix)
    } catch (error) {
      throw new Error(error)
    }
  }

  async createWallet() {
    try {
      const pass = passphrase.Mnemonic.generateMnemonic()
      const keys = cryptography.getPrivateAndPublicKeyFromPassphrase(pass)
      return this.account = {
        address: cryptography.getBase32AddressFromPassphrase(pass),
        binaryAddress: cryptography.getAddressFromPassphrase(pass).toString('hex'),
        passphrase: pass,
        publicKey: keys.publicKey.toString('hex'),
        privateKey: keys.privateKey.toString('hex'),
        balance: 0,
        transactions: []
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async importWallet(passphrase: string) {
    try {
      const { publicKey, privateKey } = cryptography.getPrivateAndPublicKeyFromPassphrase(passphrase)
      const address = cryptography.getLisk32AddressFromPassphrase(passphrase, this.prefix)

      return this.account = {
        address: cryptography.getLisk32AddressFromPassphrase(passphrase, this.prefix),
        binaryAddress: cryptography.bufferToHex(cryptography.getAddressFromLisk32Address(address, this.prefix)),
        passphrase:  passphrase,
        publicKey:  cryptography.bufferToHex(publicKey),
        privateKey: cryptography.bufferToHex(privateKey),
        balance: 0,
        transactions: []
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async fetchBalance(address?: string) {
    try {
      const res = await this.fetchAccount(address || this.account.address)

      if (res.token.balance !== 0) {
        return this.account.balance = this.convertBeddowsToLSK(res.token.balance)
      } else {
        return 0
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async fetchTransactions () {
    try {
      return // TODO
    } catch (error) {
      throw new Error(error)
    }
  }

  async transfer(recipientAddress: string, amount: string, message?: string) {
    try {
      const address = cryptography.getAddressFromBase32Address(recipientAddress)

      const tx = await this.client.transaction.create({
        moduleID: 2,
        assetID: 0,
        fee: BigInt(transactions.convertLSKToBeddows('0.01')), // TODO build in a Fee Calc
        asset: {
            amount: BigInt(transactions.convertLSKToBeddows(amount)),
            recipientAddress: address,
            data: message || ''
        }
      }, this.account.passphrase)

      const res = await this.client.transaction.send(tx)

      this.emit('transferred', res)
      return res
    } catch (error) {
      throw new Error(error)
    }
  }

  convertLSKToBeddows(amount: string) {
    return transactions.convertLSKToBeddows(amount)
  }

  convertBeddowsToLSK(amount: string) {
    return transactions.convertBeddowsToLSK(amount)
  }

  addPlugin(plugin: any) { // TODO Plugin Interface
    this.plugins.push(plugin)
  }
}
