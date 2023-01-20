<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
import { eco } from "./stores/eco";

const router = useRouter()

onBeforeMount(() => { // TODO Facelift
  eco.on('connected', () => {
    if (!eco.account) {
      router.push('login')
    }
  })
})
</script>

<template>
  <RouterView />
</template>
