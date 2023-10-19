import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3030', // your API server
        changeOrigin: false,
        secure: false,
        //rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
 
})

// module.exports = {
  
//   }
