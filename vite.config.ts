import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import path from "path";
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import inject from '@rollup/plugin-inject'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: { https: true },
  build: {
    commonjsOptions: {
      include: ["tailwind.config.js", "node_modules/**"],
    },
  	rollupOptions: {
  		plugins:
        [
          inject({
          	include: ['node_modules/@liskhq/lisk-api-client/dist-node/index.js', 'node_modules/buffer/index.js'],
          	modules: { Buffer: ['buffer', 'Buffer'], }
          })
        ],
  	}
  },
  optimizeDeps: {
    include: ["tailwind-config"],
      esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        // GlobalsPolyfills({
        //   buffer: true,
        // }),
      ],
    }
  // exclude: ["@liskhq/lisk-api-client"]
  },
  plugins: [
    vue(),
    nodePolyfills(),
    mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Eco',
        short_name: 'Eco',
        description: 'ecosis Network Wallet',
        theme_color: 'rgb(var(--color-primary) / <alpha-value>)',
        icons: [
          {
            src: 'eco.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'eco.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "tailwind-config": path.resolve(__dirname, "./tailwind.config.js"),
      "buffer": "buffer"
    },
  },
})
