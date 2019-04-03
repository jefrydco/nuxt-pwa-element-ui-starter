require("dotenv").config();

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: true,

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate(title) {
      if (title) {
        return `${title} - Nuxt PWA Element UI`;
      }
      return "Nuxt PWA Element UI";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ]
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://axios.nuxtjs.org/
    "@nuxtjs/axios",

    // https://nuxtjs.org/faq/cached-components/
    "@nuxtjs/component-cache",

    // https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",

    // https://pwa.nuxtjs.org/
    "@nuxtjs/pwa",

    // https://github.com/nuxt-community/sitemap-module
    "@nuxtjs/sitemap"

    // https://github.com/nuxt-community/sentry-module
    // "@nuxtjs/sentry",

    // https://github.com/nuxt-community/analytics-module
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  // https://nuxtjs.org/api/configuration-plugins
  plugins: ["~/plugins/element-ui"],

  // https://nuxtjs.org/api/configuration-css
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/styles/element-ui"
  ],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /node_modules/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};
