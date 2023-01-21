// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vable/nuxt.emotion"],
  build: {
    transpile: ["motion/vue", "@motionone/vue"],
  },
});
