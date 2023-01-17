import { apiClient, cryptography, passphrase, transactions } from "@liskhq/lisk-client";
const RPC_ENDPOINT = 'ws://localhost:8080/ws';

let clientCache;

export const getClient = async () => {
    if (!clientCache) {
        clientCache = await apiClient.createWSClient(RPC_ENDPOINT);
    }
    return clientCache;
};

export const fetchAccountInfo = async (address) => {
  console.log(address);

    const client = await getClient();
    const res = await client.account.get(cryptography.getAddressFromBase32Address(address));
    console.log(res);

    return JSON.stringify(res, (_, v) => typeof v === 'bigint' ? v.toString() : v)
};

export const createWallet = () => {
  const pass = passphrase.Mnemonic.generateMnemonic();
  const keys = cryptography.getPrivateAndPublicKeyFromPassphrase(pass);
  return {
    address: cryptography.getBase32AddressFromPassphrase(pass),
    binaryAddress: cryptography.getAddressFromPassphrase(pass).toString("hex"),
    passphrase: pass,
    publicKey: keys.publicKey.toString("hex"),
    privateKey: keys.privateKey.toString("hex")
  };
};

export const transfer = async (recipientAddress, amount) => {
  console.log(recipientAddress);
  await getClient()

  const address = cryptography.getAddressFromBase32Address(recipientAddress);

  const tx = await clientCache.transaction.create({
    moduleID: 2,
    assetID: 0,
    fee: BigInt(transactions.convertLSKToBeddows('0.01')), // TODO build in a Fee Calc
    asset: {
        amount: BigInt(transactions.convertLSKToBeddows(amount)),
        recipientAddress: address,
        data: 'Happy birthday!'
    }
  }, mnemonic);

  console.log(tx);
  return tx;
}

export const convert = {
  LSKToBeddows: (amount) => BigInt(transactions.convertLSKToBeddows(amount)),
  BeddowsToLSK: (amount) => BigInt(transactions.convertBeddowsToLSK(amount))
}
const mnemonic = 'token width column company slab palace eternal ostrich domain now pitch swamp'
// 6be6e2cc844bf33235472170d48edbe14c4b4fb9
// lsk98t7mtpp48atp96npm294cesjmbpetha9am5oo

// Address: lskwomwcn7w2hqzwe6kqp87p3f2dd6z8ykbqwufjg
// Binary Address: bb0b719dd7c76a0bd954a91ee223d8d69407c686
// Passphrase: wool grace mimic dad satisfy smart effort divorce toast lawsuit fog bleak
// PrivateKey: 20621ba4cd58733ce0ce90f62e20a8d34c2b74f4872b2c3d6a4922034e5f5926417c4e250610eebc69ea57ad7b492053d065f2c9219d8338c92537850a727e44
// PublicKey: 417c4e250610eebc69ea57ad7b492053d065f2c9219d8338c92537850a727e44
