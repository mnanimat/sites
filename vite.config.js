import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        psicologia: resolve(__dirname, 'psicologia/index.html'),
        imoveis: resolve(__dirname, 'imoveis/index.html'),
        escola: resolve(__dirname, 'escola/index.html'),
        restauranteLuxo: resolve(__dirname, 'restaurante-luxo/index.html'),
        lanchonete: resolve(__dirname, 'lanchonete/index.html'),
        propostaLocal: resolve(__dirname, 'proposta-local/index.html')
      }
    }
  }
});
