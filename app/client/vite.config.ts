import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  server: {
    proxy: {
      '/socket.io' : {
        target: 'ws://localhost:8080',
        ws: true
      }
    }
  }

});
