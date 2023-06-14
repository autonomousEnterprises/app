<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BusinessList from '../components/BusinessList.vue'
import CodeEditor from '../components/CodeEditor.vue'

const createBusiness = ref(false)
const tokenise = ref(false)
const enableVM = ref(false)
const assistance = ref(false)
const autoBranding = ref(false)
const autoMarketNiche = ref(false)
const autoBusinessModel = ref(false)
const autoProductDesign = ref(false)
const autoSmartContract = ref(false)
const autopilot = ref(false)

const branding = ref({
  name: '',
  tagline: '',
  url: '',
  category: '',
  model: '',
})

const listing = ref(false)

const router = useRouter()
</script>

<template>
  <main class="flex flex-wrap justify-center overflow-scroll">
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
      <div class="">
        <section class="card w-96 bg-base-100 p-4 m-2">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">AI Assistance</span>
              <input type="checkbox" class="toggle" v-model="assistance"/>
            </label>
          </div>

          <div class="" v-if="assistance">

            <div class="form-control tooltip w-full" data-tip="Available in Pro">
              <label class="label cursor-pointer">
                <span class="label-text">Auto Market Niche</span>
                <input type="checkbox" class="toggle" v-model="autoMarketNiche" disabled />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Auto Branding</span>
                <input type="checkbox" class="toggle" v-model="autoBranding"/>
              </label>
            </div>

            <div class="form-control tooltip w-full" data-tip="Available in Pro">
              <label class="label cursor-pointer">
                <span class="label-text">Auto Business Model</span>
                <input type="checkbox" class="toggle" v-model="autoBusinessModel" disabled/>
              </label>
            </div>

            <div class="form-control tooltip w-full" data-tip="Available in Pro">
              <label class="label cursor-pointe">
                <span class="label-text">Auto Product Design</span>
                <input type="checkbox" class="toggle" v-model="autoProductDesign" disabled />
              </label>
            </div>

            <div class="form-control tooltip w-full" data-tip="Available in Pro">
              <label class="label cursor-pointe">
                <span class="label-text">Auto Smart Contract Code</span>
                <input type="checkbox" class="toggle" v-model="autoSmartContract" disabled />
              </label>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Objective</span>
              </label>
              <textarea class="textarea textarea-bordered h-36   bg-base-300" placeholder="eg: Earn passive income for all community members" v-model="model"></textarea>
              <label class="label">
                <span class="label-text-alt">Define goal</span>
              </label>
            </div>

            <div class="divider"></div>
            <RouterLink class="btn btn-wide btn-neutral w-full" to="create" disabled>Generate</RouterLink>
          </div>

        </section>
        <section class="card w-96 bg-base-100 p-4 m-2">
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
        </section>
      </div>

      <section class="card w-96 bg-base-100 p-4 m-2">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Cyber Org Ltd" class="input input-bordered w-full max-w-xs bg-base-300" v-model="name"/>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Tagline</span>
          </label>
          <input type="text" placeholder="Overtaking the world" class="input input-bordered w-full max-w-xs bg-base-300" v-model="tagline"/>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Logo</span>
          </label>
          <input type="file" placeholder="Logo" class="file-input file-input-bordered w-full max-w-xs" disabled />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Domain</span>
          </label>
          <input type="text" placeholder="cyber.org" class="input input-bordered w-full max-w-xs bg-base-300" v-model="url"/>
        </div>

        <div class="">
          <label class="label">
            <span class="label-text">Category</span>
          </label>
          <select class="select select-bordered w-full max-w-xs bg-base-300" v-model="category">
            <option selected>Community Pool</option>
            <option>Agency</option>
            <option>R&D</option>
            <option disabled>E-Commerce</option>
            <option disabled>Bond</option>
            <option disabled>Exchange</option>
            <option disabled>Treasury</option>
            <option disabled>Investment</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Solution</span>
          </label>
          <textarea class="textarea textarea-bordered h-64 bg-base-300" placeholder="eg: A decentralised funding pool for open source projects" v-model="model"></textarea>
          <label class="label">
            <span class="label-text-alt">What do you want to solve?</span>
          </label>
        </div>


        <div class="form-control tooltip w-full" data-tip="Available in Pro">
          <label class="label cursor-pointer">
            <span class="label-text">List on the Marketplace</span>
            <input type="checkbox" class="toggle" v-model="listing" disabled/>
          </label>
        </div>
      </section>

      <div class="">
        <section class="card w-96 bg-base-100 p-4 m-2">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Tokenise</span>
              <input type="checkbox" class="toggle" v-model="tokenise" />
            </label>
          </div>

          <div class="" v-if="tokenise">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Token Name</span>
              </label>
              <input type="text" placeholder="Cyber" class="input input-bordered w-full max-w-xs bg-base-300" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Token Symbol</span>
              </label>
              <input type="text" placeholder="CBR" class="input input-bordered w-full max-w-xs bg-base-300" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Token Supply</span>
              </label>
              <input type="number" placeholder="21,000,000" class="input input-bordered w-full max-w-xs bg-base-300" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Transaction Fee</span>
              </label>
              <input type="number" placeholder="0.1" class="input input-bordered w-full max-w-xs bg-base-300" />
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Mintable</span>
                <input type="checkbox" class="checkbox checkbox-secondary" />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Stakable</span>
                <input type="checkbox" class="checkbox checkbox-secondary" />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Burnable</span>
                <input type="checkbox" class="checkbox checkbox-secondary" />
              </label>
            </div>
          </div>
        </section>

        <section class="card w-96 bg-base-100 p-4 m-2">
          <div class="form-control tooltip w-full" data-tip="Available in Pro">
            <label class="label cursor-pointer">
              <span class="label-text">Dedicated Virtual Machine</span>
              <input type="checkbox" class="toggle" v-model="enableVM"/>
            </label>
          </div>

          <div class="" v-if="enableVM">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Token Name</span>
              </label>
              <CodeEditor/>
            </div>
          </div>
        </section>
      </div>
      <div class="flex justify-center p-4 w-full">
        <RouterLink class="btn btn-wide btn-neutral" to="create" disabled>Deploy</RouterLink>
      </div>
    </div>

    <!-- <div class="flex justify-center p-4 w-full">
      <BusinessList/>
    </div> -->
  </main>
</template>
