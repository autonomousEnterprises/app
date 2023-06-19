<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  CandlestickChart,
  Building2,
  User
} from 'lucide-vue-next';
import Marketplace from '../components/Marketplace.vue'
import { useNotificationStore } from '../stores/notifications';
import { useMarketplaceStore } from '../stores/marketplace';

const marketplaceStore = useMarketplaceStore()
const notificationStore = useNotificationStore()

const createBusiness = ref(false)
const tokenise = ref(false)
const enableVM = ref(false)
const assistance = ref(false)
const autoBranding = ref(false)
const autoMarketNiche = ref(false)
const autoBusinessModel = ref(false)
const autoProductDesign = ref(false)
const autopilot = ref(false)

const branding = ref({})

const listing = ref(false)
</script>

<template>
  <main class="flex flex-col justify-center overflow-scroll">
    <div class="text-center p-4 w-full flex justify-center">
      <CandlestickChart class="mr-2 mt-5"/>
      <h1>Network Performance</h1>
    </div>
    <div class="w-full flex justify-center">
      <select class="select select-bordered select-md w-full max-w-xs">
        <option selected>Nomics</option>
        <option disabled>More soon</option>
      </select>
    </div>
    <div class="flex flex-wrap justify-center">
      <div class="stats shadow stats-vertical hadow m-4 card w-96 bg-base-100 p-4 m-2 flex">
        <div class="stat place-items-center">
          <div class="stat-title">Users</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Waitlist</div>
          <div class="stat-value text-success">123</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
          <!-- <div class="stat-desc">↘︎ 90 (14%)</div> -->
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Organisations</div>
          <div class="stat-value text-success">{{ marketplaceStore.businesses.length }}</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
          <div class="stat-desc">Testnet</div>
        </div>
      </div>

      <div class="stats shadow stats-vertical shadow m-4 card w-96 bg-base-100 p-4 m-2 flex2">
        <div class="stat place-items-center">
          <div class="stat-title">Total Transaction Volume</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Total Deposit Volume</div>
          <div class="stat-value text-success">123</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
          <!-- <div class="stat-desc">↘︎ 90 (14%)</div> -->
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-center">
      <div class="text-center p-4 w-full flex justify-center">
        <User class="mr-2 mt-5"/>
        <h1>Your Performance</h1>
      </div>
      <div class="stats shadow stats-vertical lg:stats-horizontal shadow m-4 card w-96 bg-base-100 p-4 m-2 flex2 w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Rank</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Reputation</div>
          <div class="stat-value text-success">123</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
          <!-- <div class="stat-desc">↘︎ 90 (14%)</div> -->
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Follower</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Total Transaction Volume</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Total Deposit Volume</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>
      </div>
      <RouterLink class="btn btn-wide btn-standard" to="deployer">Invite & earn rewards</RouterLink>
    </div>

    <div class="flex justify-center p-4 w-full">
      <RouterLink class="btn btn-wide btn-neutral" to="deployer">Create an Organisation</RouterLink>
    </div>


    <!-- <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">You have no created businesses or joined any. </p>
        <button class="btn btn-primary" @click="">Get Started</button>
      </div>
    </div> -->

    <div class="flex flex-col justify-center w-full card bg-base-100 shadow">
      <div class="text-center p-4 w-full flex justify-center">
        <Building2 class="mr-2 mt-4"/>
        <h2>Your Businesses</h2>
      </div>
      <Marketplace/>
    </div>

    <div class="flex flex-col justify-center w-full card bg-base-100 shadow mt-8">
      <div class="text-center p-4 w-full flex justify-center">
        <Building2 class="mr-2 mt-4"/>
        <h2>Marketplace</h2>
      </div>
      <Marketplace/>
    </div>
  </main>
</template>
