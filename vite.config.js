import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-javascript-obfuscator'

export default defineConfig(({mode}) => ({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [
    react(),
    mode === 'production' &&
      obfuscator({
        options: {
          rotateUnicodeArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayThreshold: 0.8,
        },
      }),
  ].filter(Boolean),
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
      mangle: true,
      keep_fnames: false,
    },
  },
}))