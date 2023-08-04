<script setup lang="ts">
import { ref } from 'vue';
import { useMarketplaceStore } from '../stores/marketplace';
import { useRouter } from 'vue-router';
import { formatCurrency } from '../utils/numbers';

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
          <th>Symbol</th>
          <th>Total Supply</th>
          <th>Transaction Fee</th>
          <th>VM</th>
        </tr>
      </thead>
      <tbody>
          <tr class="hover:bg-base-200" v-for="business in marketplaceStore.businesses">
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="`https://api.dicebear.com/6.x/shapes/svg?seed=${business.symbol}`" alt="Logo" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="font-bold">{{ business.name }}</div>
            </td>
            <td>
              <div class="badge badge-ghost badge-sm">{{ business.symbol }}</div>
            </td>
            <td>
              <span class="font-bold">{{ formatCurrency(business.totalSupply) }}</span>
            </td>
            <td>{{ business.transactionFee }}</td>
            <td>{{ business.vm }}</td>
          </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Total Supply</th>
          <th>Transaction Fee</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
