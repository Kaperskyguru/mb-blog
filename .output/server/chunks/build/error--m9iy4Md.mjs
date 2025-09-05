import { _ as __nuxt_component_0 } from './nuxt-link-B9PPBfnG.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

const _sfc_main = {
  name: "errorPage",
  layout: "error",
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: `${this.error.statusCode} error occurred`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources."
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources."
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources."
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background-color": "#f7f5fa", "width": "100% !important", "min-height": "auto", "margin": "20rem 0px" } }, _attrs))}>`);
  if ($props.error.statusCode === 404) {
    _push(`<div><div class="page-wrap d-flex flex-row align-items-center"><div class="container"><div class="row justify-content-center"><div class="col-md-12 text-center"><span class="display-1 d-block">404</span><div class="mb-4 lead"> The page you are looking for was not found. </div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/",
      class: "btn btn-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Back to Home`);
        } else {
          return [
            createTextVNode("Back to Home")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.error.statusCode !== 404) {
    _push(`<h1><div class="page-wrap d-flex flex-row align-items-center"><div class="container"><div class="row justify-content-center"><div class="col-md-12 text-center"><span class="display-1 d-block">500</span><div class="mb-4 lead"> An error occurred, please reload the page </div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/",
      class: "btn btn-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Back to Home`);
        } else {
          return [
            createTextVNode("Back to Home")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div></h1>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { error as default };
//# sourceMappingURL=error--m9iy4Md.mjs.map
