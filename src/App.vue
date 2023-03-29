<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
import { eco } from "./stores/eco";

const router = useRouter()

onBeforeMount(() => {
  eco.on('connected', () => {
    if (!eco.account) {
      router.push('login')
    }
  })
  eco.on('error', (e) => {
    alert(e)
  })
})
</script>

<template>
  <RouterView />
</template>
