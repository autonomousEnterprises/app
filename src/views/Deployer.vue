<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  BrainCircuit,
  Component,
  FileEdit,
  FileCode
} from 'lucide-vue-next';
import BusinessList from '../components/BusinessList.vue'
import CodeEditor from '../components/CodeEditor.vue'
import { useDeployerStore } from '../stores/deployer';

const deployerStore = useDeployerStore()

const nft = ref(false)
const mintable = ref(false)
const burnable = ref(false)
const stakeable = ref(false)
const governance = ref(false)
const treasury = ref(false)

const customSmartContract = ref(false)
const dedicatedVirtualMachine = ref(false)
const listing = ref(false)

const router = useRouter()
</script>

<template>
  <main>
    <div class="flex flex-col justify-center items-center w-full">
      <section class="w-full">
        <div class="w-full flex justify-center">
          <FileCode class="mr-2 mt-4"/>
          <h2>Smart Contract</h2>
        </div>
        <div class="w-full flex justify-center">
          <div class="card shadow bg-base-100 p-4 m-2">
            <div class="flex flex-wrap" v-if="!customSmartContract">
              <div class="flex flex-col">
                <div class="">
                  <div class="flex flex-wrap">
                    <div class="md:w-1/2">
                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Project URL</span>
                        </label>
                        <input type="text" placeholder="https://yourproject.url" class="input input-bordered w-full max-w-xs bg-base-300" v-model="deployerStore.token.url" />
                      </div>

                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Token Name</span>
                        </label>
                        <input type="text" placeholder="Cyber" class="input input-bordered w-full max-w-xs bg-base-300" v-model="deployerStore.token.name" />
                      </div>

                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Token Symbol</span>
                        </label>
                        <input type="text" placeholder="CBR" class="input input-bordered w-full max-w-xs bg-base-300" v-model="deployerStore.token.symbol" />
                      </div>

                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Token Supply</span>
                        </label>
                        <input type="number" placeholder="21,000,000" class="input input-bordered w-full max-w-xs bg-base-300" v-model="deployerStore.token.supply" />
                      </div>

                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Transaction Fee</span>
                        </label>
                        <input type="number" placeholder="0.1" class="input input-bordered w-full max-w-xs bg-base-300" v-model="deployerStore.token.fee" />
                      </div>
                    </div>

                    <div class="md:w-1/2">

                      <div class="form-control tooltip" data-tip="Coming soon">
                        <label class="label cursor-pointer">
                          <input type="checkbox" class="toggle mr-2" v-model="nft" disabled/>
                          <span class="label-text">Fungible / NFT</span>
                        </label>
                      </div>

                      <div class="form-control tooltip w-full" data-tip="Coming soon">
                        <label class="label cursor-pointer justify-start">
                          <input type="checkbox" class="checkbox checkbox-secondary mr-2" disabled/>
                          <span class="label-text">Mintable</span>
                        </label>
                      </div>

                      <div class="form-control tooltip w-full" data-tip="Coming soon">
                        <label class="label cursor-pointer justify-start">
                          <input type="checkbox" class="checkbox checkbox-secondary mr-2" disabled/>
                          <span class="label-text">Stakeable</span>
                        </label>
                      </div>

                      <div class="form-control tooltip w-full" data-tip="Coming soon">
                        <label class="label cursor-pointer justify-start">
                          <input type="checkbox" class="checkbox checkbox-secondary mr-2" disabled/>
                          <span class="label-text">Burnable</span>
                        </label>
                      </div>

                      <div class="form-control tooltip w-full" data-tip="Coming soon">
                        <label class="label cursor-pointer justify-start">
                          <input type="checkbox" class="checkbox checkbox-secondary mr-2" disabled/>
                          <span class="label-text">Governance</span>
                        </label>
                      </div>

                      <div class="form-control tooltip w-full" data-tip="Coming soon">
                        <label class="label cursor-pointer justify-start">
                          <input type="checkbox" class="checkbox checkbox-secondary mr-2" disabled/>
                          <span class="label-text">Treasury</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div class="w-full flex flex-wrap justify-center">
        <div class="card shadow bg-base-100 p-4 m-2">
          <div class="form-control tooltip w-full" data-tip="Coming soon">
            <label class="label cursor-pointer">
              <span class="label-text">Custom Smart Contract</span>
              <input type="checkbox" class="toggle ml-2" v-model="customSmartContract" disabled/>
            </label>
          </div>
        </div>

        <div class="card shadow bg-base-100 p-4 m-2">
          <div class="form-control tooltip w-full" data-tip="You need to have at least 10 Nomics in your Wallet">
            <label class="label cursor-pointer">
              <span class="label-text">List at the Marketplace</span>
              <input type="checkbox" class="toggle ml-2" v-model="listing" disabled/>
            </label>
          </div>
        </div>

      </div>
    </div>


    <!-- <div class="w-full pt-8" v-if="customSmartContract">
      <div class="w-full flex justify-center">
        <FileEdit class="mr-2 mt-4"/>
        <h2>Smart Contract Code Editor</h2>
      </div>
      <CodeEditor/>
    </div> -->

    <div class="flex justify-center p-4 w-full">
      <button class="btn btn-wide btn-neutral" @click="deployerStore.deploy()">Deploy</button>
    </div>
  </main>
</template>
