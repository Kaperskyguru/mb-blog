import { _ as __nuxt_component_0$1 } from './Button-DCDiVCLl.mjs';
import { _ as __nuxt_component_1 } from './ResourceForm-CBR8yoPA.mjs';
import { mergeProps, resolveDirective, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  data: () => ({
    message: {},
    res: {}
  }),
  props: {
    hub: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    color() {
      const mixedColor = this.hub?.color ?? "#FF715D";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const color = first.split(" ")[0];
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, "")}`;
      }
      return mixedColor;
    },
    isPremium() {
      return this.hub?.is_premium;
    },
    link() {
      if (this.isPremium) return this.linkToPay;
      return `/${this.slug}`;
    },
    linkToPay() {
      return this.hub?.link ?? "";
    },
    slug() {
      return this.hub?.slug ?? "#";
    },
    isWaiting() {
      return this.hub?.activate_waiting ?? false;
    },
    enchargeTag() {
      return this.hub?.encharge_tag ?? "";
    },
    title() {
      return this.hub?.title;
    },
    description() {
      return this.hub?.description;
    },
    content() {
      return this.hub?.content ?? this.hub?.description;
    },
    chapters() {
      const chapters = this.hub?.chapters;
      if (chapters && chapters.length > 1) return chapters ?? [];
      return (chapters && chapters[0].posts) ?? [];
    },
    animatedBookCover() {
      return (this.hub && this.hub?.image?.url) ?? "https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png";
    },
    bookCover() {
      return (this.hub && this.hub?.design_url) ?? "https://files.selar.co/product-images/2023/products/masteringbackend/technical-writing-the-com-selar.co-64999ea31aafb.png";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_0$1;
  const _component_ResourceForm = __nuxt_component_1;
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0, _temp1;
  _push(`<section${ssrRenderAttrs(_attrs)}><section style="${ssrRenderStyle({ "background-color": "#f7f5fa" })}"><div class="container mx-auto"><div class="row d-flex"><div id="chapter" class="col-md-7 position-relative" style="${ssrRenderStyle({})}"><h1 class="title__text py-4" style="${ssrRenderStyle({ "font-size": "52px", "font-weight": "800", "line-height": "62px" })}">${ssrInterpolate($options.title)} for Backend Engineers </h1><p class="title__subtext fs-4">${ssrInterpolate($options.description)}</p><div class="gradient"></div>`);
  if (!$options.slug.includes("design-patterns")) {
    _push(`<div class="py-3 input-group">`);
    if (!_ctx.activateDownload) {
      _push(ssrRenderComponent(_component_Button, {
        "custom-style": {
          backgroundColor: `${$options.color}`,
          color: "#fff"
        },
        size: "large",
        class: "py-2 my-2 fs-4 fw-bold",
        type: "link",
        link: $options.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate($options.isPremium ? "Grab Your Copy Now" : "Read Online")}`);
          } else {
            return [
              createTextVNode(toDisplayString($options.isPremium ? "Grab Your Copy Now" : "Read Online"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($options.linkToPay && !$options.isWaiting && !$options.isPremium) {
      _push(ssrRenderComponent(_component_Button, {
        "custom-style": {
          border: `1px solid ${$options.color}`,
          color: `${$options.color} !important`
        },
        size: "large",
        type: "link",
        class: "py-2 my-2 fs-4 fw-bold",
        link: $options.linkToPay
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Download Now `);
          } else {
            return [
              createTextVNode(" Download Now ")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-md-5 hero__image">`);
  if (!$options.isWaiting) {
    _push(`<img${ssrRenderAttrs(_temp0 = mergeProps({
      class: "img-fluid",
      "data-src": $options.bookCover,
      alt: $options.title,
      srcset: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
  } else {
    _push(`<div class="shadow border p-4 my-4" style="${ssrRenderStyle({ "background-color": "white" })}">`);
    _push(ssrRenderComponent(_component_ResourceForm, {
      tag: $options.enchargeTag,
      color: $options.color,
      isWaiting: _ctx.activateDownload,
      slug: $options.slug
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div></div></div></section><section class="w-100" style="${ssrRenderStyle({ "background-color": "rgb(243, 246, 250)" })}"><div class="py-5 container mx-auto"><div id="hero_text" class="container mx-auto"><div class="my-5"><h2 class="fw-bolder" style="${ssrRenderStyle({ "font-size": "50px", "font-weight": "800", "line-height": "65px" })}"> Take a peek inside </h2></div></div><div class="container mx-auto" id="hero_text"><div class="row py-1"><div class="col-lg-6"><div class="shadow p-4 border my-4" style="${ssrRenderStyle({ "max-width": "500px" })}"><img${ssrRenderAttrs(_temp1 = mergeProps({
    class: "img-fluid cover",
    "data-src": $options.animatedBookCover,
    alt: $options.title
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</div></div><div class="col-lg-6"><div><h3 class="py-4 fs-2 fw-bold" style="${ssrRenderStyle({ "color": "#121127", "font-size": "40px", "line-height": "58.5px" })}">${ssrInterpolate($options.title)}</h3><p style="${ssrRenderStyle({ "color": "#121127" })}">${ssrInterpolate($options.content)}</p><hr class="my-4">`);
  if ($options.chapters?.length) {
    _push(`<h3 class="my-3">What to expect?</h3>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($options.chapters, (outline, i) => {
    _push(`<li style="${ssrRenderStyle({ "font-size": "20px", "line-height": "28px", "color": "#121127" })}" class="lh-lg list-unstyled fw-normal"><span class="d-flex flex-row justify-content-start align-items-center title__text" to="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", $options.color)} width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 12l-6 6V6z"></path></svg><span>${ssrInterpolate(outline.title)}</span></span></li>`);
  });
  _push(`<!--]--></div></div></div></div></div></section></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/BookOverview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "BookOverview" });
const _sfc_main = {
  async asyncData({ params, store }) {
    try {
      const getHub = store.getters["hubs/getHub"];
      let hub = await getHub(params.slug);
      if (!hub?.length) {
        hub = await store.dispatch("hubs/getHub", {
          slug: params.slug,
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
      return { hub };
    } catch (error) {
      console.log(error);
    }
  },
  data: () => ({
    BASE_URL: process.env.BASE_URL || "https://masteringbackend.com"
  }),
  computed: {
    image() {
      return this.hub && (this.hub?.design_url ?? this.hub?.image ?? "/img/backend-2023.jpg");
    }
  },
  methods: {
    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, "");
      }
    },
    splitTags(tags) {
      if (Array.isArray(tags)) {
        return tags.map((tag) => tag.title).join(", ");
      }
    }
  },
  head() {
    if (this.hub) {
      return {
        title: `${this.hub?.title}`,
        meta: [
          {
            hid: "keywords",
            name: "keywords",
            content: `${this.hub?.chapters?.map((chapter) => {
              return chapter.title;
            })}`
          },
          {
            hid: "description",
            name: "description",
            content: `${this.stripTags(this.hub?.description)}`
          },
          { hid: "og:image", property: "og:image", content: this.image },
          { hid: "og:title", property: "og:title", content: this.hub.title },
          {
            hid: "og:description",
            property: "og:description",
            content: this.stripTags(this.hub?.description)
          },
          { hid: "og:image", property: "og:image", content: this.image },
          {
            hid: "og:url",
            property: "og:url",
            content: `${this.BASE_URL}/books/${this.$route.params.slug}`
          },
          {
            hid: "og:image:width",
            property: "og:image:width",
            content: "800"
          },
          {
            hid: "og:image:height",
            property: "og:image:height",
            content: "800"
          },
          {
            hid: "og:type",
            property: "og:type",
            content: "article"
          },
          {
            hid: "article:published_time",
            property: "article:published_time",
            content: this.hub?.createdAt
          },
          {
            hid: "article:modified_time",
            property: "article:modified_time",
            content: this.hub?.updatedAt
          },
          {
            hid: "twitter:card",
            name: "twitter:card",
            content: "summary_large_image"
          }
        ]
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BookOverview = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "hero__grid" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BookOverview, { hub: _ctx.hub }, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/books/_slug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug as default };
//# sourceMappingURL=_slug-Cs4MW22I.mjs.map
