import { withAsyncContext, computed, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, ref, resolveComponent, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { a as useRuntimeConfig, _ as _export_sfc, u as useRoute$1, b as useRouter } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-B9PPBfnG.mjs';
import { useRoute } from 'vue-router';
import { _ as __nuxt_component_0$3 } from './Button-DCDiVCLl.mjs';
import { AnalyticsBrowser } from '@segment/analytics-next';
import { u as useHubsStore, a as useAsyncData } from './hubs-CXFpbi5L.mjs';
import { u as useHead } from './composables-MCSzZNlt.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'qs';

const _sfc_main$c = {
  props: {
    color: {
      type: String,
      default: "#1c168c"
    },
    isChapter: {
      type: Boolean,
      default: false
    },
    chapter: { type: Object, default: () => {
    } }
  },
  computed: {
    title() {
      return this.chapter?.title ?? "";
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["header py-2", { "text-center py-4": $props.isChapter }],
    style: { background: `${$props.color}` }
  }, _attrs))}><div class="container"><div class="${ssrRenderClass([{
    "d-flex flex-row align-items-center justify-content-start": !$props.isChapter
  }, "py-4"])}"><span>`);
  if (!$props.isChapter) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" fill="#fff" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><span class="text-white fs-2 px-2">${ssrInterpolate($options.title)}</span></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/HubBanner.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]), { __name: "HubBanner" });
