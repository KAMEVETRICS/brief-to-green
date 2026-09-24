import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/brief-to-green/brief-green/',
  plugins: [react()],
  server: { port: 5174 },
})
