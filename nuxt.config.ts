// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-electron"],
  ssr: false, // TODO might not be needed, need to fix build mode first
  app: { cdnURL: "./" }, // TODO might not be needed, need to fix build mode first
  electron: {
    disableDefaultOptions: true,
    build: [
      {
        entry: "electron/main.ts",
      },
    ],
  },
});
