import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, withDirectives, vShow, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { NList, NCard, NListItem, NMessageProvider, NButton, NThing } from 'naive-ui';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1, u as useSearchStore } from './navigationBar-86101581.mjs';
import _sfc_main$5 from './addEvent-88f89cec.mjs';
import _sfc_main$2 from './joinEvent-404e8968.mjs';
import { u as useSquareStore } from './squareStore-e7227acb.mjs';
import axios from 'axios';
import { a as api$1 } from './api-e01fa6ec.mjs';
import { u as useType } from './type-ec9b93da.mjs';
import _sfc_main$3 from './signIn-1bc489ea.mjs';
import _sfc_main$4 from './signOut-a7815586.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-15b2078b.mjs';
import 'ufo';
import '@headlessui/vue';
import '@heroicons/vue/24/outline';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "square",
  __ssrInlineRender: true,
  setup(__props) {
    const picture = "http://ru83u0iyp.hn-bkt.clouddn.com/";
    const actions = ref([{
      name: "111",
      time: "",
      beginTime: null,
      lateTime: null,
      location: "",
      maxpeople: "",
      id: ""
    }]);
    actions.value = useSquareStore().squareStore;
    const deletedActions = ref([]);
    const join = ({ index }) => {
      useSquareStore().action.actionId = actions.value[index].id;
    };
    function remove({ index }) {
      const deletedAction = actions.value.splice(index, 1)[0];
      deletedActions.value.push(deletedAction);
      console.log(deletedActions.value);
      console.log(deletedAction.id);
      axios.delete(api$1 + "/Admin/deleteActivity", {
        data: {
          id: deletedAction.id
        },
        headers: { token: sessionStorage.getItem("token") }
      }).then((response) => {
        console.log(response);
        alert("\u5220\u9664\u6210\u529F");
      }).catch((errors) => {
        console.log(errors);
        alert("\u5220\u9664\u5931\u8D25");
      });
    }
    const sigIn = (index) => {
      useSquareStore().action.actionId = actions.value[index].id;
    };
    const signOut = (index) => {
      useSquareStore().action.actionId = actions.value[index].id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_list = NList;
      const _component_n_card = NCard;
      const _component_n_list_item = NListItem;
      const _component_n_message_provider = NMessageProvider;
      const _component_n_button = NButton;
      const _component_n_thing = NThing;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto w-3/4 mt-5" }, _attrs))} data-v-0a6084cc>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(useSearchStore)().searchStore, (action, index) => {
        _push(ssrRenderComponent(_component_n_list, { key: index }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_n_card, {
                title: "\u5FD7\u613F\u6D3B\u52A8",
                hoverable: "",
                class: "mt-3 bg-slate-100 rounded-lg",
                "title-placement": "left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_n_list_item, null, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", picture + action.name)} class="space-x-1 h-28 w-28" alt="\u5565\u4E5F\u6CA1\u6709" data-v-0a6084cc${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: picture + action.name,
                              class: "space-x-1 h-28 w-28",
                              alt: "\u5565\u4E5F\u6CA1\u6709"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle(unref(useType)().type.type === "user" ? null : { display: "none" })}" data-v-0a6084cc${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_n_message_provider, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div style="${ssrRenderStyle(unref(useType)().type.type === "admit" ? null : { display: "none" })}" data-v-0a6084cc${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_n_button, {
                            onClick: ($event) => remove({ index }),
                            type: "error",
                            class: "mt-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u5220\u9664\u6D3B\u52A8 `);
                              } else {
                                return [
                                  createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div style="${ssrRenderStyle(unref(useType)().type.type === "user" ? null : { display: "none" })}" data-v-0a6084cc${_scopeId3}><div data-v-0a6084cc${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_n_message_provider, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$3)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div data-v-0a6084cc${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_n_message_provider, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$4)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            withDirectives(createVNode("div", {
                              onClick: ($event) => join({ index })
                            }, [
                              createVNode(_component_n_message_provider, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
                                ]),
                                _: 1
                              })
                            ], 8, ["onClick"]), [
                              [vShow, unref(useType)().type.type === "user"]
                            ]),
                            withDirectives(createVNode("div", null, [
                              createVNode(_component_n_button, {
                                onClick: ($event) => remove({ index }),
                                type: "error",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ], 512), [
                              [vShow, unref(useType)().type.type === "admit"]
                            ]),
                            withDirectives(createVNode("div", null, [
                              createVNode("div", {
                                onClick: ($event) => sigIn(index)
                              }, [
                                createVNode(_component_n_message_provider, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                })
                              ], 8, ["onClick"]),
                              createVNode("div", {
                                onClick: ($event) => signOut(index)
                              }, [
                                createVNode(_component_n_message_provider, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4)
                                  ]),
                                  _: 1
                                })
                              ], 8, ["onClick"])
                            ], 512), [
                              [vShow, unref(useType)().type.type === "user"]
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(action.name)} <br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u65F6\u957F\uFF1A${ssrInterpolate(action.time)}<br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A${ssrInterpolate(new Date(action.beginTime).toLocaleString())} <br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A${ssrInterpolate(new Date(action.lateTime).toLocaleString())} <br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u5730\u70B9\uFF1A${ssrInterpolate(action.location)} <br data-v-0a6084cc${_scopeId4}> \u6700\u591A${ssrInterpolate(action.maxpeople)}\u4E2A\u4EBA <br data-v-0a6084cc${_scopeId4}>`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(action.name) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                                  createVNode("br")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(action.name) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                                createVNode("br")
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_n_list_item, null, {
                        prefix: withCtx(() => [
                          createVNode("img", {
                            src: picture + action.name,
                            class: "space-x-1 h-28 w-28",
                            alt: "\u5565\u4E5F\u6CA1\u6709"
                          }, null, 8, ["src"])
                        ]),
                        suffix: withCtx(() => [
                          withDirectives(createVNode("div", {
                            onClick: ($event) => join({ index })
                          }, [
                            createVNode(_component_n_message_provider, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2)
                              ]),
                              _: 1
                            })
                          ], 8, ["onClick"]), [
                            [vShow, unref(useType)().type.type === "user"]
                          ]),
                          withDirectives(createVNode("div", null, [
                            createVNode(_component_n_button, {
                              onClick: ($event) => remove({ index }),
                              type: "error",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ], 512), [
                            [vShow, unref(useType)().type.type === "admit"]
                          ]),
                          withDirectives(createVNode("div", null, [
                            createVNode("div", {
                              onClick: ($event) => sigIn(index)
                            }, [
                              createVNode(_component_n_message_provider, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
                                ]),
                                _: 1
                              })
                            ], 8, ["onClick"]),
                            createVNode("div", {
                              onClick: ($event) => signOut(index)
                            }, [
                              createVNode(_component_n_message_provider, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4)
                                ]),
                                _: 1
                              })
                            ], 8, ["onClick"])
                          ], 512), [
                            [vShow, unref(useType)().type.type === "user"]
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(action.name) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                              createVNode("br")
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_n_card, {
                  title: "\u5FD7\u613F\u6D3B\u52A8",
                  hoverable: "",
                  class: "mt-3 bg-slate-100 rounded-lg",
                  "title-placement": "left"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_list_item, null, {
                      prefix: withCtx(() => [
                        createVNode("img", {
                          src: picture + action.name,
                          class: "space-x-1 h-28 w-28",
                          alt: "\u5565\u4E5F\u6CA1\u6709"
                        }, null, 8, ["src"])
                      ]),
                      suffix: withCtx(() => [
                        withDirectives(createVNode("div", {
                          onClick: ($event) => join({ index })
                        }, [
                          createVNode(_component_n_message_provider, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ], 8, ["onClick"]), [
                          [vShow, unref(useType)().type.type === "user"]
                        ]),
                        withDirectives(createVNode("div", null, [
                          createVNode(_component_n_button, {
                            onClick: ($event) => remove({ index }),
                            type: "error",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ], 512), [
                          [vShow, unref(useType)().type.type === "admit"]
                        ]),
                        withDirectives(createVNode("div", null, [
                          createVNode("div", {
                            onClick: ($event) => sigIn(index)
                          }, [
                            createVNode(_component_n_message_provider, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3)
                              ]),
                              _: 1
                            })
                          ], 8, ["onClick"]),
                          createVNode("div", {
                            onClick: ($event) => signOut(index)
                          }, [
                            createVNode(_component_n_message_provider, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4)
                              ]),
                              _: 1
                            })
                          ], 8, ["onClick"])
                        ], 512), [
                          [vShow, unref(useType)().type.type === "user"]
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(action.name) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                            createVNode("br")
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (unref(useType)().type.type === "admit") {
        _push(`<div data-v-0a6084cc>`);
        _push(ssrRenderComponent(_component_n_message_provider, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(useSquareStore)().squareStore, (action, index) => {
        _push(ssrRenderComponent(_component_n_list, { key: index }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_n_card, {
                title: "\u5FD7\u613F\u6D3B\u52A8",
                hoverable: "",
                class: "mt-3 bg-slate-100 rounded-lg",
                "title-placement": "left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_n_list_item, null, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", picture + action.name)} class="space-x-1 h-28 w-28" alt="\u5565\u4E5F\u6CA1\u6709" data-v-0a6084cc${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: picture + action.name,
                              class: "space-x-1 h-28 w-28",
                              alt: "\u5565\u4E5F\u6CA1\u6709"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(useType)().type.type === "user") {
                            _push4(`<div data-v-0a6084cc${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_n_message_provider, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$2)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(useType)().type.type === "admit") {
                            _push4(`<div data-v-0a6084cc${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_n_button, {
                              onClick: ($event) => remove({ index }),
                              type: "error",
                              class: "mt-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u5220\u9664\u6D3B\u52A8 `);
                                } else {
                                  return [
                                    createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div data-v-0a6084cc${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_n_message_provider, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$3)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_n_message_provider, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$4)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            unref(useType)().type.type === "user" ? (openBlock(), createBlock("div", {
                              key: 0,
                              onClick: ($event) => join({ index })
                            }, [
                              createVNode(_component_n_message_provider, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
                                ]),
                                _: 1
                              })
                            ], 8, ["onClick"])) : createCommentVNode("", true),
                            unref(useType)().type.type === "admit" ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode(_component_n_button, {
                                onClick: ($event) => remove({ index }),
                                type: "error",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, [
                              createVNode(_component_n_message_provider, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_message_provider, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4)
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(action.name)} <br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u65F6\u957F\uFF1A${ssrInterpolate(action.time)}<br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A${ssrInterpolate(new Date(action.beginTime).toLocaleString())} <br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A${ssrInterpolate(new Date(action.lateTime).toLocaleString())} <br data-v-0a6084cc${_scopeId4}> \u6D3B\u52A8\u5730\u70B9\uFF1A${ssrInterpolate(action.location)} <br data-v-0a6084cc${_scopeId4}> \u6700\u591A${ssrInterpolate(action.maxpeople)}\u4E2A\u4EBA <br data-v-0a6084cc${_scopeId4}>`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(action.name) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                                  createVNode("br")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(action.name) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                                createVNode("br")
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_n_list_item, null, {
                        prefix: withCtx(() => [
                          createVNode("img", {
                            src: picture + action.name,
                            class: "space-x-1 h-28 w-28",
                            alt: "\u5565\u4E5F\u6CA1\u6709"
                          }, null, 8, ["src"])
                        ]),
                        suffix: withCtx(() => [
                          unref(useType)().type.type === "user" ? (openBlock(), createBlock("div", {
                            key: 0,
                            onClick: ($event) => join({ index })
                          }, [
                            createVNode(_component_n_message_provider, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2)
                              ]),
                              _: 1
                            })
                          ], 8, ["onClick"])) : createCommentVNode("", true),
                          unref(useType)().type.type === "admit" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(_component_n_button, {
                              onClick: ($event) => remove({ index }),
                              type: "error",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode(_component_n_message_provider, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_n_message_provider, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(action.name) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                              createVNode("br")
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_n_card, {
                  title: "\u5FD7\u613F\u6D3B\u52A8",
                  hoverable: "",
                  class: "mt-3 bg-slate-100 rounded-lg",
                  "title-placement": "left"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_list_item, null, {
                      prefix: withCtx(() => [
                        createVNode("img", {
                          src: picture + action.name,
                          class: "space-x-1 h-28 w-28",
                          alt: "\u5565\u4E5F\u6CA1\u6709"
                        }, null, 8, ["src"])
                      ]),
                      suffix: withCtx(() => [
                        unref(useType)().type.type === "user" ? (openBlock(), createBlock("div", {
                          key: 0,
                          onClick: ($event) => join({ index })
                        }, [
                          createVNode(_component_n_message_provider, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ], 8, ["onClick"])) : createCommentVNode("", true),
                        unref(useType)().type.type === "admit" ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(_component_n_button, {
                            onClick: ($event) => remove({ index }),
                            type: "error",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5220\u9664\u6D3B\u52A8 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_n_message_provider, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_n_message_provider, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_n_thing, { title: "\u6D3B\u52A8\u540D\u79F0" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(action.name) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u65F6\u957F\uFF1A" + toDisplayString(action.time), 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.beginTime).toLocaleString()) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\uFF1A" + toDisplayString(new Date(action.lateTime).toLocaleString()) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6D3B\u52A8\u5730\u70B9\uFF1A" + toDisplayString(action.location) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" \u6700\u591A" + toDisplayString(action.maxpeople) + "\u4E2A\u4EBA ", 1),
                            createVNode("br")
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/FunctionalArea/square.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const square = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a6084cc"]]);

export { square as default };
//# sourceMappingURL=square-ba20757b.mjs.map
