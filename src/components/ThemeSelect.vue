<script setup lang="ts">
import { useThemeStore } from '../stores/theme';

const themeStore = useThemeStore()
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Theme</span>
    </label>
    <select class="select select-bordered" v-model="themeStore.theme">
      <option v-for="theme in themeStore.themes">{{ theme }}</option>
    </select>
  </div>
</template>
