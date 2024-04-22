import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const resolve = (url: string) => path.resolve(__dirname, url);

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve('src'),
        '#': resolve('types'),
      },
    },
  };
});
