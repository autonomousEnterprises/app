import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { instance } from '../session';

export const useMarketplaceStore = defineStore('marketplace', () => {

  const businesses = ref([
    {
      id: 'elabs',
      name: 'eLabs',
      tagline: 'ecosis Laboratories',
      domain: 'elabs.enterprises',
      token: 'ELABS',
      model: 'Grants',
      solution: 'R&D',
      description: 'Researches and develops ecosis network related stuff',
      logo: '',
    },
    {
      id: 'ecosis',
      name: 'ecosis Network',
      tagline: 'Awesome Ecosystem',
      domain: 'ecosis.Network',
      token: 'NOMICS',
      model: 'SaaS',
      solution: 'Interoperable Smart Contract Platform',
      description: 'Researches and develops ecosis network related stuff',
      logo: '',
    },
    {
      id: 'ecoPro',
      name: 'ecosis Pro',
      tagline: 'ecosis on Steriods',
      domain: 'ecosis.pro',
      token: 'EPRO',
      model: 'Subscription-based',
      solution: 'ecosis Extentions',
      description: 'Researches and develops ecosis network related stuff',
      logo: '',
    },
    {
      id: 'ecoShop',
      name: 'ecosis Shop',
      tagline: 'Rewarding Marketplace',
      domain: 'ecosis.shop',
      token: 'ESHOP',
      model: 'Transaction-based',
      solution: 'Decentralised E-Commmerce',
      description: 'Researches and develops ecosis network related stuff',
      logo: '',
    },
    {
      id: 'ecoFin',
      name: 'ecosis Finance',
      tagline: 'Boost Earnings',
      domain: 'ecosis.finance',
      token: 'EFIN',
      model: 'Transaction-based',
      solution: 'Decentralised Payment Solution',
      description: 'Researches and develops ecosis network related stuff',
      logo: '',
    },
    {
      id: 'ecoCap',
      name: 'ecosis Capital',
      tagline: 'Intrinsic Autonomous Portfolio',
      domain: 'ecosis.capital',
      token: 'ECAP',
      model: 'Performance-based',
      solution: 'Decentralised Asset Management',
      description: 'Researches and develops ecosis network related stuff',
      logo: '',
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
