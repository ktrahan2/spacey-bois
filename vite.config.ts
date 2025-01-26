import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@root': path.resolve(__dirname, './src'),
      '@testing': path.resolve(__dirname, './src/testing'),
    },
  },
});
