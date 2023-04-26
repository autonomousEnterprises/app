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
let nextRewardTime = 0
let accountBalance = ref(0)

// Receiver
let receiver = ref('')
let amount = ref(0)
let inlcudeMessage = ref(false)
let message = ref('')

onMounted(async () => {
  // await eco.fetchBalance()
  // eco.on('balance-fetched', (balance: any) => {
  //   accountBalance.value = balance
  // })

  // console.log(await eco.fetchAccount('lsknanun6s584dw49mtczchmbq3zwzcy8n3u2xwrj'));
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
              Please be aware of it's an MVP Alpha Version running on a testnet.
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
        </div>
        <div class="flex flex-wrap w-full mb-3 mt-14 sm:gap-10 intro-y">
          <div class="-mb-1 text-sm font-medium 2xl:text-base">
            Hi,
            <span class="font-normal text-slate-600 dark:text-slate-300">
              and very Welcome!
            </span>
          </div>

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
              My Total Funds
              <Tippy as="div" content="These are the funds you have deposited into your wallet. You can use it to pay, share and you get rewarded automatically.">
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
            <div class="py-4">
              <!-- {{ account.address }} -->
            </div>
            <div class="w-full flex justify-center md:justify-start">
              <Menu class="mt-14 2xl:mt-24 w-44 2xl:w-52">
                <Menu.Button
                  :as="Button"
                  variant="primary"
                  rounded
                  class="relative justify-center w-full px-4"
                  >
                    Deposit Funds
                    <button
                      class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-full dark:bg-darkmode-300 bg-opacity-20 hover:bg-opacity-30 ml-4"
                      @click=""
                    >
                    <Lucide icon="Plus" class="w-6 h-6" />
                  </button>
                </Menu.Button>
              </Menu>
            </div>
          </div>

          <div class="flex flex-col w-full md:flex-1">
            <div class="flex flex-col w-full p-4 m-2">
                <h2 class="pt-8 text-xl">Amount</h2>
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
                      v-model="amount"
                    />
                </div>

                <h2 class="pt-8 text-xl">Receiver</h2>
                <FormInput
                  type="text"
                  class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px] my-2"
                  placeholder="Receiver"
                  v-model="receiver"
                />

                <div class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                  <div class="flex items-center mr-auto my-4 pl-2">
                    <FormCheck.Input
                    id="remember-me"
                    type="checkbox"
                    class="mr-2 border"
                    v-model="inlcudeMessage"
                    />
                    <label class="cursor-pointer select-none" htmlFor="remember-me">
                      Include Message
                    </label>
                  </div>
                </div>

                <FormInput
                  type="text"
                  class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px] my-2"
                  placeholder="Write any Text here"
                  v-model="message"
                  v-if="inlcudeMessage"
                />
                <div class=
                "w-full flex justify-center">
                  <Menu class="mt-4 2xl:mt-24 w-44 2xl:w-52">
                    <Menu.Button
                      :as="Button"
                      variant="primary"
                      rounded
                      class="justify-center w-full px-4"
                      >
                        Transfer
                        <button
                          class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-full dark:bg-darkmode-300 bg-opacity-20 hover:bg-opacity-30 ml-4"
                        >
                        <Lucide icon="Send" class="w-6 h-6" />
                      </button>
                    </Menu.Button>
                    <!-- <Menu.Button
                      :as="Button"
                      variant="primary"
                      rounded
                      class="justify-center w-full px-4"
                      @click="eco.transfer(receiver, amount.toString(), message || undefined, true)"
                      >
                        Transfer
                        <button
                          class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-full dark:bg-darkmode-300 bg-opacity-20 hover:bg-opacity-30 ml-4"
                        >
                        <Lucide icon="Send" class="w-6 h-6" />
                      </button>
                    </Menu.Button> -->
                  </Menu>
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
