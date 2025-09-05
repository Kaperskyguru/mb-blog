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
    res: {},
    show: false
  }),
  props: {
    post: {
      type: Object,
      default: () => {
      }
    },
    chapter: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    // async subscribe() {
    //   const res = await submit({
    //     email: this.email,
    //     tags: ['Laravel Tips', 'Laravel Breeze'],
    //   })
    //   this.show = true
    //   if (res.type === 'info')
    //     return this.$router.push('/emails/already-subscribed')
    //   if (res.type === 'success')
    //     return this.$router.push('/emails/free-updates')
    //   this.res = res
    // },
  },
  computed: {
    color() {
      const mixedColor = this.chapter?.color ?? "";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const color = first.split(" ")[0];
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, "")}`;
      }
      return mixedColor;
    },
    outlines() {
      const outline = this.chapter?.content;
      const out = outline?.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim).filter((x) => x.trim() !== "");
      return Array.isArray(out) ? out : [];
    },
    enchargeTag() {
      return this.chapter?.encharge_tag ?? "";
    },
    title() {
      return this.chapter?.title;
    },
    description() {
      return this.chapter?.description;
    },
    isLaravelBreeze() {
      return this.chapter?.slug === "laravel-breeze";
    },
    isDocker() {
      return this.chapter?.slug === "docker-guide";
    },
    image() {
      return this.chapter?.design_url ?? "https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_0$1;
  const _component_ResourceForm = __nuxt_component_1;
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0, _temp1, _temp2;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-47e68513><section style="${ssrRenderStyle({ "background-color": "#f7f5fa" })}" data-v-47e68513><div class="container mx-auto" data-v-47e68513><div class="row d-flex align-items-center justify-content-between" data-v-47e68513><div id="chapter" class="col-lg-6 position-relative w-50" style="${ssrRenderStyle({})}" data-v-47e68513><h1 class="title__text py-4" style="${ssrRenderStyle({ "font-size": "52px", "font-weight": "800", "line-height": "62px" })}" data-v-47e68513>${ssrInterpolate($options.title)}</h1><p class="title__subtext fs-4" data-v-47e68513>${ssrInterpolate($options.description)}</p><div class="gradient" data-v-47e68513></div>`);
  if ($options.isLaravelBreeze) {
    _push(`<div class="input-group py-3" data-v-47e68513>`);
    if (!_ctx.isPDF) {
      _push(ssrRenderComponent(_component_Button, {
        "custom-style": {
          backgroundColor: `${$options.color}`,
          color: "#fff"
        },
        size: "large",
        type: "link",
        link: "https://store.masteringbackend.com/l/laravel-breeze"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("Grab Your Copy Now")}`);
          } else {
            return [
              createTextVNode(toDisplayString("Grab Your Copy Now"))
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
  if ($options.isDocker) {
    _push(`<div class="input-group py-3" data-v-47e68513>`);
    if (!_ctx.isPDF) {
      _push(ssrRenderComponent(_component_Button, {
        "custom-style": {
          backgroundColor: `${$options.color}`,
          color: "#fff"
        },
        size: "large",
        type: "link",
        link: "https://store.masteringbackend.com/l/docker-ultimate-guide"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("Grab Your Copy Now")}`);
          } else {
            return [
              createTextVNode(toDisplayString("Grab Your Copy Now"))
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
  _push(`</div><div class="col-lg-6 ml-auto p-2" data-v-47e68513><div id="chapter" class="container mx-auto w-75" data-v-47e68513><div class="shadow border p-4 my-4" style="${ssrRenderStyle({ "background-color": "white" })}" data-v-47e68513>`);
  if (!$options.isLaravelBreeze || !$options.isDocker) {
    _push(ssrRenderComponent(_component_ResourceForm, {
      tag: $options.enchargeTag,
      color: $options.color,
      isWaiting: false
    }, null, _parent));
  } else if ($options.isDocker) {
    _push(`<img${ssrRenderAttrs(_temp0 = mergeProps({
      class: "img-fluid",
      "data-src": "https://public-files.gumroad.com/4b4q5j1x03zq6t19w7wnxizu5048",
      alt: "Laravel breeze PDF",
      srcset: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-47e68513>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
  } else {
    _push(`<img${ssrRenderAttrs(_temp1 = mergeProps({
      class: "img-fluid",
      "data-src": "https://strapi-images-aws-s3.s3.us-west-2.amazonaws.com/1694963417_e55e6533b9.png?updated_at=2023-09-17T16:31:10.286Z",
      alt: "Laravel breeze PDF",
      srcset: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-47e68513>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}`);
  }
  _push(`</div></div></div></div></div></section><section class="w-100" style="${ssrRenderStyle({ "background-color": "rgb(243, 246, 250)" })}" data-v-47e68513><div class="py-5 container mx-auto" data-v-47e68513><div id="hero_text" class="container mx-auto" data-v-47e68513><div class="my-5" data-v-47e68513><h2 class="fw-bolder" style="${ssrRenderStyle({ "font-size": "50px", "font-weight": "800", "line-height": "65px" })}" data-v-47e68513> What is the Ebook about? </h2></div></div><div class="container mx-auto" id="hero_text" data-v-47e68513><div class="row py-1" data-v-47e68513><div class="col-lg-6" data-v-47e68513><div class="shadow p-4 border my-4" style="${ssrRenderStyle({ "max-width": "500px" })}" data-v-47e68513><img${ssrRenderAttrs(_temp2 = mergeProps({
    class: "img-fluid cover",
    "data-src": $options.image,
    alt: $options.title
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-47e68513>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}</div></div><div class="col-lg-6" data-v-47e68513><div data-v-47e68513><h3 class="py-4 fs-2 fw-bold" style="${ssrRenderStyle({ "color": "#121127", "font-size": "40px", "line-height": "58.5px" })}" data-v-47e68513>${ssrInterpolate($options.title)}</h3><p style="${ssrRenderStyle({ "color": "#121127" })}" data-v-47e68513>${ssrInterpolate($options.description)}</p><hr class="my-4" data-v-47e68513><h3 class="my-3" data-v-47e68513>What to expect?</h3><!--[-->`);
  ssrRenderList($options.outlines, (outline, i) => {
    _push(`<li style="${ssrRenderStyle({ "font-size": "20px", "line-height": "28px", "color": "#121127" })}" class="lh-lg list-unstyled fw-normal" data-v-47e68513><span class="d-flex flex-row justify-content-start align-items-center title__text" to="#" data-v-47e68513><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", $options.color)} width="24" height="24" data-v-47e68513><path fill="none" d="M0 0h24v24H0z" data-v-47e68513></path><path d="M16 12l-6 6V6z" data-v-47e68513></path></svg><span data-v-47e68513>${ssrInterpolate(outline)}</span></span></li>`);
  });
  _push(`<!--]--></div></div></div></div></div></section></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/ResourceOverview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-47e68513"]]), { __name: "ResourceOverview" });
const _sfc_main = {
  async asyncData({ params, store }) {
    try {
      const getPost = await store.getters["post/getPost"];
      let post = await getPost(params.slug);
      if (post === void 0 || !post || post === null) {
        post = await store.dispatch("post/getPost", {
          slug: params.slug,
          populate: "chapter"
        });
      }
      const slug = post?.chapter?.slug ?? params.slug;
      const getChapter = await store.getters["hubs/getChapter"];
      let chapter = await getChapter(slug);
      if (chapter === void 0 || !chapter || chapter === null) {
        chapter = await store.dispatch("hubs/getChapter", {
          slug
        });
      }
      return { post, chapter };
    } catch (error) {
    }
  },
  data: () => ({
    BASE_URL: process.env.BASE_URL || "https://masteringbackend.com"
  }),
  computed: {
    image() {
      return this.post && (this.post?.image ?? this.post?.featured_image?.url ?? "/img/backend-2023.jpg");
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
    let post = {};
    if (this.post) post = { ...this.post };
    else post = { ...this.chapter };
    if (post) {
      return {
        title: `${post.title}`,
        meta: [
          {
            hid: "keywords",
            name: "keywords",
            content: `${this.splitTags(post.tags) ?? ""}`
          },
          {
            hid: "description",
            name: "description",
            content: `${this.stripTags(post?.description || post?.excerpt)}`
          },
          { hid: "og:title", property: "og:title", content: post.title },
          {
            hid: "og:description",
            property: "og:description",
            content: this.stripTags(post?.description || post?.excerpt)
          },
          { hid: "og:image", property: "og:image", content: this.image },
          {
            hid: "og:url",
            property: "og:url",
            content: `${this.BASE_URL}/resources/${this.$route.params.hub}/${this.$route.params.slug}`
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
            content: post?.createdAt
          },
          {
            hid: "article:modified_time",
            property: "article:modified_time",
            content: post?.updatedAt
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
  const _component_ResourceOverview = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "hero__grid" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ResourceOverview, {
    post: _ctx.post,
    chapter: _ctx.chapter
  }, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/_hub/_slug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug as default };
//# sourceMappingURL=_slug-Bn16qRuY.mjs.map
