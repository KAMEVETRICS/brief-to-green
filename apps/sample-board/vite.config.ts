import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/brief-to-green/sample-board/',
  plugins: [react()],
  server: { port: 5173 },
})
