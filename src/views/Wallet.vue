<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import BusinessList from '../components/BusinessList.vue'

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
    <section class="flex flex-col justify-center">
      <div class="stats stats-vertical lg:stats-horizontal bg-base-100 text-primary-content">

        <div class="stat">
          <div class="stat-title">Account balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title">Current balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm">Withdrawal</button>
            <button class="btn btn-sm">deposit</button>
          </div>
        </div>

      </div>
      <div class="stats shadow mt-8">

        <div class="stat place-items-center">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">From January 1st to February 1st</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Users</div>
          <div class="stat-value text-secondary">4,200</div>
          <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>

      </div>
    </section>
  </main>
</template>
