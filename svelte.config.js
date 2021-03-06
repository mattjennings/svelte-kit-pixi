import adapter from '@sveltejs/adapter-auto'

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
          'pixi.js': '/src/lib/pixi.js',
        },
      },
    },
  },
}

export default config
