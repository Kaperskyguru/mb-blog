import { _ as __nuxt_component_0$1 } from './nuxt-link-B9PPBfnG.mjs';
import { useAttrs, useSlots, computed, mergeProps, unref, toHandlers, withCtx, createBlock, openBlock, createVNode, Fragment, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const SvgLoader = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20display='block'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20100%20100'%3e%3ccircle%20cx='50'%20cy='50'%20r='40'%20fill='none'%20stroke='%23fff'%20stroke-width='5'/%3e%3ccircle%20cx='50'%20cy='50'%20r='40'%20fill='none'%20stroke='%23000'%20stroke-dasharray='140%2085'%20stroke-width='5'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20keyTimes='0;1'%20repeatCount='indefinite'%20type='rotate'%20values='0%2050%2050;360%2050%2050'/%3e%3c/circle%3e%3c/svg%3e";
const _sfc_main = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    appearance: {
      type: String,
      default: "primary",
      validator: (value) => [
        "primary",
        "secondary",
        "warning",
        "outline-primary",
        "primary-3",
        "outline-secondary",
        "purple",
        "none"
      ].includes(value)
    },
    size: {
      type: String,
      default: "normal",
      validator: (value) => ["small", "normal", "large"].includes(value)
    },
    waiting: { type: Boolean, default: false },
    type: { type: String, default: "btn" },
    link: { type: [Object, String], default: "#" },
    customStyle: { type: [String, Object], default: "" },
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const attrs = useAttrs();
    const slots = useSlots();
    const props = __props;
    const listeners = attrs.on || {};
    const classNames = computed(() => {
      const classNames2 = [`m-btn-${props.appearance}`];
      if (props.active) classNames2.push("active");
      if (props.appearance === "none") classNames2.push("disabled");
      if (props.disabled || props.waiting)
        classNames2.push("opacity-50 pointer-events-none cursor-default");
      classNames2.push(
        props.size === "small" ? "h-6" : props.size === "normal" ? "h-[2.1875rem]" : "h-[2.625rem]"
      );
      if (props.size === "small") {
        classNames2.push("px-1 lg:px-2 py-1 text-xs");
      } else if (props.size === "normal") {
        classNames2.push("px-3 lg:px-6 pb-1.5 pt-[0.4375rem] text-sm");
      } else {
        classNames2.push("px-4 py-2 text-base");
      }
      if (!slots.icon || !slots.default || props.waiting) {
        classNames2.push("justify-center");
      } else {
        classNames2.push("justify-between");
      }
      return classNames2.join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (props.type.includes("link")) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-d9ec80bc>`);
        if (typeof props.link === "string" && !props.link.includes("http")) {
          _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
            to: props.link,
            class: ["btn", unref(classNames)],
            disabled: props.disabled || props.waiting,
            "aria-label": props.waiting ? "Please wait…" : void 0,
            style: props.customStyle
          }, unref(attrs), toHandlers(unref(listeners))), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (props.waiting) {
                  _push2(`<div class="custom-icon" role="presentation" data-v-d9ec80bc${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(SvgLoader), { class: "-my-px" }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!--[-->`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
                  if (unref(slots).icon) {
                    _push2(`<div class="custom-icon" role="presentation" data-v-d9ec80bc${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                }
              } else {
                return [
                  props.waiting ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "custom-icon",
                    role: "presentation"
                  }, [
                    createVNode(unref(SvgLoader), { class: "-my-px" })
                  ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true),
                    unref(slots).icon ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "custom-icon",
                      role: "presentation"
                    }, [
                      renderSlot(_ctx.$slots, "icon", {}, void 0, true)
                    ])) : createCommentVNode("", true)
                  ], 64))
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<a${ssrRenderAttrs(mergeProps({
            href: props.link,
            class: ["btn", unref(classNames)],
            style: props.customStyle,
            disabled: props.disabled || props.waiting,
            "aria-label": props.waiting ? "Please wait…" : void 0,
            target: "_blank"
          }, unref(attrs)))} data-v-d9ec80bc>`);
          if (props.waiting) {
            _push(`<div class="custom-icon" role="presentation" data-v-d9ec80bc>`);
            _push(ssrRenderComponent(unref(SvgLoader), { class: "-my-px" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!--[-->`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
            if (unref(slots).icon) {
              _push(`<div class="custom-icon" role="presentation" data-v-d9ec80bc>`);
              ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          }
          _push(`</a>`);
        }
        _push(`</div>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: ["btn", unref(classNames)],
          style: [props.customStyle, { "outline": "none !important" }],
          disabled: props.disabled || props.waiting,
          "aria-label": props.waiting ? "Please wait…" : void 0
        }, unref(attrs), _attrs))} data-v-d9ec80bc>`);
        if (props.waiting) {
          _push(`<div class="custom-icon" role="presentation" data-v-d9ec80bc>`);
          _push(ssrRenderComponent(unref(SvgLoader), { class: "-my-px" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
          if (unref(slots).icon) {
            _push(`<div class="custom-icon" role="presentation" data-v-d9ec80bc>`);
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</button>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9ec80bc"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Button-DCDiVCLl.mjs.map
