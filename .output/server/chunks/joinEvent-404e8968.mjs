import { useMessage, NButton, NModal } from 'naive-ui';
import { defineComponent, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  __name: "joinEvent",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const showModal = ref(false);
    const id = useSquareStore().action.actionId;
    function submitForm() {
      const formData = new FormData();
      formData.append("id", id);
      axios({
        method: "post",
        url: api$1 + "/User/applyActivity",
        data: formData,
        headers: {
          token: sessionStorage.getItem("token"),
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        console.log(response.data);
        const Boolean = true;
        useSquareStore().Boolean = Boolean;
        message.success("\u53C2\u52A0\u6210\u529F\uFF01666");
      }).catch((errors) => {
        console.log(errors);
        message.error("\u672A\u53C2\u52A0\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u70B9\u51FB\uFF01");
      });
    }
    function cancelCallback() {
      message.success("111111");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_button = NButton;
      const _component_n_modal = NModal;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_n_button, {
        onClick: ($event) => showModal.value = true,
        type: "warning",
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u53C2\u52A0\u6D3B\u52A8 `);
          } else {
            return [
              createTextVNode(" \u53C2\u52A0\u6D3B\u52A8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: "\u53C2\u52A0\u6D3B\u52A8",
        content: "\u4F60\u786E\u8BA4\u53C2\u52A0\u8BE5\u6D3B\u52A8?",
        "positive-text": "\u786E\u8BA4",
        "negative-text": "\u7B97\u4E86",
        onPositiveClick: submitForm,
        onNegativeClick: cancelCallback
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Info/joinEvent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=joinEvent-404e8968.mjs.map
