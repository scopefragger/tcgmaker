import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tcgmaker/', // GitHub Pages project repository path
  server: {
    proxy: {
      '/api/pokemon': {
        target: 'https://api.pokemontcg.io/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pokemon/, '')
      }
    }
  }
})



