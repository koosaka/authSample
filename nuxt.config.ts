// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/**/**": { ssr: false },
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "",
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "",
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
    },
  },
  css: ["@/assets/scss/common.scss"],
});
