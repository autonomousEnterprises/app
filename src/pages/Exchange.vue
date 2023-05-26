<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Alert from "../base-components/Alert";

onMounted(() => {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js')
    document.head.appendChild(recaptchaScript)
})
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="z-20 col-span-12 xl:col-span-9 2xl:col-span-9">
        <div class="mt-6 -mb-6 intro-y">
          <Alert
            variant="warning"
            dismissible
            class="flex items-center mb-6 box dark:border-darkmode-600 text-black dark:text-white"
            v-slot="{ dismiss }"
          >
            <span>
              Please note that currently you need to have your own crypto wallet. Will support natively soon!
            </span>
            <Alert.DismissButton class="text-white" @Click="dismiss">
              <Lucide icon="X" class="w-4 h-4" />
            </Alert.DismissButton>
          </Alert>
        </div>
        <div class="flex flex-wrap w-full mb-3 mt-14 sm:gap-10 intro-y">

          <iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=5000&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=usdcmatic&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=f4121a58c9de5d&locales=true&logo=false&primaryColor=164E63&to=btc&toFiat=eth&toTheMoon=true' style="height: 356px; width: 100%; border: none"></iframe>

        </div>
      </div>
    </div>
  </div>
</template>
