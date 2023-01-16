import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ["tailwind.config.js", "node_modules/**"],
    },
  	// rollupOptions: {
  	// 	plugins:
    //     [
    //       inject({
    //       	include: ['node_modules/@liskhq/lisk-api-client/dist-node/index.js'],
    //       	modules: { Buffer: ['buffer', 'buffer'], }
    //       })
    //     ],
  	// }
  },
  optimizeDeps: {
    include: ["tailwind-config"],
    // exclude: ["@liskhq/lisk-api-client"]
  },
  plugins: [
    vue(),
    nodePolyfills()
  ],
  resolve: {
    alias: {
      "tailwind-config": path.resolve(__dirname, "./tailwind.config.js"),
    },
  },
})
