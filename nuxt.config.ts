// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-electron"],

  ssr: false, // #43
  electron: {
    build: [
      {
        entry: "electron/main.ts",
      },
    ],
  },
});
