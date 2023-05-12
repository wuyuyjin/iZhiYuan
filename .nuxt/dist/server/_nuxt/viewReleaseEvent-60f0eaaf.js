import { NButton, NDataTable, NSpace, NLayout, NLayoutSider, NMenu, NMessageProvider, NIcon } from "naive-ui";
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext, mergeProps, createVNode, h } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import axios from "axios";
import { a as api } from "./api-e01fa6ec.js";
import { d as defineStore } from "../server.mjs";
import { _ as _sfc_main$2 } from "./navigationBar-86101581.js";
import { BookOutline } from "@vicons/ionicons5";
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
import "./nuxt-link-15b2078b.js";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
import "./squareStore-e7227acb.js";
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
        title: "开始时间",
        key: "beginTime"
      },
      {
        title: "结束时间",
        key: "lateTime"
      },
      {
        title: "举办方",
        key: "belongingAdimit"
      },
      {
        title: "id",
        key: "id"
      },
      {
        title: "活动地点",
        key: "location"
      },
      {
        title: "人数",
        key: "maxpeople"
      },
      {
        title: "活动名称",
        key: "name"
      },
      {
        title: "志愿时长",
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
        axios.get(api + "/Admin/findMyActivity", {
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
        axios.get(api + "/User/findMyAllActivity", {
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
            _push2(`获取信息`);
          } else {
            return [
              createTextVNode("获取信息")
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
          "个人信息"
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
          "查看活动"
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
          "修改密码"
        ),
        key: "a-wild-sheep-chase",
        disabled: false,
        icon: renderIcon(BookOutline)
      },
      {
        label: "暂时没有想好",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=viewReleaseEvent-60f0eaaf.js.map
