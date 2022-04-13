import adapter from "svelte-adapter-deno-deploy";
import path from 'path'
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      out: 'build',
      imports: {
        "TODOOOOOOO": "Fix this"
      }
    }),
    vite: {
      resolve: {
        alias: {
          svind: path.resolve("./src/lib"),
        },
      },
    },
  },
};

export default config;
