import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/', // 👈 this is the only addition
  base: '/learnchess/',
  plugins: [react()],
})
