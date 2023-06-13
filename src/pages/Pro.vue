<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from 'pinia'
import _ from "lodash";
import Button from "../base-components/Button";
import Alert from "../base-components/Alert";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
onMounted(() => {
})
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="z-20 col-span-12 xl:col-span-9 2xl:col-span-9">
        <div class="flex justify-center md:justify-start text-center">
          <h2 class="pt-8 text-xl">Pro</h2>
        </div>
        <div class="mt-6 intro-y">
          <!-- <Alert
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
          </Alert> -->
        </div>
        <div class="flex flex-wrap justify-start items-start w-full mb-3 sm:gap-10 intro-y">

          <iframe src="https://ecosis.pro/#features" frameborder='0' width='100%' height='600' ></iframe>

        </div>
      </div>
    </div>
  </div>
</template>
