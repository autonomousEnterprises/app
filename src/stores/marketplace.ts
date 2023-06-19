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
      vm: 'Nomics',
      model: 'Grants',
      solution: 'R&D',
      description: 'Get grants and bounties for Research and Development within the network.',
      cta: '',
      banner: '',
      logo: ''
    },
    {
      id: 'ecosis',
      name: 'ecosis Network',
      tagline: 'Awesome Ecosystem',
      domain: 'ecosis.Network',
      token: 'NOMICS',
      vm: 'Nomics',
      model: 'SaaS',
      solution: 'Interoperable Smart Contract Platform',
      description: 'Deploy Smart Contracts by using the NOMICS Token.',
      cta: '',
      banner: '',
      logo: ''
    },
    {
      id: 'ecoTech',
      name: 'ecosis Tech',
      tagline: 'Awesome Technologies',
      domain: 'ecosis.tech',
      token: 'ETECH',
      vm: 'Nomics',
      model: 'Agency',
      solution: 'Technology component development like automations, custom GPTs and AI agents, smart contracts, and Nodejs applications',
      description: 'Empowering Businesses with Tailored Full-Stack Node.js Solutions.',
      features: {
        heading: 'Transformative Services for Modern Enterprises',
        content: 'Our dynamic approach to development focuses on enabling businesses to excel in their respective fields. We specialize in creating high-performance Node.js applications that integrate seamlessly with third-party platforms. Moreover, we offer bespoke services in setting up containers for custom ChatGPT, online shops, business automation tools, and more.',
        list: [
          { heading: 'Node.js Full-stack Development', description: 'Expertly-crafted, powerful full-stack solutions centered around Node.js, enhancing business efficiency and scalability.' },
          { heading: 'Custom ChatGPT Container Setup', description: 'Tailor-made ChatGPT solutions encapsulated in robust containers, facilitating AI-driven interactions and services.' },
          { heading: 'Online Shop Development', description: 'Engaging, user-centric online shops optimized for business growth and customer satisfaction..' },
          { heading: 'Business Automation', description: 'Automating marketing and content creation to propel businesses into a future of streamlined operations.' },
          { heading: 'Prompt Engineering for GPT Instances:', description: 'Harness the power of generative pre-training with our precise and creative prompt engineering services.' },
        ],
      },
      cta: '',
      banner: 'https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      logo: '',
      social: [
        'https://linkedin.com/in/'
      ]
    },
    {
      id: 'ecoPro',
      name: 'ecosis Pro',
      tagline: 'ecosis on Steriods',
      domain: 'ecosis.pro',
      token: 'EPRO',
      vm: 'Nomics',
      model: 'Subscription-based',
      solution: 'ecosis Extentions',
      description: 'Use GPT Agents within your business` Smart Contract by subscribing to the EPRO token.',
      cta: 'Subscripe',
      banner: '',
      logo: ''
    },
    {
      id: 'ecoShop',
      name: 'ecosis Shop',
      tagline: 'Rewarding Marketplace',
      domain: 'ecosis.shop',
      token: 'ESHOP',
      vm: 'Nomics',
      model: 'Transaction-based',
      solution: 'Decentralised E-Commmerce',
      description: 'Earn rewards for shopping within the ecosis marketplace.',
      cta: '',
      banner: '',
      logo: ''
    },
    {
      id: 'ecoFin',
      name: 'ecosis Finance',
      tagline: 'Boost Earnings',
      domain: 'ecosis.finance',
      token: 'EFIN',
      vm: 'Nomics',
      model: 'Transaction-based',
      solution: 'Decentralised Payment Solution',
      description: 'Get returns proportionally to your deposit and transaction volume made within the ecosystem',
      cta: 'Login, deposit funds, do payments and boost earnings',
      banner: '',
      logo: ''
    },
    {
      id: 'ecoCap',
      name: 'ecosis Capital',
      tagline: 'Intrinsic Autonomous Portfolio',
      domain: 'ecosis.capital',
      token: 'ECAP',
      vm: 'Nomics',
      model: 'Performance-based',
      solution: 'Decentralised Autonomous Asset & Investment Management',
      description: 'Lockup your funds and get returns from the system`s portfolio management.',
      cta: '',
      banner: '',
      logo: ''
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
