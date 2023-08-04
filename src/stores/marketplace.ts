import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { instance } from '../session';

export const useMarketplaceStore = defineStore('marketplace', () => {

  const businesses = ref([
    {
      name: 'eLabs',
      symbol: 'ELABS',
      totalSupply: 3000000,
      transactionFee: 1,
      vm: 'ELABS'
    },
    {
      name: 'ecosis Tech',
      symbol: 'ETECH',
      totalSupply: 25000,
      transactionFee: 0,
      vm: 'ELABS'
    },
    {
      name: 'ecosis Network',
      symbol: 'NOMICS',
      totalSupply: 128000,
      transactionFee: 0.1,
      vm: 'ELABS'
    },
  ])

  const tokens = ref([])

  function addbusiness(business) {
    businesses.value.push(business)
  }

  async function fetchTokens() {

  }

  return { businesses, addbusiness }
})
