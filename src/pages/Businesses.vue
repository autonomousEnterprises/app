<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from 'pinia'
import _ from "lodash";
import Button from "../base-components/Button";
import Alert from "../base-components/Alert";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
onMounted(() => {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://static.airtable.com/js/embed/embed_snippet_v1.js')
    document.head.appendChild(recaptchaScript)
})
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="z-20 col-span-12 xl:col-span-9 2xl:col-span-9">
        <div class="flex justify-center md:justify-start text-center">
          <h2 class="pt-8 text-xl">Businesses</h2>
        </div>
        <div class="mt-6 intro-y">
          <Alert
            variant="primary"
            dismissible
            class="flex items-center mb-6 box dark:border-darkmode-600 text-black dark:text-white"
            v-slot="{ dismiss }"
          >
            <span class="text-white">
              Get your business registered and listed on the upcoming ecosis Marketplace as soon as it's released!
            </span>
            <Alert.DismissButton class="text-white" @Click="dismiss">
              <Lucide icon="X" class="w-4 h-4" />
            </Alert.DismissButton>
          </Alert>
        </div>
        <div class="flex flex-wrap justify-start items-start w-full mb-3 sm:gap-10 intro-y">

          <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr9xCLaOA5RCzYRm?backgroundColor=transparent" frameborder="0" onmousewheel="" width="100%" height="1125.75" style="background: transparent; border: 1px solid #ccc;"></iframe>

        </div>
      </div>
    </div>
  </div>
</template>
