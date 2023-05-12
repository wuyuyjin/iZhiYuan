import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { ref, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc, u as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { NCard, NSpace, NForm, NFormItem, NInput, NButton, NRadioGroup, NRadio } from "naive-ui";
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import * as zod from "zod";
import axios from "axios";
import { a as api } from "./api-e01fa6ec.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "vue-router";
import "defu";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "h3";
import "@css-render/vue3-ssr";
const register_vue_vue_type_style_index_0_scoped_dd2ee2af_lang = "";
const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const validationSchema = toTypedSchema(
      zod.object({
        email: zod.string().nonempty("This is required").email({ message: "Must be a valid email" }),
        password: zod.string().nonempty("This is required").min(6, { message: "Too short" }),
        confirmPassword: zod.string().nonempty("This is required").min(6, { message: "Too short" }),
        Code: zod.string().nonempty("This is required").min(4, { message: "请输入四位验证码" }),
        sex: zod.string().nonempty("This is required").min({ message: "请选择你的性别" })
      })
    );
    const { handleSubmit, errors } = useForm({
      validationSchema
    });
    const router = useRouter();
    const { value: email } = useField("email");
    const { value: password } = useField("password");
    const { value: confirmPassword } = useField("confirmPassword");
    const { value: Code } = useField("Code");
    const { value: sex } = useField("sex");
    function sendCode() {
      ({
        email: email.value
      });
      if (email.value === "") {
        alert("请先输入邮箱！");
      } else {
        axios.get(api + "/captcha?email=" + email.value).then((response) => {
          console.log(response);
        }).catch((errors2) => {
          console.log(errors2);
        });
        alert("发送成功！");
      }
      alert("email=" + email.value);
    }
    const onSubmit = handleSubmit((values) => {
      if (password.value === confirmPassword.value) {
        axios.post(api + "/User/register", {
          email: email.value,
          password: password.value,
          sex: sex.value,
          time: 0,
          Code: Code.value
        }).then((response) => {
          console.log(response);
          alert("登陆成功");
          router.push({ path: "/Login/login" });
        }).catch((errors2) => {
          console.log(errors2);
          alert("登录失败");
        });
      } else {
        alert("两次输入的密码不一样，请重新输入密码");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = NCard;
      const _component_n_space = NSpace;
      const _component_n_form = NForm;
      const _component_n_form_item = NFormItem;
      const _component_NInput = NInput;
      const _component_NButton = NButton;
      const _component_n_radio_group = NRadioGroup;
      const _component_n_radio = NRadio;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_n_card, {
        title: "i志愿用户注册",
        class: "container mx-auto box-border h-96 w-96 login rounded-lg"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_space, { justify: "space-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`用户登录`);
                      } else {
                        return [
                          createTextVNode("用户登录")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`管理员登录`);
                      } else {
                        return [
                          createTextVNode("管理员登录")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/admitRegister" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`管理员注册`);
                      } else {
                        return [
                          createTextVNode("管理员注册")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/forgetPass" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`忘记密码？`);
                      } else {
                        return [
                          createTextVNode("忘记密码？")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                      default: withCtx(() => [
                        createTextVNode("用户登录")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                      default: withCtx(() => [
                        createTextVNode("管理员登录")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/admitRegister" }, {
                      default: withCtx(() => [
                        createTextVNode("管理员注册")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/forgetPass" }, {
                      default: withCtx(() => [
                        createTextVNode("忘记密码？")
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
                  createVNode(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                    default: withCtx(() => [
                      createTextVNode("用户登录")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/admitLogin" }, {
                    default: withCtx(() => [
                      createTextVNode("管理员登录")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/admitRegister" }, {
                    default: withCtx(() => [
                      createTextVNode("管理员注册")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/forgetPass" }, {
                    default: withCtx(() => [
                      createTextVNode("忘记密码？")
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
                        _push4(`<div class="text-sm text-red-700" data-v-dd2ee2af${_scopeId3}>${ssrInterpolate(unref(errors).email)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "密码",
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
                        _push4(`<div class="text-sm text-red-700" data-v-dd2ee2af${_scopeId3}>${ssrInterpolate(unref(errors).password)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "确认密码",
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
                        _push4(`<div class="text-sm text-red-700" data-v-dd2ee2af${_scopeId3}>${ssrInterpolate(unref(errors).confirmPassword)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          path: "Code",
                          label: "验证码"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NInput, {
                                value: unref(Code),
                                "onUpdate:value": ($event) => isRef(Code) ? Code.value = $event : null,
                                placeholder: "请输入4位验证码",
                                type: "text",
                                name: "Code"
                              }, null, _parent5, _scopeId4));
                              _push5(`                 `);
                              _push5(ssrRenderComponent(_component_NButton, {
                                type: "info",
                                onClick: sendCode,
                                class: "rounded-lg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`发送验证码`);
                                  } else {
                                    return [
                                      createTextVNode("发送验证码")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NInput, {
                                  value: unref(Code),
                                  "onUpdate:value": ($event) => isRef(Code) ? Code.value = $event : null,
                                  placeholder: "请输入4位验证码",
                                  type: "text",
                                  name: "Code"
                                }, null, 8, ["value", "onUpdate:value"]),
                                createTextVNode("                 "),
                                createVNode(_component_NButton, {
                                  type: "info",
                                  onClick: sendCode,
                                  class: "rounded-lg"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("发送验证码")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-sm text-red-700" data-v-dd2ee2af${_scopeId3}>${ssrInterpolate(unref(errors).Code)}</div>`);
                        _push4(ssrRenderComponent(_component_n_form_item, {
                          label: "性别",
                          path: "sex"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_radio_group, {
                                value: unref(sex),
                                "onUpdate:value": ($event) => isRef(sex) ? sex.value = $event : null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_n_space, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_n_radio, {
                                            label: "男",
                                            value: "男"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_n_radio, {
                                            label: "女",
                                            value: "女"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_n_radio, {
                                              label: "男",
                                              value: "男"
                                            }),
                                            createVNode(_component_n_radio, {
                                              label: "女",
                                              value: "女"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_n_space, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_n_radio, {
                                            label: "男",
                                            value: "男"
                                          }),
                                          createVNode(_component_n_radio, {
                                            label: "女",
                                            value: "女"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_radio_group, {
                                  value: unref(sex),
                                  "onUpdate:value": ($event) => isRef(sex) ? sex.value = $event : null
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_space, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_n_radio, {
                                          label: "男",
                                          value: "男"
                                        }),
                                        createVNode(_component_n_radio, {
                                          label: "女",
                                          value: "女"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<button class="bg-green-500/100 rounded-lg w-1/4 h-10 text-white" data-v-dd2ee2af${_scopeId3}> 注册 </button>`);
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
                            label: "密码",
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
                            label: "确认密码",
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
                            path: "Code",
                            label: "验证码"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NInput, {
                                value: unref(Code),
                                "onUpdate:value": ($event) => isRef(Code) ? Code.value = $event : null,
                                placeholder: "请输入4位验证码",
                                type: "text",
                                name: "Code"
                              }, null, 8, ["value", "onUpdate:value"]),
                              createTextVNode("                 "),
                              createVNode(_component_NButton, {
                                type: "info",
                                onClick: sendCode,
                                class: "rounded-lg"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("发送验证码")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).Code), 1),
                          createVNode(_component_n_form_item, {
                            label: "性别",
                            path: "sex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_radio_group, {
                                value: unref(sex),
                                "onUpdate:value": ($event) => isRef(sex) ? sex.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_space, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_n_radio, {
                                        label: "男",
                                        value: "男"
                                      }),
                                      createVNode(_component_n_radio, {
                                        label: "女",
                                        value: "女"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " 注册 ")
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
                          label: "密码",
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
                          label: "确认密码",
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
                          path: "Code",
                          label: "验证码"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NInput, {
                              value: unref(Code),
                              "onUpdate:value": ($event) => isRef(Code) ? Code.value = $event : null,
                              placeholder: "请输入4位验证码",
                              type: "text",
                              name: "Code"
                            }, null, 8, ["value", "onUpdate:value"]),
                            createTextVNode("                 "),
                            createVNode(_component_NButton, {
                              type: "info",
                              onClick: sendCode,
                              class: "rounded-lg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("发送验证码")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).Code), 1),
                        createVNode(_component_n_form_item, {
                          label: "性别",
                          path: "sex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_radio_group, {
                              value: unref(sex),
                              "onUpdate:value": ($event) => isRef(sex) ? sex.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_space, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_radio, {
                                      label: "男",
                                      value: "男"
                                    }),
                                    createVNode(_component_n_radio, {
                                      label: "女",
                                      value: "女"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " 注册 ")
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
                        label: "密码",
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
                        label: "确认密码",
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
                        path: "Code",
                        label: "验证码"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NInput, {
                            value: unref(Code),
                            "onUpdate:value": ($event) => isRef(Code) ? Code.value = $event : null,
                            placeholder: "请输入4位验证码",
                            type: "text",
                            name: "Code"
                          }, null, 8, ["value", "onUpdate:value"]),
                          createTextVNode("                 "),
                          createVNode(_component_NButton, {
                            type: "info",
                            onClick: sendCode,
                            class: "rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("发送验证码")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-sm text-red-700" }, toDisplayString(unref(errors).Code), 1),
                      createVNode(_component_n_form_item, {
                        label: "性别",
                        path: "sex"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_radio_group, {
                            value: unref(sex),
                            "onUpdate:value": ($event) => isRef(sex) ? sex.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_space, null, {
                                default: withCtx(() => [
                                  createVNode(_component_n_radio, {
                                    label: "男",
                                    value: "男"
                                  }),
                                  createVNode(_component_n_radio, {
                                    label: "女",
                                    value: "女"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " 注册 ")
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd2ee2af"]]);
export {
  register as default
};
//# sourceMappingURL=register-f43eabf6.js.map
