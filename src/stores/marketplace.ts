import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMarketplaceStore = defineStore('marketplace', () => {
  const businesses = ref([
    {
      name: 'eLabs',
      tagline: 'ecosis Laboratories',
      url: 'https://elabs.enterprises',
      logo: '',
      model: 'Grants',
      solution: 'R&D',
      token: 'ELABS'
    },
    {
      name: 'ecosis Pro',
      tagline: 'ecosis on Steriods',
      url: 'https://ecosis.pro',
      logo: '',
      model: 'Subscription-based',
      solution: 'ecosis Extentions',
      token: 'EPRO'
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
      model: 'Performance-based',
      solution: 'Decentralised Asset Management',
      token: 'ECAP'
    },
  ])

  function addbusiness(business) {
    businesses.value.push(business)
  }

  return { businesses, addbusiness }
})
