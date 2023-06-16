<script setup lang="ts">
import { ref } from 'vue';
import { useMarketplaceStore } from '../stores/marketplace';
import { useRouter } from 'vue-router';

const router = useRouter()
const marketplaceStore = useMarketplaceStore()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table table-xs table-pin-rows table-pin-cols">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th>Name</th>
          <th>Model</th>
          <th>Token</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          <tr class="hover:bg-base-200" v-for="business in marketplaceStore.businesses">
            <th>
              <!-- <label>
                <input type="checkbox" class="checkbox" />
              </label> -->
            </th>
            <td @click="router.push(`/b/${business.id}`)">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="`https://api.dicebear.com/6.x/shapes/svg?seed=${business.name}`" alt="Logo" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ business.name }}</div>
                  <div class="text-sm opacity-50">{{ business.tagline }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ business.solution }}
              <br/>
              <span class="badge badge-ghost badge-sm">{{ business.model }}</span>
            </td>
            <td>{{ business.token }}</td>
          </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Model</th>
          <th>Token</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
