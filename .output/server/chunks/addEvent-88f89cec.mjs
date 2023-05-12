import { useMessage, NButton, NModal, NCard, NForm, NFormItem, NInput, NInputNumber, NDatePicker } from 'naive-ui';
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
        message: "\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
      },
      time: {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "\u8BF7\u8F93\u5165\u5FD7\u613F\u65F6\u957F"
      },
      beginTime: {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
        message: "\u8BF7\u8F93\u5165 datetimeValue"
      },
      lateTime: {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
        message: "\u8BF7\u8F93\u5165 datetimeValue"
      },
      location: {
        required: true,
        trigger: ["blur", "input"],
        message: "\u8BF7\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"
      },
      maxpeople: {
        required: true,
        trigger: ["blur", "input"],
        message: "\u8BF7\u8F93\u5165\u4EBA\u6570"
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
      axios.post(api$1 + "/Admin/releaseActivity", data, {
        headers: { token: sessionStorage.getItem("token") }
      }).then((response) => {
        useSquareStore().squareStore = model.value;
        console.log(response.data);
        message.success("\u53D1\u5E03\u6210\u529F");
      }).catch((errors) => {
        console.log(errors);
        message.error("\u53D1\u5E03\u5931\u8D25");
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
      const res = await axios.post(api$1 + "/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(res.data.md5);
    }
    function cancelCallback() {
      message.warning("\u53D6\u6D88");
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
            _push2(` \u53D1\u5E03\u6D3B\u52A8 `);
          } else {
            return [
              createTextVNode(" \u53D1\u5E03\u6D3B\u52A8 ")
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
        "negative-text": "\u53D6\u6D88",
        onPositiveClick: submitCallback,
        onNegativeClick: cancelCallback
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, { title: "\u53D1\u5E03\u6D3B\u52A8" }, {
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
                          label: "\u6D3B\u52A8\u540D\u79F0",
                          path: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input, {
                                span: 12,
                                value: model.value.name,
                                "onUpdate:value": ($event) => model.value.name = $event,
                                placeholder: "\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input, {
                                  span: 12,
                                  value: model.value.name,
                                  "onUpdate:value": ($event) => model.value.name = $event,
                                  placeholder: "\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "\u5FD7\u613F\u65F6\u957F",
                          path: "time"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input_number, {
                                span: 12,
                                value: model.value.time,
                                "onUpdate:value": ($event) => model.value.time = $event,
                                placeholder: "\u8F93\u5165\u5FD7\u613F\u65F6\u957F"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input_number, {
                                  span: 12,
                                  value: model.value.time,
                                  "onUpdate:value": ($event) => model.value.time = $event,
                                  placeholder: "\u8F93\u5165\u5FD7\u613F\u65F6\u957F"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "\u5F00\u59CB\u65F6\u95F4",
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
                          label: "\u7ED3\u675F\u65F6\u95F4",
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
                          label: "\u6D3B\u52A8\u5730\u70B9",
                          path: "location"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input, {
                                span: 12,
                                value: model.value.location,
                                "onUpdate:value": ($event) => model.value.location = $event,
                                placeholder: "\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input, {
                                  span: 12,
                                  value: model.value.location,
                                  "onUpdate:value": ($event) => model.value.location = $event,
                                  placeholder: "\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "\u6700\u591A\u53C2\u4E0E\u4EBA\u6570",
                          path: "maxpeople"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_input, {
                                span: 12,
                                value: model.value.maxpeople,
                                "onUpdate:value": ($event) => model.value.maxpeople = $event,
                                placeholder: "\u8F93\u5165\u53C2\u4E0E\u4EBA\u6570"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_input, {
                                  span: 12,
                                  value: model.value.maxpeople,
                                  "onUpdate:value": ($event) => model.value.maxpeople = $event,
                                  placeholder: "\u8F93\u5165\u53C2\u4E0E\u4EBA\u6570"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_form_item, {
                            label: "\u6D3B\u52A8\u540D\u79F0",
                            path: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input, {
                                span: 12,
                                value: model.value.name,
                                "onUpdate:value": ($event) => model.value.name = $event,
                                placeholder: "\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "\u5FD7\u613F\u65F6\u957F",
                            path: "time"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input_number, {
                                span: 12,
                                value: model.value.time,
                                "onUpdate:value": ($event) => model.value.time = $event,
                                placeholder: "\u8F93\u5165\u5FD7\u613F\u65F6\u957F"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "\u5F00\u59CB\u65F6\u95F4",
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
                            label: "\u7ED3\u675F\u65F6\u95F4",
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
                            label: "\u6D3B\u52A8\u5730\u70B9",
                            path: "location"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input, {
                                span: 12,
                                value: model.value.location,
                                "onUpdate:value": ($event) => model.value.location = $event,
                                placeholder: "\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_form_item, {
                            label: "\u6700\u591A\u53C2\u4E0E\u4EBA\u6570",
                            path: "maxpeople"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_input, {
                                span: 12,
                                value: model.value.maxpeople,
                                "onUpdate:value": ($event) => model.value.maxpeople = $event,
                                placeholder: "\u8F93\u5165\u53C2\u4E0E\u4EBA\u6570"
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
                          label: "\u6D3B\u52A8\u540D\u79F0",
                          path: "name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              span: 12,
                              value: model.value.name,
                              "onUpdate:value": ($event) => model.value.name = $event,
                              placeholder: "\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "\u5FD7\u613F\u65F6\u957F",
                          path: "time"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input_number, {
                              span: 12,
                              value: model.value.time,
                              "onUpdate:value": ($event) => model.value.time = $event,
                              placeholder: "\u8F93\u5165\u5FD7\u613F\u65F6\u957F"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "\u5F00\u59CB\u65F6\u95F4",
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
                          label: "\u7ED3\u675F\u65F6\u95F4",
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
                          label: "\u6D3B\u52A8\u5730\u70B9",
                          path: "location"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              span: 12,
                              value: model.value.location,
                              "onUpdate:value": ($event) => model.value.location = $event,
                              placeholder: "\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "\u6700\u591A\u53C2\u4E0E\u4EBA\u6570",
                          path: "maxpeople"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              span: 12,
                              value: model.value.maxpeople,
                              "onUpdate:value": ($event) => model.value.maxpeople = $event,
                              placeholder: "\u8F93\u5165\u53C2\u4E0E\u4EBA\u6570"
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
              createVNode(_component_n_card, { title: "\u53D1\u5E03\u6D3B\u52A8" }, {
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
                        label: "\u6D3B\u52A8\u540D\u79F0",
                        path: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            span: 12,
                            value: model.value.name,
                            "onUpdate:value": ($event) => model.value.name = $event,
                            placeholder: "\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "\u5FD7\u613F\u65F6\u957F",
                        path: "time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input_number, {
                            span: 12,
                            value: model.value.time,
                            "onUpdate:value": ($event) => model.value.time = $event,
                            placeholder: "\u8F93\u5165\u5FD7\u613F\u65F6\u957F"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "\u5F00\u59CB\u65F6\u95F4",
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
                        label: "\u7ED3\u675F\u65F6\u95F4",
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
                        label: "\u6D3B\u52A8\u5730\u70B9",
                        path: "location"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            span: 12,
                            value: model.value.location,
                            "onUpdate:value": ($event) => model.value.location = $event,
                            placeholder: "\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_form_item, {
                        label: "\u6700\u591A\u53C2\u4E0E\u4EBA\u6570",
                        path: "maxpeople"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            span: 12,
                            value: model.value.maxpeople,
                            "onUpdate:value": ($event) => model.value.maxpeople = $event,
                            placeholder: "\u8F93\u5165\u53C2\u4E0E\u4EBA\u6570"
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

export { _sfc_main as default };
//# sourceMappingURL=addEvent-88f89cec.mjs.map
