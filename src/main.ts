import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
// import { createAuth0 } from '@auth0/auth0-vue';
import { auth0 } from './utils/auth0';
// import VueGravatar from "vue3-gravatar";

// import { Buffer } from "buffer";
//
// window.Buffer = Buffer;

createApp(App)
  .use(router)
  .use(createPinia())
  // .use(auth0)
  // .use(VueGravatar)
  .mount('#app')
