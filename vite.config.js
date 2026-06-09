import { resolve } from "path";
import { defineConfig } from 'vite'
 
export default defineConfig({

    root: "src",

    build: {
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
       // projects: revolve(__dirname, "src/pages/projectOne.html"),
      },
    },
    outDir: "../build",
  },

  base: '/',

});
 