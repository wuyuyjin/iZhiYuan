import { useMessage, NButton, NModal, NInput } from 'naive-ui';
import { defineComponent, ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSquareStore } from './squareStore-e7227acb.mjs';
import axios from 'axios';
import { a as api$1 } from './api-e01fa6ec.mjs';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'defu';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'h3';
import 'ufo';
import '@css-render/vue3-ssr';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signOut",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const showModal = ref(false);
    const id = useSquareStore().action.actionId;
    const SingOutCode = ref(null);
    function submitCallback() {
      const formData = new FormData();
      formData.append("SingOutCode", SingOutCode.value);
      formData.append("id", id);
      axios.post(api$1 + "/User/singoutActivity", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "token": sessionStorage.getItem("token")
        }
      }).then((response) => {
        console.log(response);
        const Boolean = true;
        useSquareStore().Boolean = Boolean;
        message.success("\u7B7E\u9000\u6210\u529F\uFF01666");
      }).catch((errors) => {
        console.log(errors);
        message.error("\u7B7E\u9000\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01");
      });
    }
    function cancelCallback() {
      message.success("111111");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_button = NButton;
      const _component_n_modal = NModal;
      const _component_NInput = NInput;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_n_button, {
        onClick: ($event) => showModal.value = true,
        type: "error",
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7B7E\u9000\u6D3B\u52A8 `);
          } else {
            return [
              createTextVNode(" \u7B7E\u9000\u6D3B\u52A8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: "\u7B7E\u9000",
        content: "\u4F60\u786E\u8BA4\u7B7E\u9000?",
        "positive-text": "\u786E\u8BA4",
        "negative-text": "\u53D6\u6D88",
        onPositiveClick: submitCallback,
        onNegativeClick: cancelCallback
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8BF7\u8BA9\u7BA1\u7406\u5458\u7ED9\u4F60\u7B7E\u9000\u9A8C\u8BC1\u7801\uFF1A`);
            _push2(ssrRenderComponent(_component_NInput, {
              value: SingOutCode.value,
              "onUpdate:value": ($event) => SingOutCode.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" \u8BF7\u8BA9\u7BA1\u7406\u5458\u7ED9\u4F60\u7B7E\u9000\u9A8C\u8BC1\u7801\uFF1A"),
              createVNode(_component_NInput, {
                value: SingOutCode.value,
                "onUpdate:value": ($event) => SingOutCode.value = $event
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Info/signOut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signOut-a7815586.mjs.map
