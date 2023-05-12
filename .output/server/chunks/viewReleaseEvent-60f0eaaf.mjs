import { NSpace, NLayout, NLayoutSider, NMenu, NMessageProvider, NButton, NDataTable, NIcon } from 'naive-ui';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, h } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import axios from 'axios';
import { a as api$1 } from './api-e01fa6ec.mjs';
import { d as defineStore } from './server.mjs';
import { _ as _sfc_main$2 } from './navigationBar-86101581.mjs';
import { BookOutline } from '@vicons/ionicons5';
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
import './nuxt-link-15b2078b.mjs';
import '@headlessui/vue';
import '@heroicons/vue/24/outline';
import './squareStore-e7227acb.mjs';

const viewReleaseEventInfo = defineStore("useViewReleaseEventInfo", () => {
  const useViewReleaseEventInfo = [
    {
      beginTime: null,
      belongingAdimit: "",
      id: "",
      lateTime: null,
      location: "",
      maxpeople: "",
      name: "",
      time: ""
    }
  ];
  return {
    useViewReleaseEventInfo
  };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "viewReleaseEventComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        title: "\u5F00\u59CB\u65F6\u95F4",
        key: "beginTime"
      },
      {
        title: "\u7ED3\u675F\u65F6\u95F4",
        key: "lateTime"
      },
      {
        title: "\u4E3E\u529E\u65B9",
        key: "belongingAdimit"
      },
      {
        title: "id",
        key: "id"
      },
      {
        title: "\u6D3B\u52A8\u5730\u70B9",
        key: "location"
      },
      {
        title: "\u4EBA\u6570",
        key: "maxpeople"
      },
      {
        title: "\u6D3B\u52A8\u540D\u79F0",
        key: "name"
      },
      {
        title: "\u5FD7\u613F\u65F6\u957F",
        key: "time"
      }
    ];
    const data = [
      {
        beginTime: null,
        belongingAdimit: "",
        id: "",
        lateTime: null,
        location: "",
        maxpeople: "",
        name: "",
        time: ""
      }
    ];
    const personal = (row) => {
      if (sessionStorage.getItem("type") == "admit") {
        axios.get(api$1 + "/Admin/findMyActivity", {
          headers: { token: sessionStorage.getItem("token") }
        }).then((response) => {
          viewReleaseEventInfo().useViewReleaseEventInfo = response.data.data;
          console.log(viewReleaseEventInfo().useViewReleaseEventInfo);
          console.log(22222);
          console.log(data.value);
        }).catch((errors) => {
          console.log(1111);
          console.log(errors);
        });
      } else {
        axios.get(api$1 + "/User/findMyAllActivity", {
          headers: { token: sessionStorage.getItem("token") }
        }).then((response) => {
          viewReleaseEventInfo().useViewReleaseEventInfo = response.data.data;
          console.log(22222);
          console.log(data.value);
        }).catch((errors) => {
          console.log(1111);
          console.log(errors);
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = NButton;
      const _component_n_data_table = NDataTable;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NButton, {
        onClick: personal,
        type: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u83B7\u53D6\u4FE1\u606F`);
          } else {
            return [
              createTextVNode("\u83B7\u53D6\u4FE1\u606F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_data_table, {
        "pagination-behavior-on-filter": "first",
        columns,
        pagination: _ctx.pagination,
        data: unref(viewReleaseEventInfo)().useViewReleaseEventInfo
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/viewReleaseEventComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "viewReleaseEvent",
  __ssrInlineRender: true,
  setup(__props) {
    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
    const menuOptions = [
      {
        label: () => h(
          "a",
          {
            href: "/adminInfo/personalInformation",
            target: "_self",
            rel: "noopenner noreferrer"
          },
          "\u4E2A\u4EBA\u4FE1\u606F"
        ),
        key: "hear-the-wind-sing",
        icon: renderIcon(BookOutline)
      },
      {
        label: () => h(
          "a",
          {
            href: "/adminInfo/viewReleaseEvent",
            target: "_self",
            rel: "noopenner noreferrer"
          },
          // sessionStorage.getItem('type') ==='admit'?'已发布的活动':'查看我参加的活动'
          // useType().type.type === 'admit'?'已发布的活动':'查看我参加的活动'
          "\u67E5\u770B\u6D3B\u52A8"
        ),
        key: "pinball-1973",
        icon: renderIcon(BookOutline)
      },
      {
        label: () => h(
          "a",
          {
            href: "/adminInfo/changePassword",
            target: "_self",
            rel: "noopenner noreferrer"
          },
          "\u4FEE\u6539\u5BC6\u7801"
        ),
        key: "a-wild-sheep-chase",
        disabled: false,
        icon: renderIcon(BookOutline)
      },
      {
        label: "\u6682\u65F6\u6CA1\u6709\u60F3\u597D",
        key: "dance-dance-dance",
        icon: renderIcon(BookOutline),
        disabled: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_space = NSpace;
      const _component_n_layout = NLayout;
      const _component_n_layout_sider = NLayoutSider;
      const _component_n_menu = NMenu;
      const _component_n_message_provider = NMessageProvider;
      const _component_ViewReleaseEventComponent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto w-3/4 mt-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_n_space, {
        vertical: "",
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_layout, { "has-sider": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_layout_sider, {
                    bordered: "",
                    "collapse-mode": "width",
                    "collapsed-width": 64,
                    width: 240,
                    "show-trigger": "",
                    inverted: _ctx.inverted
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_menu, {
                          inverted: _ctx.inverted,
                          "collapsed-width": 64,
                          "collapsed-icon-size": 22,
                          options: menuOptions
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_menu, {
                            inverted: _ctx.inverted,
                            "collapsed-width": 64,
                            "collapsed-icon-size": 22,
                            options: menuOptions
                          }, null, 8, ["inverted"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_n_layout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_message_provider, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ViewReleaseEventComponent, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ViewReleaseEventComponent)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_message_provider, null, {
                            default: withCtx(() => [
                              createVNode(_component_ViewReleaseEventComponent)
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
                    createVNode(_component_n_layout_sider, {
                      bordered: "",
                      "collapse-mode": "width",
                      "collapsed-width": 64,
                      width: 240,
                      "show-trigger": "",
                      inverted: _ctx.inverted
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_menu, {
                          inverted: _ctx.inverted,
                          "collapsed-width": 64,
                          "collapsed-icon-size": 22,
                          options: menuOptions
                        }, null, 8, ["inverted"])
                      ]),
                      _: 1
                    }, 8, ["inverted"]),
                    createVNode(_component_n_layout, null, {
                      default: withCtx(() => [
                        createVNode(_component_n_message_provider, null, {
                          default: withCtx(() => [
                            createVNode(_component_ViewReleaseEventComponent)
                          ]),
                          _: 1
                        })
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
              createVNode(_component_n_layout, { "has-sider": "" }, {
                default: withCtx(() => [
                  createVNode(_component_n_layout_sider, {
                    bordered: "",
                    "collapse-mode": "width",
                    "collapsed-width": 64,
                    width: 240,
                    "show-trigger": "",
                    inverted: _ctx.inverted
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_menu, {
                        inverted: _ctx.inverted,
                        "collapsed-width": 64,
                        "collapsed-icon-size": 22,
                        options: menuOptions
                      }, null, 8, ["inverted"])
                    ]),
                    _: 1
                  }, 8, ["inverted"]),
                  createVNode(_component_n_layout, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_message_provider, null, {
                        default: withCtx(() => [
                          createVNode(_component_ViewReleaseEventComponent)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adminInfo/viewReleaseEvent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=viewReleaseEvent-60f0eaaf.mjs.map
