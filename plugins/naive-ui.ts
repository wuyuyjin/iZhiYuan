import {setup} from "@css-render/vue3-ssr";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) {
        const {collect} = setup(nuxtApp.vueApp);
        nuxtApp.ssrContext!.renderMeta = () => {
            return {
                headTags: collect(),
            };
        };
    }
});