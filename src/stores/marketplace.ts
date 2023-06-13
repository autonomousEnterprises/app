import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMarketplaceStore = defineStore('marketplace', () => {
  const businesses = ref([
    {
      name: 'ecosis Finance',
      tagline: 'Boost Earnings',
      url: 'https://ecosis.finance',
      logo: '',
      model: 'Transaction-based',
      solution: 'Decentralised Payment Solution',
      token: 'EFIN'
    },
    {
      name: 'ecosis Capital',
      tagline: 'Asset Management',
      url: 'https://ecosis.capital',
      logo: '',
      model: 'Asset-Management',
      solution: 'Decentralised Asset Management',
      token: 'ECAP'
    },
    {
      name: 'ecosis Shop',
      tagline: 'Rewarding Marketplace',
      url: 'https://ecosis.shop',
      logo: '',
      model: 'Transaction-based',
      solution: 'Decentralised E-Commmerce',
      token: 'ESHOP'
    },
  ])

  function addbusiness(business) {
    businesses.value.push(business)
  }

  return { businesses, addbusiness }
})
