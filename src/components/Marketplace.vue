<script setup lang="ts">
import { ref } from 'vue';
import { useMarketplaceStore } from '../stores/marketplace';

const marketplaceStore = useMarketplaceStore()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
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
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Logo" />
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
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
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
