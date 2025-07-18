import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-omarfronten-shoppingcar-ze6o6g2nd4r.ws-eu120.gitpod.io'
    ]
  }
})
