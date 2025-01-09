import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import vercel from 'vite-plugin-vercel'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), vercel()],
})