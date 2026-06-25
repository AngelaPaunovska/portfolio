import { resolve } from "path";
import { defineConfig } from 'vite';
 
export default defineConfig({
    root: "src",
    build: {
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
       projects: resolve(__dirname, "src/pages/projects.html"),
       project1: resolve(__dirname, "src/pages/project1.html"),
       project2: resolve(__dirname, "src/pages/project2.html"),
       project3: resolve(__dirname, "src/pages/project3.html"),
       project4: resolve(__dirname, "src/pages/project4.html"),
       project5: resolve(__dirname, "src/pages/project5.html"),
       project6: resolve(__dirname, "src/pages/project6.html"),
       
      },
    },
    outDir: "../build",
  },
  base: '/portfolio-a/',
});
