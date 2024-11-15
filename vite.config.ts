import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    modules: {
      localsConvention: 'dashes',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/Header.scss";
          @import "@/assets/styles/Main.scss";
          @import "@/assets/styles/Footer.scss";
          @import "@/assets/styles/Modal.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
});
