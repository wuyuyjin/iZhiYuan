import { useMessage, NButton, NModal } from "naive-ui";
import { defineComponent, ref, withCtx, createTextVNode, useSSRContext } from "vue";
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
        url: api + "/User/applyActivity",
        data: formData,
        headers: {
          token: sessionStorage.getItem("token"),
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        console.log(response.data);
        const Boolean = true;
        useSquareStore().Boolean = Boolean;
        message.success("参加成功！666");
      }).catch((errors) => {
        console.log(errors);
        message.error("未参加成功，请重新点击！");
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
            _push2(` 参加活动 `);
          } else {
            return [
              createTextVNode(" 参加活动 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: "参加活动",
        content: "你确认参加该活动?",
        "positive-text": "确认",
        "negative-text": "算了",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=joinEvent-404e8968.js.map
