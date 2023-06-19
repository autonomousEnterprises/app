<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';
import { useMarketplaceStore } from '../../stores/marketplace';
import { useUserStore } from '../../stores/user';

const route = useRoute()

const userStore = useUserStore()

const marketplaceStore = useMarketplaceStore()
const business = marketplaceStore.businesses.find(b => b.id === route.params.business)
</script>

<template>
  <div class="-mt-12">
    <div class="w-screen h-64 bg-base-200">
      <img :src="business.banner" class="w-full h-[400px] object-cover" v-if="business.banner">
    </div>
    <section class="md:px-24 px-4">
      <div class="avatar pt-16">
        <div class="mask mask-squircle w-32 h-32">
          <img :src="business.logo" v-if="business-logo"/>
          <img :src="`https://api.dicebear.com/6.x/shapes/svg?seed=${business.name}`" v-else/>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center">
        <div class="">
          <h1 class="!text-left">{{ business.name }}</h1>
          <h2 class="!text-left !font-normal !italic -mt-8">{{ business.tagline }}</h2>
          <div class="pb-12">
            <p>{{ business.description }}</p>
          </div>
        </div>
        <div class="pb-4 -mt-8 flex flex-col items-center justify-center w-full md:w-auto">
          <div class="stats shadow stats-vertical lg:stats-horizontal">
            <div class="stat place-items-center">
              <div class="stat-title">Follower</div>
              <div class="stat-desc">31K</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Token Holder</div>
              <div class="stat-desc text-secondary">4,200</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Total Token Supply</div>
              <div class="stat-desc">1,200</div>
            </div>
          </div>
          <div class="text-base-content italic pt-2 w-full flex justify-around">
            <span class="stat-title">@{{ business.id }}</span>
            <span class="stat-title">Token: {{ business.token }}</span>
            <span class="stat-title">Network (VM): {{ business.vm }}</span>
          </div>
          <div class="join join-horizontal mt-2">
            <button class="btn join-item">Follow</button>
            <button class="btn join-item">Swap</button>
            <button class="btn join-item">Buy</button>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center py-32 w-full bg-base-100 md:px-24 px-4" v-if="business.features">
      <div class="max-w-[700px] text-center">
        <p class="mb-6 font-bold uppercase text-primary dark:text-primary-400">
          Features
        </p>
        <h2 class="mb-6 text-3xl font-bold">{{ business.features.heading }}</h2>
        <p class="mb-16">
          {{ business.features.content }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center">

        <div class="mb-12 md:w-1/4 px-4" v-for="feature in business.features.list">
          <div class="flex">
            <div class="shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-3 h-5 w-5 text-success">
                <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-2 grow">
              <p class="mb-1 font-bold">{{ feature.heading }}</p>
              <p class="">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- <section class="mb-32">
      <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/154.jpg')] h-[500px]"></div>
        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="text-center">
            <div
              class="mt-[-170px] block rounded-lg class px-6 py-12 shadow backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
              <h1 class="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
                The best offer on the market <br /><span class="text-danger dark:text-danger-400">for your business</span>
              </h1>
              <a class="btn" href="#!">Get started
              </a>
            </div>
          </div>
        </div>
      </section> -->
    <section class="mb-32 pt-12 text-center md:text-left">
      <div class="flex flex-wrap justify-center" v-if="business.social">
        <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-10/12">
          <div class="">
            <div class="mb-6 md:mb-0 flex flex-col items-center">
              <h2 class="text-3xl font-bold pb-8">
                Let's stay in touch
              </h2>
                <div class="join pb-8 pt-4">
                  <input class="input input-bordered join-item" placeholder="Email"/>
                  <button class="btn btn-primary join-item rounded-r-full">Subscribe</button>
                </div>
              <h2 class="text-primary">Join our social media</h2>
            </div>

            <div class="mb-6 md:mb-0 md:ml-auto w-full flex justify-center">
              <!-- Facebook -->
              <a href="" target="_blank" data-te-ripple-init data-te-ripple-color="light" v-if="business.social.find(b => b.startsWith('https://facebook.com/'))"
                class="mb-2 inline-block rounded-full bg-[#1877f2] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-4 w-4">
                  <path fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>

              <!-- Twitter -->
              <a href="" target="_blank" data-te-ripple-init data-te-ripple-color="light" v-if="business.social.find(b => b.startsWith('https://twitter.com/'))"
                class="mb-2 inline-block rounded-full bg-[#1da1f2] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-4">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>

              <!-- Google -->
              <a href="" target="_blank" data-te-ripple-init data-te-ripple-color="light" v-if="business.social.find(b => b.startsWith('https://google.com/'))"
                class="mb-2 inline-block rounded-full bg-[#ea4335] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="h-4 w-4">
                  <path fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </a>

              <!-- Instagram -->
              <a href="" target="_blank" data-te-ripple-init data-te-ripple-color="light" v-if="business.social.find(b => b.startsWith('https://instagram.com/'))"
                class="mb-2 inline-block rounded-full bg-[#c13584] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4">
                  <path fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              <!-- Linkedin -->
              <a href="" target="_blank" data-te-ripple-init data-te-ripple-color="light" v-if="business.social.find(b => b.startsWith('https://linkedin.com/in/'))"
                class="mb-2 inline-block rounded-full bg-[#0077b5] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>

              <!-- Pinterest -->
              <a href="" target="_blank" data-te-ripple-init data-te-ripple-color="light" v-if="business.social.find(b => b.startsWith('https://pinterest.com'))"
                class="mb-2 inline-block rounded-full bg-[#e60023] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-4 w-4">
                  <path fill="currentColor"
                    d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer items-center p-4 bg-neutral text-neutral-content absolute bottom-0">
      <div class="items-center grid-flow-col">
        <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        <p class="flex">Powered with
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e01b24" class="lucide lucide-heart mx-1"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          by
          <a class="ml-1 underline" href="https://ecosis.network" target="_blank">ecosis Network Ltd</a>
        </p>
      </div>
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end flex items-center">
        <p>Access benefitials from this business</p>
        <button class="btn btn-warning" @click="userStore.login()" v-if="!userStore.authenticated">Login</button>
        <button class="btn btn-warning" @click="userStore.logout()" v-if="userStore.authenticated">Logout</button>
      </div>
      <!-- <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </div> -->
    </footer>
  </div>
</template>
