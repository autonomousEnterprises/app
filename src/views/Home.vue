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
</script>

<template>
  <main class="flex flex-col justify-center overflow-scroll">

    <div class="flex justify-center p-4 w-full">
      <RouterLink class="btn btn-wide btn-neutral" to="deployer">Deploy Token</RouterLink>
    </div>


    <div class="flex flex-col justify-center w-full card bg-base-100 shadow">
      <div class="text-center p-4 w-full flex justify-center">
        <Building2 class="mr-2 mt-4"/>
        <h2>Your Tokens</h2>
      </div>
      <Marketplace/>
    </div>
  </main>
</template>
