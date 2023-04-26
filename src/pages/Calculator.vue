<script setup lang="ts">
import { ref, onMounted } from "vue";
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
import { auth0 } from '../utils/auth0';
// import { eco } from "../stores/eco";

// Auth0
const { isLoading, isAuthenticated } = auth0

// Wallet Data
let walletCreated = false
let fundsDeposited = 0
let rewardRate = 0
let nextReward = (rewardRate / 100) * fundsDeposited
let nextRewardTime = 3

// Receiver
let individualTransactionVolume = ref(0)
let individualDepositVolume = ref(0)
let totalTransactionVolume = ref(0)
let totalDepositVolume = ref(0)
let accountBalance = ref(0)

onMounted(async () => {
  accountBalance.value = individualDepositVolume.value - individualTransactionVolume.value
})
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="z-20 col-span-12 xl:col-span-9 2xl:col-span-9">
        <div class="mt-6 -mb-6 intro-y">
        </div>
        <div class="flex flex-col justify-center items-center w-full mb-3 mt-14 sm:gap-10 intro-y">
          <div
            class="relative w-full md:flex-1 py-6 text-center sm:pl-5 md:pl-0 lg:pl-5 sm:text-left"
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
              class="flex items-center justify-center text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 mt-14 2xl:mt-24"
            >
              My left Deposit
              <Tippy as="div" content="Your left Deposit after spended some funds within the 7 days period.">
                <Lucide icon="AlertCircle" class="w-5 h-5 ml-1.5 mt-0.5" />
              </Tippy>
            </div>
            <div class="mt-5 mb-3 2xl:flex">
              <div class="flex items-center justify-center sm:justify-start">
                <div
                  class="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4"
                >
                  <span
                    class="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0"
                  >
                    $
                  </span>
                  {{ Number(accountBalance).toFixed(3) }}
                </div>
                <!-- <button class="ml-4 text-slate-500 2xl:ml-16" @click="eco.fetchBalance()">
                  <Lucide icon="RefreshCcw" class="w-4 h-4" />
                </button> -->
              </div>
              <div
                class="mt-5 2xl:flex 2xl:justify-center 2xl:mt-0 2xl:-ml-20 2xl:w-14 2xl:flex-none 2xl:pl-2.5"
              >
                <Tippy
                  as="div"
                  class="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex 2xl:justify-center"
                  content="49% Higher than last month"
                >
                  ~{{ rewardRate.toFixed() }}%
                  <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                </Tippy>
              </div>
            </div>
            <div class="text-slate-500">Next reward in {{ nextRewardTime }} Days</div>
            <div
              class="mt-6 -mb-1 2xl:text-base text-slate-600 dark:text-slate-300"
            >
              Estimated Reward
              <span
                href=""
                class="decoration-dotted underline-offset-4 text-primary dark:text-slate-400"
              >
                ~${{ nextReward.toFixed() }}
              </span>
            </div>
          </div>

          <div class="flex flex-col w-full md:flex-1">
            <div class="flex flex-col w-full p-4 m-2">
                <h2 class="pt-8 text-xl">Deposit Amount</h2>
                <div class="flex">
                    <!-- <span
                      class="top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0 mr-2"
                    >
                      $
                    </span> -->
                    <FormInput
                      type="number"
                      class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px] my-2 text-2xl text-center"
                      placeholder="Amount"
                      v-model="individualDepositVolume"
                    />
                </div>

                <h2 class="pt-8 text-xl">Spended Amount</h2>
                <div class="flex">
                    <!-- <span
                      class="top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0 mr-2"
                    >
                      $
                    </span> -->
                    <FormInput
                      type="number"
                      class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px] my-2 text-2xl text-center"
                      placeholder="Spended Amount"
                      v-model="individualTransactionVolume"
                    />
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
