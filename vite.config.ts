import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.VITE_API_TARGET || 'https://api.gwanaklab.com';

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/v1': {
          // 로컬 서버를 쓸 경우: VITE_API_TARGET=http://localhost:8000 yarn dev
          target: apiTarget,
          changeOrigin: true,
          secure: apiTarget.startsWith('https://'),
        },
      },
    },
  };
});
