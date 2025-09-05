import { _ as __nuxt_component_0 } from './HubOverview-B-DEbORZ.mjs';
import { withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useRoute, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './composables-MCSzZNlt.mjs';
import { u as useHubsStore, a as useAsyncData } from './hubs-CXFpbi5L.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'qs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const store = useHubsStore();
    const config = useRuntimeConfig();
    const stripTags = (text) => text ? text.replace(/(<([^>]+)>)/gi, "") : "";
    const splitTags = (tags) => Array.isArray(tags) ? tags.map((t) => t.title).join(", ") : "";
    const { data: hub } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("hub", async () => {
      let hub2 = store.getHubBySlug(route.params.hub);
      if (!hub2) {
        hub2 = await store.getHub({
          slug: route.params.hub,
          populate: {
            image: true,
            chapters: {
              populate: { posts: true }
            }
          }
        });
      }
      return hub2;
    })), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      if (!hub.value) return {};
      const BASE_URL = config.public.BASE_URL || "https://masteringbackend.com";
      return {
        title: hub.value.title,
        meta: [
          { name: "keywords", content: splitTags(hub.value.tags) },
          { name: "description", content: stripTags(hub.value.description) },
          { property: "og:title", content: hub.value.title },
          { property: "og:description", content: stripTags(hub.value.description) },
          { property: "og:image", content: hub.value.image?.url },
          { property: "og:url", content: `${BASE_URL}/${hub.value.slug}` },
          { property: "og:image:width", content: "800" },
          { property: "og:image:height", content: "800" },
          { property: "og:type", content: "article" },
          { property: "article:published_time", content: hub.value.createdAt },
          { property: "article:modified_time", content: hub.value.updatedAt },
          { name: "twitter:card", content: "summary_large_image" }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HubOverview = __nuxt_component_0;
      if (unref(hub)) {
        _push(ssrRenderComponent(_component_HubOverview, mergeProps({ hub: unref(hub) }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[hub]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DfrLKVi1.mjs.map
