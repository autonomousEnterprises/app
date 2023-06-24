<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  LogIn
} from 'lucide-vue-next';
import { useUserStore } from '../stores/user';

const router = useRouter()
const userStore = useUserStore()

const mail = ref('')

const login = (data) => {
  userStore.login(data)
  router.push('/')
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
