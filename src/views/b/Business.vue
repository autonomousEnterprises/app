<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';
import { useBusinessStore } from '../../stores/businesses';

const route = useRoute()

const businessStore = useBusinessStore()
const business = businessStore.businesses.find(b => b.id === route.params.business)
</script>

<template>
  <div class="">
    <div class="w-screen h-64 bg-base-200">
      <!-- <img src="@/assets/svg/pattern.svg" class="w-full h-64 repeat"> -->
    </div>
    <main class="justify-start">
      <section class="px-4">
        <div class="avatar -mt-32">
          <div class="mask mask-squircle w-32 h-32">
            <img :src="`https://api.dicebear.com/6.x/shapes/svg?seed=${business.name}`" alt="Logo" />
          </div>
        </div>
        <div class="">
          <h1 class="!text-left">{{ business.name }}</h1>
          <h2 class="!text-left !font-normal !italic -mt-8">{{ business.tagline }}</h2>
          <div class="">
            <span class="mr-4">@{{ business.id }}</span>
            <span>Token: {{ business.token }}</span>
          </div>
          <div class="">
            <p>{{ business.description }}</p>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  </div>
</template>
