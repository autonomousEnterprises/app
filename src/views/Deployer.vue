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

const createBusiness = ref(false)
const tokenise = ref(false)
const customSmartContract = ref(false)
const enableVM = ref(false)
const assistance = ref(false)
const autoBranding = ref(false)
const autoMarketNiche = ref(false)
const autoBusinessModel = ref(false)
const autoProductDesign = ref(false)
const autoSmartContract = ref(false)
const autopilot = ref(false)


const listing = ref(false)

const router = useRouter()
</script>

<template>
  <main>
    <!-- <div class="mb-12">
      <ul class="steps w-[400px]">
        <li class="step step-primary">Assistant</li>
        <li class="step" :class="{ 'step-primary': branding.name && branding.tagline }">Branding</li>
        <li class="step" :class="{ 'step-primary': branding.category }">Category</li>
        <li class="step" :class="{ 'step-primary': branding.model }">Model</li>
        <li class="step" :class="{ 'step-primary': branding.name && branding.tagline }">Publish</li>
      </ul>
    </div> -->
    <div class="flex flex-wrap justify-around w-full">
      <section class="w-full">
        <div class="w-full flex justify-center">
          <BrainCircuit class="mr-2 mt-4"/>
          <h2>Artificial Intelligence</h2>
        </div>
        <div class="card shadow bg-base-100 p-4 m-2 flex flex-wrap">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Assistance</span>
              <input type="checkbox" class="toggle" v-model="assistance"/>
            </label>
          </div>

          <div class="flex flex-wrap" v-if="assistance">
            <div class="flex flex-wrap justify-start md:w-1/2">
              <div class="form-control tooltip md:w-1/2" data-tip="Available in Pro">
                <label class="label cursor-pointer justify-start">
                  <input type="checkbox" class="toggle mr-2" v-model="autoMarketNiche" disabled />
                  <span class="label-text">Auto Market Niche</span>
                </label>
              </div>

              <div class="form-control md:w-1/2">
                <label class="label cursor-pointer justify-start">
                  <input type="checkbox" class="toggle mr-2" v-model="autoBranding"/>
                  <span class="label-text">Auto Branding</span>
                </label>
              </div>

              <div class="form-control tooltip md:w-1/2" data-tip="Available in Pro">
                <label class="label cursor-pointer justify-start">
                  <input type="checkbox" class="toggle mr-2" v-model="autoBusinessModel" disabled/>
                  <span class="label-text">Auto Business Model</span>
                </label>
              </div>

              <div class="form-control tooltip md:w-1/2" data-tip="Available in Pro">
                <label class="label cursor-pointe justify-start">
                  <input type="checkbox" class="toggle mr-2" v-model="autoProductDesign" disabled />
                  <span class="label-text">Auto Product Design</span>
                </label>
              </div>

              <div class="form-control tooltip md:w-1/2" data-tip="Available in Pro">
                <label class="label cursor-pointe justify-start">
                  <input type="checkbox" class="toggle mr-2" v-model="autoSmartContract" disabled />
                  <span class="label-text">Auto Smart Contract Code</span>
                </label>
              </div>
            </div>

            <div class="form-control md:1/2">
              <label class="label">
                <span class="label-text">Objective</span>
              </label>
              <textarea class="textarea textarea-bordered h-36 w-full bg-base-300" placeholder="eg: Earn passive income for all community members" v-model="model"></textarea>
              <label class="label">
                <span class="label-text-alt">Define goal</span>
              </label>
            </div>

            <div class="divider w-full"></div>
            <button class="btn btn-wide btn-neutral w-full" disabled>Generate</button>
          </div>

        </div>

        <div class="card shadow bg-base-100 p-4 m-2">
          <div class="form-control tooltip w-full" data-tip="Available soon">
            <label class="label cursor-pointer">
              <span class="label-text">Autopilot</span>
              <input type="checkbox" class="toggle" v-model="autopilot" disabled/>
            </label>
          </div>

          <div class="" v-if="autopilot">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Token Name</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-base-300" />
            </div>
          </div>
        </div>
      </section>

      <section class="w-full">
        <div class="w-full flex justify-center">
          <Component class="mr-2 mt-4"/>
          <h2>Branding</h2>
        </div>
        <div class="card shadow bg-base-100 p-4 m-2">
          <div class="flex flex-wrap">
            <div class="md:w-1/3 flex flex-wrap p-4">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder="Cyber Org Ltd" class="input input-bordered w-full bg-base-300" v-model="deployerStore.branding.name"/>
              </div>

              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Tagline</span>
                </label>
                <input type="text" placeholder="Overtaking the world" class="input input-bordered w-full bg-base-300" v-model="deployerStore.branding.tagline"/>
              </div>

              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Logo</span>
                </label>
                <input type="file" placeholder="Logo" class="file-input file-input-bordered w-full" disabled />
              </div>

              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Domain</span>
                </label>
                <input type="text" placeholder="cyber.org" class="input input-bordered w-full bg-base-300" v-model="deployerStore.branding.url"/>
              </div>
            </div>

            <div class="md:w-1/3 flex flex-col p-4">
              <label class="label">
                <span class="label-text">Category</span>
              </label>
              <select class="select select-bordered w-full bg-base-300" v-model="deployerStore.branding.category">
                <option selected>Community Pool</option>
                <option>Agency</option>
                <option>R&D</option>
                <option disabled>E-Commerce</option>
                <option disabled>SaaS</option>
                <option disabled>Bond</option>
                <option disabled>Exchange</option>
                <option disabled>Treasury</option>
                <option disabled>Investment</option>
              </select>
            </div>

            <div class="md:w-1/3 flex flex-wrap p-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Solution</span>
                </label>
                <textarea class="textarea textarea-bordered h-64 bg-base-300" placeholder="eg: A decentralised funding pool for open source projects" v-model="model"></textarea>
                <label class="label">
                  <span class="label-text-alt">What do you want to solve?</span>
                </label>
              </div>
            </div>

          </div>


          <div class="form-control tooltip w-full" data-tip="Available in Pro">
            <label class="label cursor-pointer">
              <span class="label-text">List on the Marketplace</span>
              <input type="checkbox" class="toggle" v-model="listing" disabled/>
            </label>
          </div>
        </div>
      </section>

      <section class="w-full">
        <div class="w-full flex justify-center">
          <FileCode class="mr-2 mt-4"/>
          <h2>Smart Contract</h2>
        </div>
        <div class="card shadow bg-base-100 p-4 m-2">
          <div class="flex flex-wrap" v-if="!customSmartContract">
            <div class="md:w-1/3">
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

            <div class="md:w-1/3">
              <div class="form-control tooltip w-full" data-tip="Available in Pro">
                <label class="label cursor-pointer">
                  <span class="label-text">Mintable</span>
                  <input type="checkbox" class="checkbox checkbox-secondary" disabled/>
                </label>
              </div>

              <div class="form-control tooltip w-full" data-tip="Available in Pro">
                <label class="label cursor-pointer">
                  <span class="label-text">Stakable</span>
                  <input type="checkbox" class="checkbox checkbox-secondary" disabled/>
                </label>
              </div>

              <div class="form-control tooltip w-full" data-tip="Available in Pro">
                <label class="label cursor-pointer">
                  <span class="label-text">Burnable</span>
                  <input type="checkbox" class="checkbox checkbox-secondary" disabled/>
                </label>
              </div>
            </div>
          </div>

          <div class="form-control tooltip w-full" data-tip="Available in Pro">
            <label class="label cursor-pointer">
              <span class="label-text">Custom Smart Contract</span>
              <input type="checkbox" class="toggle" v-model="customSmartContract"/>
            </label>
          </div>

          <div class="form-control tooltip w-full" data-tip="Available in Pro" v-if="customSmartContract">
            <label class="label cursor-pointe">
              <span class="label-text">Enable GPT in Smart Contract</span>
              <input type="checkbox" class="toggle" v-model="autoSmartContract" disabled />
            </label>
          </div>
        </div>

        <div class="card shadow bg-base-100 p-4 m-2">
          <div class="form-control tooltip w-full" data-tip="Available in Pro">
            <label class="label cursor-pointer">
              <span class="label-text">Dedicated Virtual Machine</span>
              <input type="checkbox" class="toggle" v-model="enableVM"/>
            </label>
          </div>
        </div>
      </section>
    </div>
    <div class="w-full pt-8" v-if="customSmartContract">
      <div class="w-full flex justify-center">
        <FileEdit class="mr-2 mt-4"/>
        <h2>Smart Contract Code Editor</h2>
      </div>
      <CodeEditor/>
    </div>
    <div class="flex justify-center p-4 w-full">
      <button class="btn btn-wide btn-neutral" @click="deployerStore.deploy()">Deploy</button>
    </div>
    <!-- <div class="flex justify-center p-4 w-full">
      <BusinessList/>
    </div> -->
  </main>
</template>
