<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import { useWalletStore } from '../stores/wallet';

const amount = ref(0)
const receiver = ref('')
const token = ref('')

const validEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


const walletStore = useWalletStore()

const transfer = (token) => {
  if (validEmail(receiver.value)) {
    walletStore.transfer(receiver.value, amount, token)
  }
}

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
            <div class="stat-value"><span class="!text-gray-300 mr-2 !font-normal">{{ wallet.tokenSymbol }}</span>{{ formatCurrency(wallet.balance) }}</div>
            <div class="stat-actions">
              <!-- <button class="btn btn-sm">Withdrawal</button>
              <button class="btn btn-sm">deposit</button> -->
              <div class="stat-actions">
                <button class="btn btn-sm btn-primary w-full" onclick="my_modal_5.showModal()">Send</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
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
        <div class="modal-action">
          <button class="btn btn-success" @click="transfer(token, receiver, amount)">Send</button>
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </div>
      </form>
    </dialog>
  </main>
</template>
