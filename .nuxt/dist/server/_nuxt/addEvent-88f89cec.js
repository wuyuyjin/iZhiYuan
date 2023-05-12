import { useMessage, NButton, NModal, NCard, NForm, NFormItem, NInput, NInputNumber, NDatePicker } from "naive-ui";
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
  __name: "addEvent",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const model = ref({
      name: "",
      time: "",
      beginTime: null,
      lateTime: null,
      location: "",
      maxpeople: ""
    });
    const rules = ref({
      name: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入活动名称"
      },
      time: {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "请输入志愿时长"
      },
      beginTime: {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
        message: "请输入 datetimeValue"
      },
      lateTime: {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
        message: "请输入 datetimeValue"
      },
      location: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入活动地点"
      },
      maxpeople: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入人数"
      }
    });
    const message = useMessage();
    const showModal = ref(false);
    function submitCallback() {
      const date1 = model.value.beginTime;
      const date2 = model.value.lateTime;
      const beginTime = new Date(date1);
      const lateTime = new Date(date2);
      console.log(JSON.stringify(beginTime.toLocaleString()));
      const data = {
        name: model.value.name,
        time: model.value.time,
        beginTime: beginTime.toLocaleString(),
        lateTime: lateTime.toLocaleString(),
        location: model.value.location,
        maxpeople: model.value.maxpeople
      };
      axios.post(api + "/Admin/releaseActivity", data, {
        headers: { token: sessionStorage.getItem("token") }
      }).then((response) => {
        useSquareStore().squareStore = model.value;
        console.log(response.data);
        message.success("发布成功");
      }).catch((errors) => {
        console.log(errors);
        message.error("发布失败");
      });
      if (!selectedFile) {
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("name", model.value.name);
      uploadImg(formData);
    }
    let selectedFile = null;
    function onFileSelected(e) {
      var _a;
      selectedFile = (_a = e.target.files) == null ? void 0 : _a[0];
    }
    async function uploadImg(formData) {
      const res = await axios.post(api + "/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(res.data.md5);
    }
    function cancelCallback() {
      message.warning("取消");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_button = NButton;
      const _component_n_modal = NModal;
      const _component_n_card = NCard;
      const _component_n_form = NForm;
      const _component_n_form_item = NFormItem;
      const _component_n_input = NInput;
      const _component_n_input_number = NInputNumber;
      const _component_n_date_picker = NDatePicker;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_n_button, {
        onClick: ($event) => showModal.value = true,
        type: "success",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 发布活动 `);
          } else {
            return [
              createTextVNode(" 发布活动 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": ($event) => showModal.value = $event,
        preset: "dialog",
        title: "确认",
        content: "你确认?",
        "positive-text": "确认",
        "negative-text": "取消",
        onPositiveClick: submitCallback,
        onNegativeClick: cancelCallback
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, { title: "发布活动" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><input type="file" class="upload" accept="image/png,image/jpeg,image/gif,image/jpg"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_n_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    model: model.value.value,
                    rules: rules.value,
                    "label-placement": "left",
                    "label-width": "auto",
                    "require-mark-placement": "right-hanging",
                    size: "medium",
                    style: {
                      maxWidth: "640px"
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "活动名称",
                          path: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input, {
                                span: 12,
                                value: model.value.name,
                                "onUpdate:value": ($event) => model.value.name = $event,
                                placeholder: "输入活动名称"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input, {
                                  span: 12,
                                  value: model.value.name,
                                  "onUpdate:value": ($event) => model.value.name = $event,
                                  placeholder: "输入活动名称"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "志愿时长",
                          path: "time"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input_number, {
                                span: 12,
                                value: model.value.time,
                                "onUpdate:value": ($event) => model.value.time = $event,
                                placeholder: "输入志愿时长"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input_number, {
                                  span: 12,
                                  value: model.value.time,
                                  "onUpdate:value": ($event) => model.value.time = $event,
                                  placeholder: "输入志愿时长"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "开始时间",
                          path: "beginTime"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_date_picker, {
                                span: 12,
                                value: model.value.beginTime,
                                "onUpdate:value": ($event) => model.value.beginTime = $event,
                                type: "datetime"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_date_picker, {
                                  span: 12,
                                  value: model.value.beginTime,
                                  "onUpdate:value": ($event) => model.value.beginTime = $event,
                                  type: "datetime"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "结束时间",
                          path: "lateTime"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_date_picker, {
                                span: 12,
                                value: model.value.lateTime,
                                "onUpdate:value": ($event) => model.value.lateTime = $event,
                                type: "datetime"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_date_picker, {
                                  span: 12,
                                  value: model.value.lateTime,
                                  "onUpdate:value": ($event) => model.value.lateTime = $event,
                                  type: "datetime"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "活动地点",
                          path: "location"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input, {
                                span: 12,
                                value: model.value.location,
                                "onUpdate:value": ($event) => model.value.location = $event,
                                placeholder: "输入活动地点"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input, {
                                  span: 12,
                                  value: model.value.location,
                                  "onUpdate:value": ($event) => model.value.location = $event,
                                  placeholder: "输入活动地点"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "最多参与人数",
                          path: "maxpeople"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input, {
                                span: 12,
                                value: model.value.maxpeople,
                                "onUpdate:value": ($event) => model.value.maxpeople = $event,
                                placeholder: "输入参与人数"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input, {
                                  span: 12,
                                  value: model.value.maxpeople,
                                  "onUpdate:value": ($event) => model.value.maxpeople = $event,
                                  placeholder: "输入参与人数"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_form_item, {
                            label: "活动名称",
                            path: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input, {
                                span: 12,
                                value: model.value.name,
                                "onUpdate:value": ($event) => model.value.name = $event,
                                placeholder: "输入活动名称"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "志愿时长",
                            path: "time"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input_number, {
                                span: 12,
                                value: model.value.time,
                                "onUpdate:value": ($event) => model.value.time = $event,
                                placeholder: "输入志愿时长"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "开始时间",
                            path: "beginTime"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_date_picker, {
                                span: 12,
                                value: model.value.beginTime,
                                "onUpdate:value": ($event) => model.value.beginTime = $event,
                                type: "datetime"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "结束时间",
                            path: "lateTime"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_date_picker, {
                                span: 12,
                                value: model.value.lateTime,
                                "onUpdate:value": ($event) => model.value.lateTime = $event,
                                type: "datetime"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "活动地点",
                            path: "location"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input, {
                                span: 12,
                                value: model.value.location,
                                "onUpdate:value": ($event) => model.value.location = $event,
                                placeholder: "输入活动地点"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "最多参与人数",
                            path: "maxpeople"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input, {
                                span: 12,
                                value: model.value.maxpeople,
                                "onUpdate:value": ($event) => model.value.maxpeople = $event,
                                placeholder: "输入参与人数"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("input", {
                        type: "file",
                        class: "upload",
                        onChange: onFileSelected,
                        ref: "inputer",
                        accept: "image/png,image/jpeg,image/gif,image/jpg"
                      }, null, 544)
                    ]),
                    createVNode(_component_n_form, {
                      ref_key: "formRef",
                      ref: formRef,
                      model: model.value.value,
                      rules: rules.value,
                      "label-placement": "left",
                      "label-width": "auto",
                      "require-mark-placement": "right-hanging",
                      size: "medium",
                      style: {
                        maxWidth: "640px"
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form_item, {
                          label: "活动名称",
                          path: "name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              span: 12,
                              value: model.value.name,
                              "onUpdate:value": ($event) => model.value.name = $event,
                              placeholder: "输入活动名称"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "志愿时长",
                          path: "time"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input_number, {
                              span: 12,
                              value: model.value.time,
                              "onUpdate:value": ($event) => model.value.time = $event,
                              placeholder: "输入志愿时长"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "开始时间",
                          path: "beginTime"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_date_picker, {
                              span: 12,
                              value: model.value.beginTime,
                              "onUpdate:value": ($event) => model.value.beginTime = $event,
                              type: "datetime"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "结束时间",
                          path: "lateTime"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_date_picker, {
                              span: 12,
                              value: model.value.lateTime,
                              "onUpdate:value": ($event) => model.value.lateTime = $event,
                              type: "datetime"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "活动地点",
                          path: "location"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              span: 12,
                              value: model.value.location,
                              "onUpdate:value": ($event) => model.value.location = $event,
                              placeholder: "输入活动地点"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "最多参与人数",
                          path: "maxpeople"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              span: 12,
                              value: model.value.maxpeople,
                              "onUpdate:value": ($event) => model.value.maxpeople = $event,
                              placeholder: "输入参与人数"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["model", "rules"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_card, { title: "发布活动" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("input", {
                      type: "file",
                      class: "upload",
                      onChange: onFileSelected,
                      ref: "inputer",
                      accept: "image/png,image/jpeg,image/gif,image/jpg"
                    }, null, 544)
                  ]),
                  createVNode(_component_n_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    model: model.value.value,
                    rules: rules.value,
                    "label-placement": "left",
                    "label-width": "auto",
                    "require-mark-placement": "right-hanging",
                    size: "medium",
                    style: {
                      maxWidth: "640px"
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_form_item, {
                        label: "活动名称",
                        path: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            span: 12,
                            value: model.value.name,
                            "onUpdate:value": ($event) => model.value.name = $event,
                            placeholder: "输入活动名称"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "志愿时长",
                        path: "time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input_number, {
                            span: 12,
                            value: model.value.time,
                            "onUpdate:value": ($event) => model.value.time = $event,
                            placeholder: "输入志愿时长"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "开始时间",
                        path: "beginTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_date_picker, {
                            span: 12,
                            value: model.value.beginTime,
                            "onUpdate:value": ($event) => model.value.beginTime = $event,
                            type: "datetime"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "结束时间",
                        path: "lateTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_date_picker, {
                            span: 12,
                            value: model.value.lateTime,
                            "onUpdate:value": ($event) => model.value.lateTime = $event,
                            type: "datetime"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "活动地点",
                        path: "location"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            span: 12,
                            value: model.value.location,
                            "onUpdate:value": ($event) => model.value.location = $event,
                            placeholder: "输入活动地点"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "最多参与人数",
                        path: "maxpeople"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            span: 12,
                            value: model.value.maxpeople,
                            "onUpdate:value": ($event) => model.value.maxpeople = $event,
                            placeholder: "输入参与人数"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model", "rules"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Info/addEvent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=addEvent-88f89cec.js.map
