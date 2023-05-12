import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { NCard, NSpace, NForm, NFormItem, NInput } from "naive-ui";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import * as zod from "zod";
import { a as api } from "./api-e01fa6ec.js";
import axios from "axios";
import { u as useSquareStore } from "./squareStore-e7227acb.js";
import { u as useType } from "./type-ec9b93da.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admitLogin",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const validationSchema = toTypedSchema(
      zod.object({
        email: zod.string().nonempty("This is required").email({ message: "请输入正确的邮箱格式" }),
        password: zod.string().nonempty("This is required").min(6, { message: "密码至少需要6位" })
      })
    );
    const { handleSubmit, errors } = useForm({
      validationSchema
    });
    const { value: email } = useField("email");
    const { value: password } = useField("password");
    const router = useRouter();
    const onSubmit = handleSubmit((values) => {
      const config = {
        email: email.value,
        password: password.value
      };
      axios.post(api + "/Admin/login", config).then((response) => {
        console.log(111111);
        sessionStorage.setItem("token", response.data.data.token);
        sessionStorage.setItem("type", response.data.data.type);
        useType().type.type = response.data.data.type;
        console.log("type=" + useType().type.type);
        router.push({ path: "/FunctionalArea/square" });
      }).catch((errors2) => {
        console.log(errors2);
        console.log(121212);
      });
      axios.get(api + "/Activity/search").then((response) => {
        console.log(1111);
        console.log(response);
        useSquareStore().squareStore = response.data.data;
        console.log(useSquareStore().squareStore);
      }).catch((errors2) => {
        console.log(3333);
        console.log(errors2);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = NCard;
      const _component_n_space = NSpace;
      const _component_n_form = NForm;
      const _component_n_form_item = NFormItem;
      const _component_NInput = NInput;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_n_card, mergeProps({
        title: "i志愿管理员登录",
        class: "container mx-auto box-border h-96 w-96 login rounded-lg"
      }, _attrs), {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_space, { justify: "space-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/login" }, {
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
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/Login/register" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`用户注册`);
                      } else {
                        return [
                          createTextVNode("用户注册")
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
                    createVNode(_component_NuxtLink, { to: "/Login/login" }, {
                      default: withCtx(() => [
                        createTextVNode("用户登录")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/Login/register" }, {
                      default: withCtx(() => [
                        createTextVNode("用户注册")
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
                  createVNode(_component_NuxtLink, { to: "/Login/login" }, {
                    default: withCtx(() => [
                      createTextVNode("用户登录")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/Login/register" }, {
                    default: withCtx(() => [
                      createTextVNode("用户注册")
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
                    "label-width": 50,
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
                                type: "email",
                                placeholder: "Email",
                                name: "email"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NInput, {
                                  value: unref(email),
                                  "onUpdate:value": ($event) => isRef(email) ? email.value = $event : null,
                                  type: "email",
                                  placeholder: "Email",
                                  name: "email"
                                }, null, 8, ["value", "onUpdate:value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-xs text-red-700" data-v-2f0ed854${_scopeId3}>${ssrInterpolate(unref(errors).email)}</div>`);
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
                        _push4(`<div class="text-xs text-red-700" data-v-2f0ed854${_scopeId3}>${ssrInterpolate(unref(errors).password)}</div><br data-v-2f0ed854${_scopeId3}><button class="bg-green-500/100 rounded-lg w-1/4 h-10 text-white" data-v-2f0ed854${_scopeId3}> 登录 </button>`);
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
                                type: "email",
                                placeholder: "Email",
                                name: "email"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-xs text-red-700" }, toDisplayString(unref(errors).email), 1),
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
                          createVNode("div", { class: "text-xs text-red-700" }, toDisplayString(unref(errors).password), 1),
                          createVNode("br"),
                          createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " 登录 ")
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
                      "label-width": 50,
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
                              type: "email",
                              placeholder: "Email",
                              name: "email"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-xs text-red-700" }, toDisplayString(unref(errors).email), 1),
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
                        createVNode("div", { class: "text-xs text-red-700" }, toDisplayString(unref(errors).password), 1),
                        createVNode("br"),
                        createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " 登录 ")
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
                    "label-width": 50,
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
                            type: "email",
                            placeholder: "Email",
                            name: "email"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-xs text-red-700" }, toDisplayString(unref(errors).email), 1),
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
                      createVNode("div", { class: "text-xs text-red-700" }, toDisplayString(unref(errors).password), 1),
                      createVNode("br"),
                      createVNode("button", { class: "bg-green-500/100 rounded-lg w-1/4 h-10 text-white" }, " 登录 ")
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
    };
  }
});
const admitLogin_vue_vue_type_style_index_0_scoped_2f0ed854_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login/admitLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admitLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f0ed854"]]);
export {
  admitLogin as default
};
//# sourceMappingURL=admitLogin-7ae84f43.js.map
