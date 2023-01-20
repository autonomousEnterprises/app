<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'
import DarkModeSwitcher from "../components/DarkModeSwitcher";
import MainColorSwitcher from "../components/MainColorSwitcher";
import logoUrl from "../assets/images/logo.svg";
import illustrationUrl from "../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../base-components/Form";
import Button from "../base-components/Button";
import { eco } from "../stores/eco";

const router = useRouter()

const toggleImport = ref(false)
const toggleCreate = ref(false)
const walletData = ref({})
const passphrase = ref('')
const rememberLogin = ref(false)

const importWallet = () => {
  toggleImport.value = true
  toggleCreate.value = false
}

const openWallet = async () => {
  if (rememberLogin.value) {
    localStorage.setItem('passphrase', passphrase.value) // TODO encode cryptographically
  }
  await eco.importWallet(passphrase.value)
  router.push('/')
}

const createWallet = async () => {
  walletData.value = await eco.createWallet()
  toggleCreate.value = true
  toggleImport.value = false
}

</script>

<template>
  <div
    :class="[
      '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
      'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400',
      'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700',
    ]"
  >
    <DarkModeSwitcher />
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <a href="" class="flex items-center pt-5 -intro-x">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="logoUrl"
            />
            <span class="ml-3 text-lg text-white"> Eco </span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-1/2 -mt-16 -intro-x"
              :src="illustrationUrl"
            />
            <div
              class="mt-10 text-4xl font-medium leading-tight text-white -intro-x"
            >
              A few more clicks to <br />
              sign in to your account.
            </div>
            <div
              class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400"
            >
              Sign in, deposit funds and explore <br>the most sustainable payment experience
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left"
            >
              Sign In
            </h2>
            <!-- <div class="mt-2 text-center intro-x text-slate-400 xl:hidden">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div> -->
            <div class="mt-8 intro-x" v-if="toggleImport">
              <FormInput
                type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="Passphrase"
                v-model="passphrase"
              />
              <Button
                variant="primary"
                class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3 mt-4"
                @click="openWallet()"
                v-if="passphrase"
              >
                Import
              </Button>
              <!-- <FormInput
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="Password"
                v-if="toggleCreate"
              /> -->
            </div>
            <div class="" v-if="toggleCreate">
              <div class="">
                <h1 class="text-xl font-bold italic pt-8 pb-2">
                  Save these data secure! There is no way to recover the account!
                </h1>
              </div>
              <div class="p-8 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80">
                <h2 class="text-2xl font-bold py-2">
                  Address
                </h2>
                <h3 class="text-2xl py-2">
                  {{ walletData.address }}
                </h3>
                <h2 class="text-2xl font-bold py-2 mt-4">
                  Passphrase
                </h2>
                <h3 class="text-2xl py-2">
                  {{ walletData.passphrase }}
                </h3>
              </div>

              <div class="">
                <h1 class="text-xl italic py-8">
                  Click now on
                  <a class="underline" @click="importWallet()">
                    Import Wallet
                  </a>
                  to login into your new Account.
                </h1>
              </div>
            </div>
            <div
              class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm"
            >
              <div class="flex items-center mr-auto">
                <FormCheck.Input
                  id="remember-me"
                  type="checkbox"
                  class="mr-2 border"
                  v-model="rememberLogin"
                />
                <label class="cursor-pointer select-none" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <!-- <a href="">Forgot Password?</a> -->
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                variant="primary"
                class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                @click="importWallet()"
              >
                Import Wallet
              </Button>
              <Button
                variant="outline-secondary"
                class="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                @click="createWallet()"
              >
                Create Wallet
              </Button>
            </div>
            <div
              class="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left"
            >
              By signin up, you agree to our
              <a class="text-primary dark:text-slate-200" href="">
                Terms and Conditions
              </a>
              &
              <a class="text-primary dark:text-slate-200" href="">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>
