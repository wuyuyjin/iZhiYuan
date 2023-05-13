// 6666,真的666，这样都有报错，还能跑起来
// @ts-ignore
import Components from "unplugin-vue-components/vite";
// @ts-ignore
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { NuxtConfig } from "@nuxt/schema";
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

export default defineNuxtConfig({
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
    }, ssr: false,
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        '@pinia/nuxt'
    ],
})