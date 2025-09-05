import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Footer-BqMziFCM.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-B9PPBfnG.mjs';
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
  name: "HubLayout",
  data() {
    return {
      baseURL: process.env.BASE_URL || "https://masteringbackend.com"
    };
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `${this.baseURL}${this.$route.path}`
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(_attrs)}><div class="notif"><h2 class="d-flex justify-center gap-1.5 text-xs font-medium text-black text-base" style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "bold" })}"> Unlock Your Python Backend Career: Build 30 Projects in 30 Days. <a class="justify-center gap-1.5 rounded bg-black px-2 py-0.5 text-sm text-xs font-medium uppercase tracking-wide text-white hover:bg-zinc-800 px-sm-3 py-sm-1" target="_blank" href="https://python30.masteringbackend.com?ref=masteringbackend">Join now for just $54</a></h2></div><header>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`</header>`);
  ssrRenderSlot(_ctx.$slots, "default", { class: "mb-5" }, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/hub.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hub = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { hub as default };
//# sourceMappingURL=hub-DmHkL1Mx.mjs.map
