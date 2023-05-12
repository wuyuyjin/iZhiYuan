import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import Login from "./login-8d4ff9c3.js";
import "./nuxt-link-15b2078b.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "vue-router";
import "defu";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "h3";
import "@css-render/vue3-ssr";
import "naive-ui";
import "@vee-validate/zod";
import "vee-validate";
import "zod";
import "./api-e01fa6ec.js";
import "axios";
import "./squareStore-e7227acb.js";
import "./type-ec9b93da.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Login, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-bf45c86f.js.map
