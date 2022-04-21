import adapter from '@sveltejs/adapter-auto'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),    
    vite: {
      optimizeDeps: {
        exclude: ['svelte-pixi']
      },      
      resolve: {
        alias: {
          'pixi.js': path.resolve(__dirname, 'src/lib/pixi.js'),
        },
      },
    },
  },
}

export default config
