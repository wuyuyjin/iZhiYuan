import { useMessage, NButton, NModal, NInput } from "naive-ui";
import { defineComponent, ref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useSquareStore } from "./squareStore-e7227acb.js";
import axios from "axios";
import { a as api } from "./api-e01fa6ec.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
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
import "ufo";
import "@css-render/vue3-ssr";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signIn",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const showModal = ref(false);
    const id = useSquareStore().action.actionId;
    const SinginCode = ref(null);
    function submitCallback() {
      const formData = new FormData();
      formData.append("SinginCode", SinginCode.value);
      formData.append("id", id);
      axios.post(api + "/User/singinActivity", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "token": sessionStorage.getItem("token")
        }
      }).then((response) => {
        console.log(response);
        const Boolean = true;
        useSquareStore().Boolean = Boolean;
        message.success("签到成功！666");
      }).catch((errors) => {
        console.log(errors);
        message.error("签到失败，请联系管理员！");
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
        type: "info",
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 签到活动 `);
          } else {
            return [
              createTextVNode(" 签到活动 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: "签到",
        content: "你确认签到?",
        "positive-text": "确认",
        "negative-text": "取消",
        onPositiveClick: submitCallback,
        onNegativeClick: cancelCallback
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 请让管理员给你签到验证码：`);
            _push2(ssrRenderComponent(_component_NInput, {
              value: SinginCode.value,
              "onUpdate:value": ($event) => SinginCode.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" 请让管理员给你签到验证码："),
              createVNode(_component_NInput, {
                value: SinginCode.value,
                "onUpdate:value": ($event) => SinginCode.value = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Info/signIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=signIn-1bc489ea.js.map
