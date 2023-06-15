<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useWalletStore } from '../stores/wallet';

const walletStore = useWalletStore()

const formatCurrency = (number: number) => {
  if (number) {
    const formattedNumber = number.toString().replace(/\D/g, "");
    const rest = formattedNumber.length % 3;
    let currency = formattedNumber.substr(0, rest);
    const thousand = formattedNumber.substr(rest).match(/\d{3}/g);
    let separator;

    if (thousand) {
      separator = rest ? "," : "";
      currency += separator + thousand.join(",");
    }

    return currency;
  } else {
    return "";
  }
};
</script>

<template>
  <main class="flex">
    <section class="flex flex-col justify-start">
      <div class="stats stats-vertical lg:stats-horizontal bg-base-100 card text-primary-content shadow h-1/3">

        <div class="stat flex flex-col justify-center">
          <div class="stat-title">Total balance</div>
          <div class="stat-value">$89,400</div>

          <div class="stat-title">Total assets: <span class="bold">{{ walletStore.wallets.length }}</span></div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div class="stats stats-vertical overflow-scroll">

          <div class="stat" v-for="wallet in walletStore.wallets">
            <div class="stat-title">Current balance</div>
            <div class="stat-value">{{ formatCurrency(wallet.balance) }}</div>
            <div class="stat-actions">
              <button class="btn btn-sm">Withdrawal</button>
              <button class="btn btn-sm">deposit</button>
              <div class="stat-actions">
                <button class="btn btn-sm btn-primary w-full">Send</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>
