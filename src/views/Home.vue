<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import BusinessList from '../components/BusinessList.vue'
import { useNotificationStore } from '../stores/notifications';

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

const branding = ref({
  name: '',
  tagline: '',
  url: '',
  category: 'Community Pool',
  model: '',
})

const listing = ref(false)
</script>

<template>
  <main class="flex flex-wrap justify-center overflow-scroll">
    <div class="text-center p-4 w-full">
      <h1>Network Performance</h1>
    </div>
    <div class="stats stats-vertical lg:stats-horizontal hadow m-4 card w-96 bg-base-100 p-4 m-2">
      <div class="stat place-items-center">
        <div class="stat-title">Users</div>
        <div class="stat-value text-success">70</div>
        <div class="stat-desc text-success">↗︎ 40 (2%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Waitlist</div>
        <div class="stat-value text-success">123</div>
        <div class="stat-desc text-success">↗︎ 122 (14%)</div>
        <!-- <div class="stat-desc">↘︎ 90 (14%)</div> -->
      </div>
    </div>

    <div class="stats shadow m-4 card w-96 bg-base-100 p-4 m-2">
      <div class="stat place-items-center">
        <div class="stat-title">Created Organisations</div>
        <div class="stat-value">5+</div>
        <div class="stat-desc">Testnet</div>
      </div>
    </div>

    <div class="flex justify-center p-4 w-full">
      <RouterLink class="btn btn-wide btn-neutral" to="create">Create an Organisation</RouterLink>
    </div>


    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">You have no created businesses or joined any. </p>
        <button class="btn btn-primary" @click="">Get Started</button>
      </div>
    </div>
    <!-- <div class="flex justify-center p-4 w-full">
      <BusinessList/>
    </div> -->
  </main>
</template>
