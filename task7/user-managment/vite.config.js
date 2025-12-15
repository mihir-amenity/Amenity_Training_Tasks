import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
    allowedHosts: ["*.ngrok-free.dev", "*.ngrok-free.app"],
    proxy: {
      "/api": {
        target: 'https://nonsolidified-annika-criminally.ngrok-free.dev',
        changeOrigin: true,
        secure: false,
      },
    },
  },
   server: {
    allowedHosts: [
      'nonsolidified-annika-criminally.ngrok-free.dev',
      'https://nonsolidified-annika-criminally.ngrok-free.dev'
    ]
  },
  plugins: [react()],
   
})
