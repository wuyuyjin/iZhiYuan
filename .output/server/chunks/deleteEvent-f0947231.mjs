import { useMessage, NButton, NModal } from 'naive-ui';
import { defineComponent, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "deleteEvent",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const showModal = ref(false);
    function submitCallback() {
      message.success("1212121");
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
        type: "error",
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5220\u9664\u6D3B\u52A8 `);
          } else {
            return [
              createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: "\u786E\u8BA4",
        content: "\u4F60\u786E\u8BA4?",
        "positive-text": "\u786E\u8BA4",
        "negative-text": "\u7B97\u4E86",
        onPositiveClick: submitCallback,
        onNegativeClick: cancelCallback
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Info/deleteEvent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=deleteEvent-f0947231.mjs.map
