import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "D:/NUXT3/iZhiYuan/node_modules/.pnpm/nuxt@3.4.2_@types+node@18.0.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}