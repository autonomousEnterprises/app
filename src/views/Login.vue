<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  LogIn
} from 'lucide-vue-next';
import { useUserStore } from '../stores/user';
import { useNotificationStore } from '../stores/notifications';

const router = useRouter()
const userStore = useUserStore()
const notificationStore = useNotificationStore()

const mail = ref('')

const validEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const login = (data) => {
  if (validEmail(data)) {
    console.log('valid');

    userStore.login(data)
    router.push('/')
  } else {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Not a valid e-mail-address!'
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
        <input type="email" placeholder="Type E-Mail here" class="input input-bordered w-full my-4"
          v-model="mail"
          @keydown.enter="login(mail)"
        />
        <button class="btn btn-primary" @click="login(mail)"><LogIn/>Get Started</button>
      </div>
    </div>
  </div>
</template>
