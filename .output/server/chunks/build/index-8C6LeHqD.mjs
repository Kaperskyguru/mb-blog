import { _ as _sfc_main$1 } from './HubsOverview-C7cnJrOa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  name: "HubIndex",
  layout: "hub",
  async asyncData({ query, store }) {
    try {
      const getBooks = store.getters["hubs/getBooks"];
      let books = await getBooks();
      if (!books?.length) {
        const data = {};
        data.page = query.page ? query.page : 1;
        data.count = 22;
        books = await store.dispatch("hubs/getBooks", {
          ...data,
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
      return { books };
    } catch (error) {
      const books = [];
      return { books };
    }
  },
  head() {
    return {
      title: "Backend Engineering Books",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Access to a catalog of backend books, backend development books, advanced backend engineering books, nestjs books and backend web development books. Next-level Backend Engineering books and Exclusive resources.`
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `Access to a catalog of backend books, backend development books, advanced backend engineering books, nestjs books and backend web development books. Next-level Backend Engineering books and Exclusive resources.`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `Access to a catalog of backend books, backend development books, advanced backend engineering books, nestjs books and backend web development books. Next-level Backend Engineering books and Exclusive resources.`
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
  const _component_HubsOverview = _sfc_main$1;
  _push(ssrRenderComponent(_component_HubsOverview, mergeProps({
    title: "Welcome To Our Library",
    desc: "Whether you're new to backend engineering, or want to scale up, this is your home for backend engineering books.",
    hubs: _ctx.books
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/books/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-8C6LeHqD.mjs.map
