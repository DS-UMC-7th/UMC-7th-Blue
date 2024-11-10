import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/auth': {
  //       // target: 'http://127.0.0.1:3000',
  //       target: 'http://localhost:3000',
  //       rewrite: (path) => path.replace(/^\/auth/, ''),
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //     }
  //   }
  // }
})
