// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mallaunivalle/', // este debe coincidir con el nombre del repo
  plugins: [react()],
});
