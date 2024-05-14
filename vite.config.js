import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import {resolve} from 'path';
export default defineConfig( {
    root:"./src",
    publicDir:"../public",
    build:{
        outDir:"../dist",
        rollupOptions:{
          input:{
              main:resolve(__dirname,'src/index.html'),
              catalog:resolve(__dirname,'src/catalog.html'),
              form:resolve(__dirname,'src/form.html'),
          },
        },
    },
    plugins: [
      ViteImageOptimizer({
          png: {
              quality: 80,
            },
            jpeg: {
              quality: 80,
            },
            jpg: {
              quality: 80,
            },
            webp: {
              quality: 80,
            },
            avif: {
              quality: 60,
            },
      }),
  ],
})