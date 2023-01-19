<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
import { eco } from "./stores/eco";

const router = useRouter()

onBeforeMount(() => { // TODO Facelift
  if (!eco.initialized && !eco.account) {
    router.push('login')
  }
  if (localStorage.getItem('passphrase')) {
    eco.importWallet(localStorage.getItem('passphrase'))
  }
})
</script>

<template>
  <RouterView />
</template>