const _sfc_main$b = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "#1c168c"
    },
    hub: {
      type: Object,
      default: () => ({})
    },
    chapter: {
      type: Object,
      default: () => ({})
    },
    post: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const getBaseURL = computed(
      () => route.name?.toString().includes("resources-hub-slug") ? "/resources" : "/"
    );
    const title = computed(() => props.chapter?.title ?? "");
    const postTitle = computed(() => props.post?.title ?? "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-sm" }, _attrs))}><div class="container d-flex align-items-center flex-row py-3 flex-wrap">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `${getBaseURL.value}/${unref(route).params.hub}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p style="${ssrRenderStyle({ color: __props.color })}" class="fs-5"${_scopeId}>${ssrInterpolate(__props.hub.title)} <span${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", __props.color)} width="24" height="24"${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path d="M16 12l-6 6V6z"${_scopeId}></path></svg></span></p>`);
          } else {
            return [
              createVNode("p", {
                style: { color: __props.color },
                class: "fs-5"
              }, [
                createTextVNode(toDisplayString(__props.hub.title) + " ", 1),
                createVNode("span", null, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: __props.color,
                    width: "24",
                    height: "24"
                  }, [
                    createVNode("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }),
                    createVNode("path", { d: "M16 12l-6 6V6z" })
                  ], 8, ["fill"]))
                ])
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (postTitle.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "fs-5",
          to: `${getBaseURL.value}/${unref(route).params.hub}/${__props.chapter.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p style="${ssrRenderStyle({ color: __props.color })}" class="fs-5"${_scopeId}>${ssrInterpolate(title.value)} <span${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", __props.color)} width="24" height="24"${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path d="M16 12l-6 6V6z"${_scopeId}></path></svg></span></p>`);
            } else {
              return [
                createVNode("p", {
                  style: { color: __props.color },
                  class: "fs-5"
                }, [
                  createTextVNode(toDisplayString(title.value) + " ", 1),
                  createVNode("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: __props.color,
                      width: "24",
                      height: "24"
                    }, [
                      createVNode("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }),
                      createVNode("path", { d: "M16 12l-6 6V6z" })
                    ], 8, ["fill"]))
                  ])
                ], 4)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<p class="fs-5">${ssrInterpolate(title.value)} <span class="mx-4"></span></p>`);
      }
      if (postTitle.value) {
        _push(`<p class="fs-5" style="${ssrRenderStyle({ "color": "#57586e" })}">${ssrInterpolate(postTitle.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Breadcrumb.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Outline",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "#1c168c"
    },
    outlines: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const route = useRoute();
    const getBaseURL = computed(
      () => route.name?.toString().includes("resources-hub-slug") ? "/resources" : "/"
    );
    const isActive = (outline) => outline.slug === route.params.slug;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "left-col" }, _attrs))}><p class="fs-6 py-1 text-uppercase" style="${ssrRenderStyle({ color: __props.color })}">${ssrInterpolate(__props.outlines.length)} Resources </p><!--[-->`);
      ssrRenderList(__props.outlines, (outline, i) => {
        _push(`<li style="${ssrRenderStyle([{ "list-style": "none" }, [
          { color: "#57586E" },
          isActive(outline) ? { color: "#000000" } : ""
        ]])}" class="lh-lg">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "d-flex flex-row justify-content-start",
          to: `${getBaseURL.value}/${unref(route).params.hub}/${outline.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", __props.color)} width="24" height="24"${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path d="M16 12l-6 6V6z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(outline.title)}</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: __props.color,
                  width: "24",
                  height: "24"
                }, [
                  createVNode("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }),
                  createVNode("path", { d: "M16 12l-6 6V6z" })
                ], 8, ["fill"])),
                createVNode("span", null, toDisplayString(outline.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Outline.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  name: "DialogComponent",
  components: {
    CloseIcon: () => import('./close-BeXBhupR.mjs')
  },
  model: {
    prop: "visible",
    event: "update:visible"
  },
  emits: ["answer", "update:visible"],
  props: {
    contentClass: {
      type: String,
      default: ""
    },
    color: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  data: () => ({
    isDialogOpen: true
  }),
  destroyed() {
    (void 0).removeEventListener("keyup", this.closeByKey);
  },
  watch: {
    async visible(value) {
      await this.$nextTick();
      if (value) {
        (void 0).addEventListener("keyup", this.closeByKey);
        const dialog = this.$refs.dialog;
        if (dialog && dialog.focus) dialog.focus();
        else if (dialog && dialog.$el && dialog.$el.focus) dialog.$el.focus();
      } else {
        (void 0).removeEventListener("keyup", this.closeByKey);
      }
    },
    $route: "closeByChangeRoute"
  },
  methods: {
    close(event) {
      if (!event.keyCode || event.keyCode === 27) {
        this.c(false);
      }
    },
    closeByBackdrop() {
      this.c(false);
    },
    c(value) {
      this.$emit("answer", value);
      this.$emit("update:visible", false);
    },
    closeByKey(event) {
      if (event.keyCode === 13) {
        this.c(true);
      } else if (event.keyCode === 27) {
        this.c(false);
      }
    },
    closeByChangeRoute() {
      this.$emit("update:visible", false);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CloseIcon = resolveComponent("CloseIcon");
  if ($props.visible) {
    _push(`<section${ssrRenderAttrs(mergeProps({ class: "modal-container modal" }, _attrs))} data-v-725c5224><div class="d-flex mw-100 w-100 justify-items-center justify-content-center" tabindex="-1" role="dialog" data-v-725c5224><div class="position-relative w-100" style="${ssrRenderStyle({ "max-width": "1000px", "margin": "29px 10px" })}" role="document" data-v-725c5224><div class="modal-content" data-v-725c5224><div class="d-flex justify-content-between pb-2 border-b rounded-top" style="${ssrRenderStyle([{ backgroundColor: $props.color }, { "padding": "1rem" }])}" data-v-725c5224>`);
    if ($props.title) {
      _push(`<div class="text-white p-8" data-v-725c5224><h2 class="mb-1 font-bold" data-v-725c5224>${ssrInterpolate($props.title)}</h2>`);
      if ($props.description) {
        _push(`<p class="text-gray-100" data-v-725c5224>${ssrInterpolate($props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="close p-3 text-white" data-v-725c5224>`);
    _push(ssrRenderComponent(_component_CloseIcon, { style: { "width": "20px", "height": "20px", "color": "#fff" } }, null, _parent));
    _push(`</div></div><div class="col-12 w-100" data-v-725c5224><div class="${ssrRenderClass([$props.contentClass, "row"])}" data-v-725c5224>`);
    if (_ctx.$slots.left) {
      _push(`<div class="col-lg-6 col-12" data-v-725c5224>`);
      ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.$slots.right) {
      _push(`<div class="col-lg-6 col-12 border-start ps-4 pe-4" data-v-725c5224>`);
      ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div></div></section>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Dialog.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-725c5224"]]), { __name: "Dialog" });
const Segment = AnalyticsBrowser.load({
  writeKey: process.env.SEGMENT_WRITE_KEY
});
const OPEN_PREMIUM = "open premium";
const OPEN_PREMIUM_UNLOCK = "open premium unlock";
const OPEN_PREMIUM_SUBSCRIPTION = "open premium subscription";
const PREMIUM_UNLOCK = "premium unlock";
const PREMIUM_UNLOCK_PAID = "premium unlock paid";
const PREMIUM_UNLOCK_FAILED = "open premium failed";
const PREMIUM_SUBSCRIPTION = "premium subscription";
const _sfc_main$8 = {
  __name: "ReadArticle",
  __ssrInlineRender: true,
  props: {
    ispremium: { type: Boolean, default: false },
    post: { type: Object, default: () => ({}) },
    chapter: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const isPremiumDialogOpen = ref(false);
    const showPremiumContent = ref(true);
    const showSubscription = ref(false);
    const route = useRoute$1();
    const router = useRouter();
    const content = computed(() => props.post?.content || "");
    const price = computed(() => props.chapter?.price ?? "14.99");
    const title = computed(() => props.post?.title || "");
    const chapterContent = computed(
      () => props.chapter?.excerpt ?? props.chapter?.content ?? ""
    );
    function openPremium() {
      isPremiumDialogOpen.value = !isPremiumDialogOpen.value;
      sendSegment(OPEN_PREMIUM, {});
    }
    function openPremiumContent() {
      showPremiumContent.value = true;
      showSubscription.value = false;
      sendSegment(OPEN_PREMIUM_UNLOCK, {});
    }
    function openSubscription() {
      showSubscription.value = true;
      showPremiumContent.value = false;
      sendSegment(OPEN_PREMIUM_SUBSCRIPTION, {});
    }
    function isDev() {
      return ["dev", "development", "staging"].includes("production");
    }
    async function sendSegment(name, data) {
      if (isDev()) return;
      const slug = route?.params?.slug;
      await Segment.identify(slug, { slug, ...data?.user ?? {} });
      await Segment.track(name, data);
    }
    async function unlock() {
      let plan = props.chapter?.plan_id;
      if (isDev()) plan = "63184";
      await Paddle.Checkout.open({
        product: plan,
        allowQuantity: false,
        disableLogout: true,
        frameInitialHeight: 416,
        successCallback: (data) => checkoutComplete(data),
        closeCallback: (data) => checkoutClosed(data)
      });
      sendSegment(PREMIUM_UNLOCK, {});
    }
    function checkoutComplete(data) {
      if (!data?.checkout?.completed) return;
      sendSegment(PREMIUM_UNLOCK_PAID, {
        product: data?.product ?? {},
        user: data?.user ?? {}
      });
      if (data?.checkout?.redirect_url) {
        router.push(data?.checkout?.redirect_url);
      }
    }
    function checkoutClosed(data) {
      sendSegment(PREMIUM_UNLOCK_FAILED, {
        product: data?.product ?? {},
        user: data?.user ?? {}
      });
    }
    function subscribe() {
      sendSegment(PREMIUM_SUBSCRIPTION, {});
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_0$3;
      const _component_Dialog = __nuxt_component_1$1;
      const _component_LearnerIcon = resolveComponent("LearnerIcon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!__props.ispremium) {
        _push(`<article data-clarity-region="article" class="w-100">${content.value ?? ""}</article>`);
      } else {
        _push(`<span class="w-100" style="${ssrRenderStyle({ "display": "inline-block", "position": "relative" })}"><div class="overlay p-3 d-flex align-items-center justify-content-center"><div class="text-center text-white mt-4"><div class="position-relative" style="${ssrRenderStyle({ backgroundColor: "#5227AD", padding: "5rem" })}" id="notify"><h3 class="fs-2 py-4">Don&#39;t Stop Learning</h3><h6 class="fs-5 text-white"> Continue reading the ${ssrInterpolate(title.value)} for $${ssrInterpolate(price.value)} only or Get instant access to all current and upcoming courses and content through subscription. </h6>`);
        _push(ssrRenderComponent(_component_Button, {
          appearance: "primary",
          size: "large",
          type: "button",
          onClick: openPremium,
          "custom-style": { backgroundColor: "#633db5", color: "#fff" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Unlock Now `);
            } else {
              return [
                createTextVNode(" Unlock Now ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="row g-3"><article data-clarity-region="article" class="w-100">${content.value ?? ""}</article></div></span>`);
      }
      _push(ssrRenderComponent(_component_Dialog, {
        modelValue: isPremiumDialogOpen.value,
        "onUpdate:modelValue": ($event) => isPremiumDialogOpen.value = $event,
        contentClass: ""
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3${_scopeId}>Don&#39;t Stop Learning</h3><div class="py-3"${_scopeId}><div class="${ssrRenderClass([{ active: showPremiumContent.value }, "w-100 p-2 my-4 d-flex hover justify-content-center align-items-center"])}"${_scopeId}><div class="ps-2"${_scopeId}><h4${_scopeId}>Continue reading</h4><p class="fs-6"${_scopeId}> Continue reading the &quot;${ssrInterpolate(title.value)}&quot; for $${ssrInterpolate(price.value)} only </p></div></div><div class="${ssrRenderClass([{ active: showSubscription.value }, "w-100 p-2 my-4 hover d-flex justify-content-center align-items-center"])}"${_scopeId}><div class="ps-2"${_scopeId}><h4${_scopeId}>Monthly Subscription</h4><p class="fs-6"${_scopeId}> Get instant access to all current and upcoming courses and content through subscription. </p></div></div></div><div class="w-100"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LearnerIcon, { class: "mw-100" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h3", null, "Don't Stop Learning"),
              createVNode("div", { class: "py-3" }, [
                createVNode("div", {
                  class: ["w-100 p-2 my-4 d-flex hover justify-content-center align-items-center", { active: showPremiumContent.value }],
                  onClick: openPremiumContent
                }, [
                  createVNode("div", { class: "ps-2" }, [
                    createVNode("h4", null, "Continue reading"),
                    createVNode("p", { class: "fs-6" }, ' Continue reading the "' + toDisplayString(title.value) + '" for $' + toDisplayString(price.value) + " only ", 1)
                  ])
                ], 2),
                createVNode("div", {
                  class: ["w-100 p-2 my-4 hover d-flex justify-content-center align-items-center", { active: showSubscription.value }],
                  onClick: openSubscription
                }, [
                  createVNode("div", { class: "ps-2" }, [
                    createVNode("h4", null, "Monthly Subscription"),
                    createVNode("p", { class: "fs-6" }, " Get instant access to all current and upcoming courses and content through subscription. ")
                  ])
                ], 2)
              ]),
              createVNode("div", { class: "w-100" }, [
                createVNode(_component_LearnerIcon, { class: "mw-100" })
              ])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (showPremiumContent.value) {
              _push2(`<span${_scopeId}><div class="d-flex justify-content-center align-items-center"${_scopeId}><div class="w-100 px-2" style="${ssrRenderStyle({ "max-width": "fit-content" })}"${_scopeId}><h4${_scopeId}>Unlock Advanced Chapters</h4><p class="fs-6 my-4"${_scopeId}>${chapterContent.value ?? ""}</p></div></div><div class="text-center mt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                appearance: "purple",
                type: "button",
                class: "col-12 py-3 my-2 fw-bold",
                onClick: unlock
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Unlock now for $${ssrInterpolate(price.value)}`);
                  } else {
                    return [
                      createTextVNode(" Unlock now for $" + toDisplayString(price.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></span>`);
            } else {
              _push2(`<!---->`);
            }
            if (showSubscription.value) {
              _push2(`<span${_scopeId}><div class="d-flex justify-content-center align-items-center"${_scopeId}><div class="w-100 px-2" style="${ssrRenderStyle({ "max-width": "fit-content" })}"${_scopeId}><h4${_scopeId}>Own your backend journey</h4><p class="fs-6 my-4"${_scopeId}> Get instant access to all current and upcoming courses and content through subscription. </p><ul${_scopeId}><li${_scopeId}>Personal Backend Portfolio to showcase your skills</li><li${_scopeId}>Learn to build from Thousands Real-world Projects</li><li${_scopeId}>Track your learnings and set schedules</li><li${_scopeId}> Follow Expert Vetted roadmaps to learn backend engineering. </li><li${_scopeId}> Map courses to Backend Projects to help you master your skills </li><li${_scopeId}> Online coding challenges by experts to improve your skills </li><li${_scopeId}> Pick projects from different business domains to practice. </li></ul></div></div><div class="text-center mt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                appearance: "purple",
                type: "button",
                class: "col-12 py-3 my-2 fw-bold",
                onClick: subscribe
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Subscribe Now `);
                  } else {
                    return [
                      createTextVNode(" Subscribe Now ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              showPremiumContent.value ? (openBlock(), createBlock("span", { key: 0 }, [
                createVNode("div", { class: "d-flex justify-content-center align-items-center" }, [
                  createVNode("div", {
                    class: "w-100 px-2",
                    style: { "max-width": "fit-content" }
                  }, [
                    createVNode("h4", null, "Unlock Advanced Chapters"),
                    createVNode("p", {
                      class: "fs-6 my-4",
                      innerHTML: chapterContent.value
                    }, null, 8, ["innerHTML"])
                  ])
                ]),
                createVNode("div", { class: "text-center mt-2" }, [
                  createVNode(_component_Button, {
                    appearance: "purple",
                    type: "button",
                    class: "col-12 py-3 my-2 fw-bold",
                    onClick: withModifiers(unlock, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Unlock now for $" + toDisplayString(price.value), 1)
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true),
              showSubscription.value ? (openBlock(), createBlock("span", { key: 1 }, [
                createVNode("div", { class: "d-flex justify-content-center align-items-center" }, [
                  createVNode("div", {
                    class: "w-100 px-2",
                    style: { "max-width": "fit-content" }
                  }, [
                    createVNode("h4", null, "Own your backend journey"),
                    createVNode("p", { class: "fs-6 my-4" }, " Get instant access to all current and upcoming courses and content through subscription. "),
                    createVNode("ul", null, [
                      createVNode("li", null, "Personal Backend Portfolio to showcase your skills"),
                      createVNode("li", null, "Learn to build from Thousands Real-world Projects"),
                      createVNode("li", null, "Track your learnings and set schedules"),
                      createVNode("li", null, " Follow Expert Vetted roadmaps to learn backend engineering. "),
                      createVNode("li", null, " Map courses to Backend Projects to help you master your skills "),
                      createVNode("li", null, " Online coding challenges by experts to improve your skills "),
                      createVNode("li", null, " Pick projects from different business domains to practice. ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "text-center mt-2" }, [
                  createVNode(_component_Button, {
                    appearance: "purple",
                    type: "button",
                    class: "col-12 py-3 my-2 fw-bold",
                    onClick: withModifiers(subscribe, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Subscribe Now ")
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/ReadArticle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$8, { __name: "ReadArticle" });
const _sfc_main$7 = {
  props: {
    link: {
      type: String,
      default: "#"
    },
    showRead: {
      type: Boolean,
      default: false
    },
    showDownload: {
      type: Boolean,
      default: false
    },
    readLink: {
      type: String,
      default: "#"
    },
    bgColor: {
      type: String,
      default: "#5227AD"
    },
    title: {
      type: String,
      default: "In a hurry? Save this article as a PDF."
    },
    description: {
      type: String,
      default: "Tired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers."
    },
    showClip: {
      type: Boolean,
      default: true
    },
    btnColor: {
      type: String,
      default: "#633db5"
    }
  },
  methods: {
    adjust(color, amount) {
      if (!color.startsWith("#")) return "#4f57ff";
      return "#" + color.replace(/^#/, "").replace(
        /../g,
        (color2) => ("0" + Math.min(255, Math.max(0, parseInt(color2, 16) + amount)).toString(
          16
        )).slice(-2)
      );
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center text-white my-4" }, _attrs))} data-v-dcd29552><div class="position-relative pad" style="${ssrRenderStyle({ backgroundColor: $props.bgColor, padding: "5rem" })}"${ssrRenderAttr("id", $props.showClip ? "notify" : "")} data-v-dcd29552><h3 class="fs-2 py-4" data-v-dcd29552>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
    _push(`${ssrInterpolate($props.title)}`);
  }, _push, _parent);
  _push(`</h3><p class="fs-5" data-v-dcd29552>`);
  ssrRenderSlot(_ctx.$slots, "description", {}, () => {
    _push(`${ssrInterpolate($props.description)}`);
  }, _push, _parent);
  _push(`</p>`);
  ssrRenderSlot(_ctx.$slots, "btn", {}, () => {
    _push(`<div class="d-flex justify-content-center gap-4" data-v-dcd29552>`);
    if ($props.showRead) {
      _push(ssrRenderComponent(_component_Button, {
        appearance: "primary",
        size: "large",
        type: "link",
        target: "_blank",
        link: $props.readLink,
        "custom-style": {
          backgroundColor: $options.adjust($props.bgColor, 20),
          color: "#fff"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Click here to Read Online`);
          } else {
            return [
              createTextVNode(" Click here to Read Online")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($props.showDownload) {
      _push(ssrRenderComponent(_component_Button, {
        appearance: "primary",
        target: "_blank",
        size: "large",
        type: "link",
        link: $props.link,
        "custom-style": {
          backgroundColor: $options.adjust($props.bgColor, 40),
          color: "#fff"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Click here to download`);
          } else {
            return [
              createTextVNode("Click here to download")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  }, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/CustomAlert.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-dcd29552"]]), { __name: "CustomAlert" });
const _sfc_main$6 = {
  props: {
    color: { type: String, default: "" },
    post: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    getBaseURL() {
      if (this.$route?.name?.includes("resources-hub-slug")) return `/resources`;
      return `/`;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `${$options.getBaseURL}/${_ctx.$route.params.hub}/${$props.post.slug}`
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-lg-12 col-12 mt-4 rounded"${_scopeId}><div class="p-5 box" style="${ssrRenderStyle({ "background-color": "white" })}"${_scopeId}><h3 class="fs-4 py-4"${_scopeId}>${ssrInterpolate($props.post.title)}</h3><p class="fs-5"${_scopeId}>${$props.post.excerpt ?? ""}</p><div class="d-flex justify-content-between pt-4" style="${ssrRenderStyle({ color: $props.color })}"${_scopeId}><h5 class="fs-5"${_scopeId}>Explore this Resource</h5><div class="rounded-circle d-flex justify-content-center align-items-center" style="${ssrRenderStyle([{ "width": "40px", "height": "40px" }, { backgroundColor: $props.color, color: "white" }])}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" fill="currentColor" height="24"${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path d="M16 12l-6 6V6z"${_scopeId}></path></svg></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-lg-12 col-12 mt-4 rounded" }, [
            createVNode("div", {
              class: "p-5 box",
              style: { "background-color": "white" }
            }, [
              createVNode("h3", { class: "fs-4 py-4" }, toDisplayString($props.post.title), 1),
              createVNode("p", {
                class: "fs-5",
                innerHTML: $props.post.excerpt
              }, null, 8, ["innerHTML"]),
              createVNode("div", {
                class: "d-flex justify-content-between pt-4",
                style: { color: $props.color }
              }, [
                createVNode("h5", { class: "fs-5" }, "Explore this Resource"),
                createVNode("div", {
                  class: "rounded-circle d-flex justify-content-center align-items-center",
                  style: [{ "width": "40px", "height": "40px" }, { backgroundColor: $props.color, color: "white" }]
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    fill: "currentColor",
                    height: "24"
                  }, [
                    createVNode("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }),
                    createVNode("path", { d: "M16 12l-6 6V6z" })
                  ]))
                ], 4)
              ], 4)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/ChapterOutline.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]), { __name: "ChapterOutline" });
const _imports_0 = "" + __buildAssetsURL("3.jQkOGVDD.png");
const _imports_1 = "" + __buildAssetsURL("2.B2FGzP3s.png");
const _imports_2 = "" + __buildAssetsURL("1.DLd0xgxL.png");
const _sfc_main$5 = {
  props: {
    bgColor: {
      type: String,
      default: "#5227AD"
    }
  },
  computed: {
    campaign() {
      return this.$route?.params?.slug ?? "post_details";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-whie my-5" }, _attrs))}><div class="position-relative pad" style="${ssrRenderStyle({ backgroundColor: _ctx.white })}"><div class="py-3" style="${ssrRenderStyle(`border-bottom: 4px solid ${$props.bgColor}`)}"><h3>Whenever you&#39;re ready</h3><p>There are 4 ways we can help you become a great backend engineer:</p></div><div class="py-3"><div class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2" style="${ssrRenderStyle({ "border-bottom": "1px solid #ddd" })}"><div class="w-lg-25"><img class="w-100"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="w-100"><a target="_blank"${ssrRenderAttr("href", `https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${$options.campaign}`)}><h4 style="${ssrRenderStyle({ "color": "rgb(187, 74, 3)" })}">The MB Platform</h4></a><p> Join 1000+ backend engineers learning backend engineering. Build real-world backend projects, learn from expert-vetted courses and roadmaps, track your learnings and set schedules, and solve backend engineering tasks, exercises, and challenges. </p></div></div><div class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2" style="${ssrRenderStyle({ "border-bottom": "1px solid #ddd" })}"><div class="w-lg-25"><img class="w-100"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="w-100"><a target="_blank"${ssrRenderAttr("href", `https://masteringbackend.com/academy?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${$options.campaign}`)}><h4 style="${ssrRenderStyle({ "color": "rgb(187, 74, 3)" })}">The MB Academy</h4></a><p> The “MB Academy” is a 6-month intensive Advanced Backend Engineering BootCamp to produce great backend engineers. </p></div></div><div class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2" style="${ssrRenderStyle({ "border-bottom": "1px solid #ddd" })}"><div class="w-lg-25"><img class="w-100"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="w-100"><a target="_blank"${ssrRenderAttr("href", `https://newsletter.masteringbackend.com/?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${$options.campaign}`)}><h4 style="${ssrRenderStyle({ "color": "rgb(187, 74, 3)" })}">Join Backend Weekly</h4></a><p> If you like post like this, you will absolutely enjoy our exclusive weekly newsletter, Sharing exclusive backend engineering resources to help you become a great Backend Engineer. </p></div></div><div class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2" style="${ssrRenderStyle({ "border-bottom": "1px solid #ddd" })}"><div class="w-lg-25"><img class="w-100"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="w-100"><a target="_blank"${ssrRenderAttr("href", `https://getbackendjobs.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${$options.campaign}`)}><h4 style="${ssrRenderStyle({ "color": "rgb(187, 74, 3)" })}">Get Backend Jobs</h4></a><p> Find over 2,000+ Tailored International Remote Backend Jobs or Reach 50,000+ backend engineers on the #1 Backend Engineering Job Board </p></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/PlatformAd.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]), { __name: "PlatformAd" });
const _sfc_main$4 = {
  props: {
    post: {
      type: Object,
      default: () => {
      }
    },
    color: {
      type: String,
      default: ""
    },
    isChapter: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  computed: {
    hasPDF() {
      const chapter = this.post.chapter;
      const chapters = this.post.chapters;
      return Array.isArray(chapters) && chapters.length > 0 && !!chapter?.id && chapter?.hub?.type === "pdf";
    },
    showReadMore() {
      return this.post?.chapters?.length > 0 && this.$route.path.startsWith("/");
    },
    generateReadLink() {
      if (this.isBook) {
        const chapter = this.post.chapters[0];
        return "/books/" + chapter?.hub?.slug;
      }
      return `/posts/${this.post.slug}`;
    },
    generatePdfURL() {
      if (this.isBook) {
        const chapter = this.post.chapters[0];
        return "/books/" + chapter?.hub?.slug;
      }
      return `/resources/${this.post?.chapter?.hub?.slug}/${this.post?.slug}`;
    },
    hubSlug() {
      return this.post?.hub?.slug ?? "";
    },
    content() {
      return this.post?.content ?? this.post?.description ?? "";
    },
    isBook() {
      return this.post?.type === "book";
    },
    description() {
      return `
      Click on the button${this.hasPDF ? "s" : ""} below to ${this.hasPDF ? "download for offline or" : ""} read the ${this.title} online`;
    },
    title() {
      if (this.isChapter) return "Overview";
      return this.post?.title ?? "";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ReadArticle = __nuxt_component_0;
  const _component_CustomAlert = __nuxt_component_1;
  const _component_ChapterOutline = __nuxt_component_2;
  const _component_PlatformAd = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-md-8" }, _attrs))} data-v-fc34e392>`);
  if ($props.isChapter) {
    _push(`<span class="fw-light" data-v-fc34e392><p style="${ssrRenderStyle({ color: $props.color })}" class="pb-1" data-v-fc34e392>${ssrInterpolate($options.title)}</p></span>`);
  } else {
    _push(`<h1 class="fw-light fs-3 fw-bold pb-4" data-v-fc34e392>${ssrInterpolate($options.title)}</h1>`);
  }
  _push(ssrRenderComponent(_component_ReadArticle, {
    post: {
      ...$props.post,
      content: $options.content
    }
  }, null, _parent));
  if ($options.showReadMore) {
    _push(`<div class="${ssrRenderClass({ "pb-5": !$props.isChapter })}" data-v-fc34e392>`);
    _push(ssrRenderComponent(_component_CustomAlert, {
      bgColor: $props.color,
      showRead: true,
      showDownload: $options.hasPDF,
      readLink: $options.generateReadLink,
      link: $options.generatePdfURL
    }, {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Access the ${ssrInterpolate($options.title)}`);
        } else {
          return [
            createTextVNode(" Access the " + toDisplayString($options.title), 1)
          ];
        }
      }),
      description: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($options.description)}`);
        } else {
          return [
            createTextVNode(toDisplayString($options.description), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.isChapter) {
    _push(`<div class="w-100 pt-5" data-v-fc34e392><!--[-->`);
    ssrRenderList($props.post?.posts, (post, i) => {
      _push(ssrRenderComponent(_component_ChapterOutline, {
        key: i,
        color: $props.color,
        post: { ...post, hub: $options.hubSlug }
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_PlatformAd, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/HubContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fc34e392"]]), { __name: "HubContent" });
const _sfc_main$3 = {
  props: {
    chapter: { type: Object, default: () => {
    } },
    outlines: { type: Array, default: () => [] }
  },
  data: () => ({ hubs: [] }),
  computed: {
    getBaseURL() {
      if (this.$route?.name?.includes("resources-hub-slug")) return `/resources`;
      return `/`;
    },
    chapterSlug() {
      return this.chapter?.slug ?? "";
    },
    next() {
      const size = this.chapter?.posts?.length;
      const currentSlug = this.$route.params.slug;
      let currentIndex = this.outlines.findIndex(
        (item) => item.slug === currentSlug
      );
      if (this.outlines[size - 1].slug === currentSlug) {
        const chapter = this.nextChapter();
        if (!chapter || !chapter.posts || !chapter?.posts?.length) return;
        return {
          title: chapter.title,
          slug: chapter.slug
        };
      }
      currentIndex++;
      return this.outlines[currentIndex];
    },
    prev() {
      const currentSlug = this.$route.params.slug;
      let currentIndex = this.outlines.findIndex(
        (item) => item.slug === currentSlug
      );
      if (this.outlines[0].slug === currentSlug) {
        const chapter = this.prevChapter();
        if (!chapter || !chapter.posts || !chapter?.posts?.length) return;
        return {
          title: chapter.title,
          slug: chapter.slug
        };
      }
      currentIndex--;
      return this.outlines[currentIndex];
    }
  },
  async created() {
    await this.getHub();
  },
  methods: {
    async getHub() {
      const slug = this.$route.params.hub;
      const getHub = this.$store.getters["hubs/getHub"];
      let hub = await getHub(slug);
      if (!hub?.length) {
        hub = await this.$store.dispatch("hubs/getHub", {
          slug,
          populate: {
            image: true,
            chapters: {
              populate: {
                posts: true
              }
            }
          }
        });
      }
      this.hubs = hub;
      return hub;
    },
    prevChapter() {
      const hub = this.hubs;
      if (!hub || !hub?.chapters || !hub?.chapters?.length) return;
      const chapters = hub.chapters;
      if (chapters[0].slug === this.chapterSlug) return;
      let currentIndex = chapters.findIndex(
        (item) => item.slug === this.chapterSlug
      );
      currentIndex--;
      return chapters[currentIndex];
    },
    nextChapter() {
      const hub = this.hubs;
      if (!hub || !hub?.chapters || !hub?.chapters?.length) return;
      const chapters = hub.chapters;
      if (chapters[chapters.length - 1].slug === this.chapterSlug) return;
      let currentIndex = chapters.findIndex(
        (item) => item.slug === this.chapterSlug
      );
      currentIndex++;
      return chapters[currentIndex];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row p-4" }, _attrs))}><div class="col-md-6">`);
  if ($options.prev) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `${$options.getBaseURL}/${_ctx.$route.params.hub}/${$options.prev.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="fw-normal" style="${ssrRenderStyle({ "color": "#f7f5fa" })}"${_scopeId}>Prev</p><h4 class="text-white"${_scopeId}>${ssrInterpolate($options.prev ? $options.prev.title : "")}</h4>`);
        } else {
          return [
            createVNode("p", {
              class: "fw-normal",
              style: { "color": "#f7f5fa" }
            }, "Prev"),
            createVNode("h4", { class: "text-white" }, toDisplayString($options.prev ? $options.prev.title : ""), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-6 text-md-end">`);
  if ($options.next) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `${$options.getBaseURL}/${_ctx.$route.params.hub}/${$options.next.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="text-white" style="${ssrRenderStyle({ "color": "#f7f5fa" })}"${_scopeId}>Next</p><h4 class="text-white"${_scopeId}>${ssrInterpolate($options.next ? $options.next.title : "")}</h4>`);
        } else {
          return [
            createVNode("p", {
              class: "text-white",
              style: { "color": "#f7f5fa" }
            }, "Next"),
            createVNode("h4", { class: "text-white" }, toDisplayString($options.next ? $options.next.title : ""), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/HubPagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "HubPagination" });
const _sfc_main$2 = {
  __name: "HubContentOverview",
  __ssrInlineRender: true,
  props: {
    chapter: {
      type: Object,
      default: () => ({})
    },
    post: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const postSize = computed(() => props.chapter?.posts?.length > 1);
    const color = computed(() => {
      const mixedColor = props.chapter?.color ?? "";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const c = first.split(" ")[0];
        return `#${c.replace(/[^a-zA-Z0-9 ]/g, "")}`;
      }
      return mixedColor;
    });
    const hub = computed(() => props.chapter?.hub ?? {});
    const outlines = computed(
      () => props.chapter?.posts?.map((post) => ({
        title: post.title,
        slug: post.slug
      })) ?? []
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HubBanner = __nuxt_component_0$1;
      const _component_Breadcrumb = _sfc_main$b;
      const _component_Outline = _sfc_main$a;
      const _component_HubContent = __nuxt_component_3;
      const _component_HubPagination = __nuxt_component_4;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HubBanner, {
        chapter: __props.chapter,
        color: color.value
      }, null, _parent));
      _push(`<section class="main" style="${ssrRenderStyle({ "background-color": "#fff" })}">`);
      _push(ssrRenderComponent(_component_Breadcrumb, {
        hub: hub.value,
        color: color.value,
        chapter: __props.chapter,
        post: __props.post
      }, null, _parent));
      _push(`<div class="container"><div class="row Resources pt-4 p-0 m-0"><div class="py-4 col-md-3 w100">`);
      _push(ssrRenderComponent(_component_Outline, {
        color: color.value,
        outlines: outlines.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HubContent, {
        color: color.value,
        style: { "background-color": "white" },
        post: __props.post
      }, null, _parent));
      _push(`</div></div></section>`);
      if (postSize.value) {
        _push(`<section><div class="slides" style="${ssrRenderStyle({ background: color.value })}"><div class="container">`);
        _push(ssrRenderComponent(_component_HubPagination, {
          chapter: __props.chapter,
          outlines: outlines.value
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section></section></main>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/HubContentOverview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ChapterContentOverview",
  __ssrInlineRender: true,
  props: {
    chapter: {
      type: Object,
      default: () => ({})
    },
    post: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      const mixedColor = props.chapter?.color ?? "";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const c = first.split(" ")[0];
        return `#${c.replace(/[^a-zA-Z0-9 ]/g, "")}`;
      }
      return mixedColor;
    });
    const hub = computed(() => props.chapter?.hub ?? {});
    const outlines = computed(
      () => props.chapter?.posts?.map((post) => ({
        title: post.title,
        slug: post.slug
      })) ?? []
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HubBanner = __nuxt_component_0$1;
      const _component_Breadcrumb = _sfc_main$b;
      const _component_Outline = _sfc_main$a;
      const _component_HubContent = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HubBanner, {
        chapter: __props.chapter,
        color: color.value,
        "is-chapter": true
      }, null, _parent));
      _push(`<section class="main">`);
      _push(ssrRenderComponent(_component_Breadcrumb, {
        hub: hub.value,
        color: color.value,
        chapter: __props.chapter,
        post: __props.post
      }, null, _parent));
      _push(`<div class="container"><div class="row Resources mt-4"><div class="py-4 col-md-3 w100">`);
      _push(ssrRenderComponent(_component_Outline, {
        color: color.value,
        outlines: outlines.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HubContent, {
        post: __props.chapter,
        "is-chapter": "",
        color: color.value
      }, null, _parent));
      _push(`</div></div></section><section></section></main>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/ChapterContentOverview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const store = useHubsStore();
    const config = useRuntimeConfig();
    const { data: post } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("post", async () => {
      try {
        let post2 = store.post;
        console.log(post2);
        if (!post2) {
          post2 = await store.getPost({
            slug: route.params.slug,
            populate: "*"
          });
        }
        console.log(post2);
        return post2;
      } catch (err) {
        console.error(err);
        return null;
      }
    })), __temp = await __temp, __restore(), __temp);
    const { data: chapter } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("chapter", async () => {
      try {
        const slug = post.value?.chapter?.slug ?? route.params.slug;
        let chapter2 = store.chapter;
        if (!chapter2) {
          chapter2 = await store.getChapter({
            slug,
            populate: "*"
          });
        }
        return chapter2;
      } catch (err) {
        console.error(err);
        return null;
      }
    })), __temp = await __temp, __restore(), __temp);
    const BASE_URL = config.public.baseUrl || "https://masteringbackend.com";
    const getBaseURL = computed(() => `${BASE_URL}/`);
    const image = computed(
      () => post.value ? post.value.image ?? post.value.featured_image?.url ?? "/img/backend-2023.jpg" : "/img/backend-2023.jpg"
    );
    const stripTags = (text) => text?.replace(/(<([^>]+)>)/gi, "") || "";
    const splitTags = (tags) => Array.isArray(tags) ? tags.map((tag) => tag.title).join(", ") : "";
    const seoTarget = computed(() => post.value || chapter.value);
    useHead(() => {
      if (!seoTarget.value) return {};
      return {
        title: seoTarget.value.title,
        meta: [
          {
            name: "keywords",
            content: splitTags(seoTarget.value.tags) ?? ""
          },
          {
            name: "description",
            content: stripTags(
              seoTarget.value.description || seoTarget.value.excerpt
            )
          },
          { property: "og:title", content: seoTarget.value.title },
          {
            property: "og:description",
            content: stripTags(
              seoTarget.value.description || seoTarget.value.excerpt
            )
          },
          { property: "og:image", content: image.value },
          {
            property: "og:url",
            content: `${getBaseURL.value}${route.params.hub}/${route.params.slug}`
          },
          { property: "og:image:width", content: "800" },
          { property: "og:image:height", content: "800" },
          { property: "og:type", content: "article" },
          {
            property: "article:published_time",
            content: seoTarget.value.createdAt
          },
          { property: "article:modified_time", content: seoTarget.value.updatedAt },
          { name: "twitter:card", content: "summary_large_image" }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HubContentOverview = _sfc_main$2;
      const _component_ChapterContentOverview = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(post)) {
        _push(ssrRenderComponent(_component_HubContentOverview, {
          post: unref(post),
          chapter: unref(chapter)
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_ChapterContentOverview, {
          post: unref(post),
          chapter: unref(chapter)
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[hub]/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CL6Drd_6.mjs.map
