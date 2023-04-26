<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
// import { useAuth0 } from '@auth0/auth0-vue';
import { auth0 } from './utils/auth0';
// import { eco } from "./stores/eco";

const router = useRouter()
const { isLoading, isAuthenticated } = auth0

onBeforeMount(() => {
  if (!isAuthenticated) {
    router.push('/login')
  }
  // eco.on('connected', () => {
  //   if (!eco.account) {
  //     router.push('login')
  //   }
  // })
  // eco.on('error', (e: any) => {
  //   alert(e)
  // })
})
</script>

<template>
  <RouterView v-if="!isLoading"/>
</template>
