import { _ as _sfc_main$1 } from './HubsOverview-C7cnJrOa.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './composables-MCSzZNlt.mjs';
import { u as useHubsStore, a as useAsyncData } from './hubs-CXFpbi5L.mjs';
import { u as useRoute } from './server.mjs';
import './Button-DCDiVCLl.mjs';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'qs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const store = useHubsStore();
    useHead({
      title: "Hubs",
      meta: [
        {
          name: "description",
          content: "A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources."
        },
        {
          property: "og:title",
          content: "A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources."
        },
        {
          property: "og:description",
          content: "A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources."
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    });
    const { data: hubs } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("hubs", async () => {
      let hubs2 = store.hubs;
      if (!hubs2.length) {
        hubs2 = await store.getHubs({
          page: route.query?.page ? Number(route.query?.page) : 1,
          count: 22
        });
      }
      return hubs2;
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HubsOverview = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HubsOverview, { hubs: unref(hubs) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BRC9Tb8v.mjs.map
