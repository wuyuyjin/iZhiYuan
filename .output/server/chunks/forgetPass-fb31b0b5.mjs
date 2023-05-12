import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, useSSRContext } from 'vue';
import { NCard, NSpace, NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useField } from 'vee-validate';
import * as zod from 'zod';
import { _ as _export_sfc } from './server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'defu';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'h3';
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

const _sfc_main = {
  __name: "forgetPass",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const validationSchema = toTypedSchema(
      zod.object({
        email: zod.string().nonempty("This is required").email({ message: "Must be a valid email" }),
        password: zod.string().nonempty("This is required").min(6, { message: "Too short" }),
        confirmPassword: zod.string().nonempty("This is required").min(6, { message: "Too short" }),
        code: zod.string().nonempty("This is required").min(4, { message: "\u8BF7\u8F93\u5165\u56DB\u4F4D\u9A8C\u8BC1\u7801" })
      })
    );
    const { handleSubmit, errors } = useForm({
      validationSchema
    });
    const { value: email } = useField("email");
    const { value: password } = useField("password");
    const { value: confirmPassword } = useField("confirmPassword");
    const { value: code } = useField("code");
    function sendCode() {
      if (email.value === "") {
        alert("\u8BF7\u5148\u8F93\u5165\u90AE\u7BB1\uFF01");
      } else {
        alert("\u53D1\u9001\u6210\u529F\uFF01");
      }
    }
    const onSubmit = handleSubmit((values) => {
      if (password.value === confirmPassword.value) {
        alert(JSON.stringify(values, null, 4));
      } else {
        alert("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u6837\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u5BC6\u7801");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = NCard;
      const _component_n_space = NSpace;
      const _component_n_form = NForm;
      const _component_n_form_item = NFormItem;
      const _component_NInput = NInput;
      const _component_NButton = NButton;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-black" }, _attrs))} data-v-14655c26>`);
      _push(ssrRenderComponent(_component_n_card, {
        title: "\u5FD8\u8BB0\u5BC6\u7801",
        class: "container mx-auto box-border h-96 w-96 login rounded-lg"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_space, { justify: "space-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/login" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7528\u6237\u767B\u5F55`);
                      } else {
                        return [
                          createTextVNode("\u7528\u6237\u767B\u5F55")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7BA1\u7406\u5458\u767B\u5F55`);
                      } else {
                        return [
                          createTextVNode("\u7BA1\u7406\u5458\u767B\u5F55")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/admitRegister" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7BA1\u7406\u5458\u6CE8\u518C`);
                      } else {
                        return [
                          createTextVNode("\u7BA1\u7406\u5458\u6CE8\u518C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/register" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7528\u6237\u6CE8\u518C`);
                      } else {
                        return [
                          createTextVNode("\u7528\u6237\u6CE8\u518C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/Login/login" }, {
                      default: withCtx(() => [
                        createTextVNode("\u7528\u6237\u767B\u5F55")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                      default: withCtx(() => [
                        createTextVNode("\u7BA1\u7406\u5458\u767B\u5F55")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/admitRegister" }, {
                      default: withCtx(() => [
                        createTextVNode("\u7BA1\u7406\u5458\u6CE8\u518C")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/register" }, {
                      default: withCtx(() => [
                        createTextVNode("\u7528\u6237\u6CE8\u518C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_space, { justify: "space-between" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, { to: "/Login/login" }, {
                    default: withCtx(() => [
                      createTextVNode("\u7528\u6237\u767B\u5F55")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                    default: withCtx(() => [
                      createTextVNode("\u7BA1\u7406\u5458\u767B\u5F55")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/admitRegister" }, {
                    default: withCtx(() => [
                      createTextVNode("\u7BA1\u7406\u5458\u6CE8\u518C")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/register" }, {
                    default: withCtx(() => [
                      createTextVNode("\u7528\u6237\u6CE8\u518C")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_space, { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    "label-placement": "left",
                    "label-width": 70,
                    onSubmit: unref(onSubmit)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "email",
                          path: "email"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NInput, {
                                value: unref(email),
                                "onUpdate:value": ($event) => isRef(email) ? email.value = $event : null,
                                placeholder: "Email",
                                type: "email",
                                name: "email"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NInput, {
                                  value: unref(email),
                                  "onUpdate:value": ($event) => isRef(email) ? email.value = $event : null,
                                  placeholder: "Email",
                                  type: "email",
                                  name: "email"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-sm text-red-700" data-v-14655c26${_scopeId3}>${ssrInterpolate(unref(errors).email)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "\u5BC6\u7801",
                          path: "password"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NInput, {
                                value: unref(password),
                                "onUpdate:value": ($event) => isRef(password) ? password.value = $event : null,
                                placeholder: "password",
                                type: "password",
                                name: "password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NInput, {
                                  value: unref(password),
                                  "onUpdate:value": ($event) => isRef(password) ? password.value = $event : null,
                                  placeholder: "password",
                                  type: "password",
                                  name: "password"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-sm text-red-700" data-v-14655c26${_scopeId3}>${ssrInterpolate(unref(errors).password)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "\u786E\u8BA4\u5BC6\u7801",
                          path: "password"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NInput, {
                                value: unref(confirmPassword),
                                "onUpdate:value": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                placeholder: "confirmPassword",
                                type: "password",
                                name: "confirmPassword"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NInput, {
                                  value: unref(confirmPassword),
                                  "onUpdate:value": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                  placeholder: "confirmPassword",
                                  type: "password",
                                  name: "confirmPassword"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-sm text-red-700" data-v-14655c26${_scopeId3}>${ssrInterpolate(unref(errors).confirmPassword)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          path: "code",
                          label: "\u9A8C\u8BC1\u7801"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NInput, {
                                value: unref(code),
                                "onUpdate:value": ($event) => isRef(code) ? code.value = $event : null,
                                placeholder: "\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801",
                                type: "text",
                                name: "code"
                              }, null, _parent5, _scopeId4));
                              _push5(` \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 `);
                              _push5(ssrRenderComponent(_component_NButton, {
                                type: "info",
                                onClick: sendCode,
                                class: "rounded-lg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u53D1\u9001\u9A8C\u8BC1\u7801`);
                                  } else {
                                    return [
                                      createTextVNode("\u53D1\u9001\u9A8C\u8BC1\u7801")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NInput, {
                                  value: unref(code),
                                  "onUpdate:value": ($event) => isRef(code) ? code.value = $event : null,
                                  placeholder: "\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801",
                                  type: "text",
                                  name: "code"
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode(" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 "),
                                createVNode(_component_NButton, {
                                  type: "info",
                                  onClick: sendCode,
                                  class: "rounded-lg"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u53D1\u9001\u9A8C\u8BC1\u7801")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-sm text-red-700" data-v-14655c26${_scopeId3}>${ssrInterpolate(unref(errors).code)}</div><button class="bg-green-500/100 rounded-lg w-1/4 h-10 text-white" data-v-14655c26${_scopeId3}> \u6CE8\u518C </button>`);
                      } else {
                        return [
                          createVNode(_component_n_form_item, {
                            label: "email",
                            path: "email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NInput, {
                                value: unref(email),
                                "onUpdate:value": ($event) => isRef(email) ? email.value = $event : null,
                                placeholder: "Email",
                                type: "email",
                                name: "email"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).email), 1),
                          createVNode(_component_n_form_item, {
                            label: "\u5BC6\u7801",
                            path: "password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NInput, {
                                value: unref(password),
                                "onUpdate:value": ($event) => isRef(password) ? password.value = $event : null,
                                placeholder: "password",
                                type: "password",
                                name: "password"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).password), 1),
                          createVNode(_component_n_form_item, {
                            label: "\u786E\u8BA4\u5BC6\u7801",
                            path: "password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NInput, {
                                value: unref(confirmPassword),
                                "onUpdate:value": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                placeholder: "confirmPassword",
                                type: "password",
                                name: "confirmPassword"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).confirmPassword), 1),
                          createVNode(_component_n_form_item, {
                            path: "code",
                            label: "\u9A8C\u8BC1\u7801"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NInput, {
                                value: unref(code),
                                "onUpdate:value": ($event) => isRef(code) ? code.value = $event : null,
                                placeholder: "\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801",
                                type: "text",
                                name: "code"
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode(" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 "),
                              createVNode(_component_NButton, {
                                type: "info",
                                onClick: sendCode,
                                class: "rounded-lg"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u53D1\u9001\u9A8C\u8BC1\u7801")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).code), 1),
                          createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " \u6CE8\u518C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_form, {
                      ref_key: "formRef",
                      ref: formRef,
                      "label-placement": "left",
                      "label-width": 70,
                      onSubmit: unref(onSubmit)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form_item, {
                          label: "email",
                          path: "email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NInput, {
                              value: unref(email),
                              "onUpdate:value": ($event) => isRef(email) ? email.value = $event : null,
                              placeholder: "Email",
                              type: "email",
                              name: "email"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).email), 1),
                        createVNode(_component_n_form_item, {
                          label: "\u5BC6\u7801",
                          path: "password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NInput, {
                              value: unref(password),
                              "onUpdate:value": ($event) => isRef(password) ? password.value = $event : null,
                              placeholder: "password",
                              type: "password",
                              name: "password"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).password), 1),
                        createVNode(_component_n_form_item, {
                          label: "\u786E\u8BA4\u5BC6\u7801",
                          path: "password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NInput, {
                              value: unref(confirmPassword),
                              "onUpdate:value": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                              placeholder: "confirmPassword",
                              type: "password",
                              name: "confirmPassword"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).confirmPassword), 1),
                        createVNode(_component_n_form_item, {
                          path: "code",
                          label: "\u9A8C\u8BC1\u7801"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NInput, {
                              value: unref(code),
                              "onUpdate:value": ($event) => isRef(code) ? code.value = $event : null,
                              placeholder: "\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801",
                              type: "text",
                              name: "code"
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode(" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 "),
                            createVNode(_component_NButton, {
                              type: "info",
                              onClick: sendCode,
                              class: "rounded-lg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u53D1\u9001\u9A8C\u8BC1\u7801")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).code), 1),
                        createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " \u6CE8\u518C ")
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_space, { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(_component_n_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    "label-placement": "left",
                    "label-width": 70,
                    onSubmit: unref(onSubmit)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_form_item, {
                        label: "email",
                        path: "email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NInput, {
                            value: unref(email),
                            "onUpdate:value": ($event) => isRef(email) ? email.value = $event : null,
                            placeholder: "Email",
                            type: "email",
                            name: "email"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).email), 1),
                      createVNode(_component_n_form_item, {
                        label: "\u5BC6\u7801",
                        path: "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NInput, {
                            value: unref(password),
                            "onUpdate:value": ($event) => isRef(password) ? password.value = $event : null,
                            placeholder: "password",
                            type: "password",
                            name: "password"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).password), 1),
                      createVNode(_component_n_form_item, {
                        label: "\u786E\u8BA4\u5BC6\u7801",
                        path: "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NInput, {
                            value: unref(confirmPassword),
                            "onUpdate:value": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                            placeholder: "confirmPassword",
                            type: "password",
                            name: "confirmPassword"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).confirmPassword), 1),
                      createVNode(_component_n_form_item, {
                        path: "code",
                        label: "\u9A8C\u8BC1\u7801"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NInput, {
                            value: unref(code),
                            "onUpdate:value": ($event) => isRef(code) ? code.value = $event : null,
                            placeholder: "\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801",
                            type: "text",
                            name: "code"
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode(" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 "),
                          createVNode(_component_NButton, {
                            type: "info",
                            onClick: sendCode,
                            class: "rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D1\u9001\u9A8C\u8BC1\u7801")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).code), 1),
                      createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " \u6CE8\u518C ")
                    ]),
                    _: 1
                  }, 8, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login/forgetPass.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forgetPass = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14655c26"]]);

export { forgetPass as default };
//# sourceMappingURL=forgetPass-fb31b0b5.mjs.map
