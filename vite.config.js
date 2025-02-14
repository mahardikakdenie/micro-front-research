import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "OEXShared",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Button": "./src/components/Button.vue",
        "./HelloWorld": "./src/components/HelloWorld.vue",
        "./Page": "./src/components/Page.vue"
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
