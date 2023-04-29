<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from 'pinia'
import _ from "lodash";
import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormInput, FormSelect, FormCheck } from "../base-components/Form";
import Alert from "../base-components/Alert";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Menu, Tab } from "../base-components/Headless";
import Table from "../base-components/Table";
// import { useAuth0 } from '@auth0/auth0-vue';
// import { auth0 } from '../utils/auth0';
// import { eco } from "../stores/eco";

// Wallet Data
let walletCreated = false;
let fundsDeposited = 0;
// let nextReward = (rewardRate / 100) * fundsDeposited;
let nextRewardTime = 2;

// Receiver
let individualTransactionVolume = ref(0);
let individualDepositVolume = ref(0);
let totalDepositVolume = ref(4211657.24);
let totalTransactionVolume = ref(2623739.54);
let rewardPool = ref(totalTransactionVolume.value * 0.008)

let accountBalance = ref(0);
let reward = ref(0);
let rewardRate = ref(0);

let maxWarning = ref(false)

const calculate = () => {
  if (individualTransactionVolume.value > individualDepositVolume.value) {
    maxWarning.value = true;
    toTop();
    setTimeout(() => {
      maxWarning.value = false;
    }, 10000);
    return;
  }
  let individualRanking = (individualTransactionVolume.value + individualDepositVolume.value) / totalDepositVolume.value;
  accountBalance.value = individualDepositVolume.value - individualTransactionVolume.value;
  reward.value = individualRanking * rewardPool.value;
  rewardRate.value = (reward.value / individualDepositVolume.value) * 100;
  toTop();
}

function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let scTimer = ref(0);
let scY = ref(0);

