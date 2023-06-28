<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  LogIn
} from 'lucide-vue-next';
import { useUserStore } from '../stores/user';
import { useWalletStore } from '../stores/wallet';
import { useNotificationStore } from '../stores/notifications';

const router = useRouter()
const userStore = useUserStore()
const walletStore = useWalletStore()
const notificationStore = useNotificationStore()

const email = ref('')
const password = ref('')
const registration = ref(false)

const validEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const login = async () => {
  try {
    if (validEmail(email.value)) {
      await userStore.login(email.value, password.value)
      await walletStore.fetchWallets(email.value)
      router.push('/')
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'Not a valid e-mail-address!'
      })
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const register = async () => {
  try {
    if (validEmail(email.value)) {
      await userStore.register(email.value, password.value)
      router.push('/')
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'Not a valid e-mail-address!'
      })
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">ecosis</h1>
        <p class="py-6">Welcome</p>
        <div class="divider"></div>
        <div class="" v-if="!registration">
          <button class="w-full rounded pb-4" @click="registration = true">
            <h1>Login</h1>
            <p class="underline">Register</p>
          </button>
          <input type="email" placeholder="E-Mail" class="input input-bordered w-full my-4"
            v-model="email"
          />
          <input type="email" placeholder="Password" class="input input-bordered w-full my-4"
            v-model="password"
            @keydown.enter="login()"
          />
          <button class="btn btn-primary" @click="login()"><LogIn/>Login</button>
        </div>
        <div class="" v-else>
          <button class="w-full rounded pb-4" @click="registration = false">
            <h1>Register</h1>
            <p class="underline">Login</p>
          </button>
          <input type="email" placeholder="E-Mail" class="input input-bordered w-full my-4"
            v-model="email"
          />
          <input type="email" placeholder="Password" class="input input-bordered w-full my-4"
            v-model="password"
            @keydown.enter="register()"
          />
          <button class="btn btn-primary" @click="register()"><LogIn/>Signup</button>
        </div>
      </div>
    </div>
  </div>
</template>
