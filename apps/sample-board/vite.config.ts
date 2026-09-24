import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/brief-to-green/sample-board/',
  server: { port: 5173 },
})
