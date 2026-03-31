import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        // 로컬 서버를 쓸 경우: VITE_API_TARGET=http://localhost:8000 yarn dev
        target: process.env.VITE_API_TARGET || 'https://api.gwanaklab.com',
        changeOrigin: true,
        secure: (process.env.VITE_API_TARGET || 'https://api.gwanaklab.com').startsWith(
          'https://',
        ),
      },
    },
  },
});
