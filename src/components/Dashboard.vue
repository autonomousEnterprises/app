<script setup lang="ts">

</script>

<template>
  <section class="flex flex-col">
    <div class="text-center p-4 w-full flex justify-center">
      <CandlestickChart class="mr-2 mt-5"/>
      <h1>Network Performance</h1>
    </div>
    <div class="w-full flex justify-center">
      <select class="select select-bordered select-md w-full max-w-xs">
        <option selected>Nomics</option>
        <option disabled>More soon</option>
      </select>
    </div>
    <div class="flex flex-wrap justify-center">
      <div class="stats shadow stats-vertical hadow m-4 card w-96 bg-base-100 p-4 m-2 flex">
        <div class="stat place-items-center">
          <div class="stat-title">Users</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Waitlist</div>
          <div class="stat-value text-success">123</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Organisations</div>
          <div class="stat-value text-success">{{ marketplaceStore.businesses.length }}</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
          <div class="stat-desc">Testnet</div>
        </div>
      </div>

      <div class="stats shadow stats-vertical shadow m-4 card w-96 bg-base-100 p-4 m-2 flex2">
        <div class="stat place-items-center">
          <div class="stat-title">Total Transaction Volume</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Total Deposit Volume</div>
          <div class="stat-value text-success">123</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-center">
      <div class="text-center p-4 w-full flex justify-center">
        <User class="mr-2 mt-5"/>
        <h1>Your Performance</h1>
      </div>
      <div class="stats shadow stats-vertical lg:stats-horizontal shadow m-4 card w-96 bg-base-100 p-4 m-2 flex2 w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Rank</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Reputation</div>
          <div class="stat-value text-success">123</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 122 (14%)</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Follower</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Total Transaction Volume</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Total Deposit Volume</div>
          <div class="stat-value text-success">70</div>
          <div class="stat-desc text-success tooltip" data-tip="Since 1 week">↗︎ 40 (2%)</div>
        </div>
      </div>
      <RouterLink class="btn btn-wide btn-standard" to="deployer">Invite & earn rewards</RouterLink>
    </div>
  </section>
</template>