const handleScroll = () => {
  if (scTimer.value) return;
  setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
}

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="z-20 col-span-12 xl:col-span-9 2xl:col-span-9">
        <!-- <div class="mt-6 -mb-6 intro-y">
        </div> -->
        <Alert
          variant="warning"
          dismissible
          class="flex items-center box dark:border-darkmode-600 text-black dark:text-white mt-8"
          v-slot="{ dismiss }"
        >
          <span>
            Please note that this is an MVP Alpha Version currently running on a testnet
            <!-- <button
              class="rounded-md bg-white bg-opacity-20 dark:bg-darkmode-300 hover:bg-opacity-30 py-0.5 px-2 -my-3 ml-2"
              @click="walletCreationData()"
            >
              Create your Wallet
            </button>
            or
            <button
              class="rounded-md bg-white bg-opacity-20 dark:bg-darkmode-300 hover:bg-opacity-30 py-0.5 px-2 -my-3 ml-2"
              @click="walletCreationData()"
            >
              Import an exisiting one!
            </button> -->
          </span>
          <!-- <span v-else>
            <div class="flex flex-col justify-start">
              <h1 class="text-2xl p-4">Address: <b>{{ credentials.address }}</b></h1>
              <h1 class="text-2xl p-4">Binary Address: <b>{{ credentials.binaryAddress }}</b></h1>
              <h1 class="text-2xl p-4">Passphrase: <b>{{ credentials.passphrase }}</b></h1>
              <h1 class="text-2xl p-4">PrivateKey: <b>{{ credentials.privateKey }}</b></h1>
              <h1 class="text-2xl p-4">PublicKey: <b>{{ credentials.publicKey }}</b></h1>
            </div>
          </span> -->
          <Alert.DismissButton class="text-white" @Click="dismiss">
            <Lucide icon="X" class="w-4 h-4" />
          </Alert.DismissButton>
        </Alert>
        <Alert
          v-if="maxWarning"
          variant="danger"
          dismissible
          class="flex items-center box dark:border-darkmode-600 text-white dark:text-white mt-8"
          v-slot="{ dismiss }"
        >
          <span>
            Your Spent Amount can not be higher than your Deposit!
          </span>
          <Alert.DismissButton class="text-white" @Click="dismiss">
            <Lucide icon="X" class="w-4 h-4" />
          </Alert.DismissButton>
        </Alert>
        <div class="flex justify-center md:justify-start text-center">
          <h2 class="pt-8 text-xl">Rewards Calculator</h2>
        </div>
        <div class="flex flex-wrap justify-start items-start w-full mb-3 sm:gap-10 intro-y">
          <div
            class="relative w-full md:w-1/4 text-center sm:pl-5 md:pl-0 lg:pl-5 sm:text-left"
          >
            <!-- <Menu class="absolute pt-0.5 2xl:pt-0 mt-5 2xl:mt-6 top-0 right-0">
              <Menu.Button as="a" class="block" href="#">
                <Lucide icon="MoreVertical" class="w-5 h-5 text-slate-500" />
              </Menu.Button>
              <Menu.Items class="w-40">
                <Menu.Item>
                  <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                  Monthly Report
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                  Annual Report
                </Menu.Item>
              </Menu.Items>
            </Menu> -->
            <div
              class="flex items-center justify-center text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 mt-8"
            >
              My Balance
              <Tippy as="div" content="Your remaining deposit after spending funds within the 7-day period.">
                <Lucide icon="AlertCircle" class="w-5 h-5 ml-1.5 mt-0.5" />
              </Tippy>
            </div>
            <div class="mt-5 mb-3 flex flex-col">
              <div class="flex items-center justify-center sm:justify-start">
                <div
                  class="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4"
                >
                  <span
                    class="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0"
                  >
                    $
                  </span>
                  {{ numberWithCommas(Number(accountBalance).toFixed(2)) }}
              </div>
                <!-- <button class="ml-4 text-slate-500 2xl:ml-16" @click="eco.fetchBalance()">
                  <Lucide icon="RefreshCcw" class="w-4 h-4" />
                </button> -->
              </div>
              <div
                class="mt-5 flex justify-center md:justify-start"
              >
                <div class="flex justify-center text-center rounded-full bg-green-400 px-4 py-2 text-white font-bold w-[80px]">
                    ~{{ rewardRate.toFixed(2) }}%
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                </div>
                <!-- <Tippy
                  as="div"
                  class="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex 2xl:justify-center"
                  content="100% Higher than last month"
                >
                  ~{{ rewardRate.toFixed(2) }}%
                  <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                </Tippy> -->
              </div>
            </div>
            <div class="text-slate-500">Rewards payout on Monday</div>
            <!-- <div class="text-slate-500">Rewards payout in {{ nextRewardTime }} Days</div> -->
            <div
              class="mt-6 -mb-1 2xl:text-base text-slate-600 dark:text-slate-300 bg-gray-300 dark:bg-gray-700 py-4 px-2 rounded"
            >
              Estimated Rewards
              <span
                href=""
                class="decoration-dotted underline-offset-4 text-primary dark:text-slate-400 bold text-xl"
              >
                ~${{ reward.toFixed(2) }}
              </span>
            </div>
          </div>

          <div class="flex flex-col w-full md:w-1/3 text-center md:text-left">
            <div class="flex flex-col w-full p-4 m-2">
                <div class="flex justify-center md:justify-start">
                  <h2 class="pt-2 text-xl">Network Performance</h2>
                  <Tippy as="div" content="Testnet Performance">
                    <Lucide icon="AlertCircle" class="w-5 h-5 ml-1.5 mt-2" />
                  </Tippy>
                </div>
                <div class="">
                    <div
                      class="flex items-center justify-center text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 mt-4"
                      >
                          Total Deposit Volume
                        </div>
                        <div class="mt-2 mb-3 2xl:flex">
                          <div class="flex items-center justify-center sm:justify-start">
                            <div
                              class="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4"
                              >
                              <span
                                class="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0"
                                >
                                $
                              </span>
                              {{ numberWithCommas(Number(totalDepositVolume).toFixed(2)) }}

                        </div>
                      </div>
                    </div>
                </div>
                <div class="">
                    <div
                      class="flex items-center justify-center text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 mt-4"
                      >
                          Total Transaction Volume
                        </div>
                        <div class="mt-2 mb-3 2xl:flex">
                          <div class="flex items-center justify-center sm:justify-start">
                            <div
                            class="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4"
                            >
                            <span
                            class="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0"
                            >
                            $
                          </span>
                          {{ numberWithCommas(Number(totalTransactionVolume).toFixed(2)) }}

                        </div>
                      </div>
                    </div>
                </div>
                <!-- <div class="">
                    <div
                      class="flex items-center justify-center text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 mt-4"
                      >
                          Reward Pool
                        </div>
                        <div class="mt-2 mb-3 2xl:flex">
                          <div class="flex items-center justify-center sm:justify-start">
                            <div
                              class="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4"
                              >
                                <span
                                class="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0"
                                  >
                                  $
                                </span>
                                {{ numberWithCommas(Number(totalTransactionVolume * 0.008).toFixed(2)) }}

                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
          </div>

          <div class="flex flex-col w-full md:w-1/4 text-center md:text-left">
            <div class="flex flex-col w-full p-4 m-2">
                <h2 class="text-xl">Deposit Amount</h2>
                <p>Enter an estimated amount you would like to deposit.</p>
                <div class="flex">
                    <!-- <span
                      class="top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0 mr-2"
                    >
                      $
                    </span> -->
                    <FormInput
                      type="number"
                      class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px] my-2 text-2xl text-center"
                      placeholder="Deposit Amount"
                      v-model="individualDepositVolume"
                    />
                </div>

                <h2 class="pt-8 text-xl">Spent Amount</h2>
                <p>Enter an estimated amount you would spend in a week.</p>
                <div class="flex">
                    <!-- <span
                      class="top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0 mr-2"
                    >
                      $
                    </span> -->
                    <FormInput
                      type="number"
                      class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px] my-2 text-2xl text-center"
                      placeholder="Spent Amount"
                      v-model="individualTransactionVolume"
                    />
                </div>

            </div>
            <div class="flex justify-center w-full">
              <Menu class="mt-4 w-44 2xl:w-52">
                <Menu.Button
                  :as="Button"
                  variant="primary"
                  rounded
                  class="justify-center w-full px-4"
                  @click="calculate()"
                  >
                    Calculate
                    <!-- <button
                      class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-full dark:bg-darkmode-300 bg-opacity-20 hover:bg-opacity-30 ml-4"
                    >
                      <Lucide icon="Send" class="w-6 h-6" />
                    </button> -->
                </Menu.Button>
              </Menu>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
