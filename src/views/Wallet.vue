<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import { useWalletStore } from '../stores/wallet';
import { formatCurrency } from '../utils/numbers';

const amount = ref(0)
const receiver = ref('')
const token = ref('')

const validEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const walletStore = useWalletStore()

const selectToken = (selectedToken) => {
  token.value = selectedToken
}

const transfer = () => {
  if (validEmail(receiver.value)) {
    walletStore.transfer(receiver.value, amount.value, token.value)
  }
}

onBeforeMount(async () => {
  await walletStore.fetchWallets()
})
</script>

<template>
  <main>
    <section class="flex flex-col justify-start h-auto">
      <div class="stats stats-vertical lg:stats-horizontal bg-base-100 card text-primary-content shadow h-auto">

        <div class="stat flex flex-col justify-center">
          <div class="stat-title">Total balance</div>
          <div class="stat-value">$0.000</div>

          <div class="stat-title">Total assets: <span class="bold">{{ walletStore.tokens.length }}</span></div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success" disabled>Add Token</button>
          </div>
        </div>

        <div class="stats stats-vertical overflow-scroll">

          <div class="stat" v-for="wallet in walletStore.tokens">
            <div class="stat-title">Current balance</div>
            <div class="stat-value w-full flex flex-wrap justify-between"><span class="!text-gray-300 mr-2 !font-normal">{{ wallet.symbol }}</span>{{ formatCurrency(wallet.balance.toFixed(3) || 0) }}</div>
            <div class="stat-actions">
              <!-- <button class="btn btn-sm">Withdrawal</button>
              <button class="btn btn-sm">deposit</button> -->
              <div class="stat-actions">
                <button class="btn btn-sm btn-primary w-full" onclick="my_modal_5.showModal()" @click="selectToken(wallet)">Send</button>
              </div>
            </div>
          </div>
          <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Amount</span>
                </label>
                <input type="number" placeholder="20" class="input input-bordered w-full bg-base-300" v-model="amount"/>
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Receiver</span>
                </label>
                <input type="text" placeholder="Enter e-mail address " class="input input-bordered w-full bg-base-300" v-model="receiver"/>
              </div>
              <div class="flex flex-col w-full text-gray-500 italic pt-2">
                <span>Transaction Fee: {{ token.fee }}</span>
                <span>You are about to send {{ amount }} {{ token.name }} to {{ receiver }}</span>
                <span>You will have {{ (token.balance - amount - token.fee).toFixed(3) }} left</span>
              </div>
              <div class="modal-action">
                <button class="btn btn-success" @click="transfer()">Send</button>
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </div>
            </form>
          </dialog>

        </div>

      </div>
    </section>
  </main>
</template>
