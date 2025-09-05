import { _ as __nuxt_component_0$1 } from './Button-DCDiVCLl.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-B9PPBfnG.mjs';
import { computed, mergeProps, withCtx, createTextVNode, toDisplayString, resolveDirective, createVNode, withDirectives, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';

const _sfc_main$1 = {
  __name: "Chapter",
  __ssrInlineRender: true,
  props: {
    chapter: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const isPDF = computed(() => props.chapter?.hub?.type === "pdf");
    const shouldActivateWaitingList = computed(
      () => props.chapter?.hub?.activate_waiting ?? false
    );
    const isPremium = computed(() => props.chapter?.hub?.is_premium ?? false);
    const getBaseURL = computed(() => isPDF.value ? "/resources" : "/");
    const outlines = computed(() => {
      const outline = props.chapter?.content;
      const out = outline?.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim).filter((x) => x.trim() !== "");
      return Array.isArray(out) ? out : [];
    });
    const firstPostSlug = computed(() => props.chapter?.posts?.[0]?.slug ?? "#");
    const getDesign = computed(
      () => props.chapter?.design_url ?? "https://api.backlinko.com/app/uploads/2020/05/seo-fundamentals.svg"
    );
    const chapterSlug = computed(() => props.chapter?.hub?.slug ?? "");
    const color = computed(() => {
      const mixedColor = props.chapter?.color ?? "";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const clr = first.split(" ")[0];
        if (clr) return `#${clr.replace(/[^a-zA-Z0-9 ]/g, "")}`;
      }
      return mixedColor;
    });
    const postCount = computed(() => props.chapter?.posts?.length ?? 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Button = __nuxt_component_0$1;
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row bg-white mb-5 shadow" }, _attrs))} data-v-2484a9ce><div class="col-xl-3 col-lg-12 text-center text-white" style="${ssrRenderStyle({ backgroundColor: color.value })}" data-v-2484a9ce>`);
      if (isPDF.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: shouldActivateWaitingList.value || isPremium.value ? "#" : { path: `${getBaseURL.value}/${chapterSlug.value}/${firstPostSlug.value}` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="py-5 font-weight-normal fs-4" data-v-2484a9ce${_scopeId}>${ssrInterpolate(__props.chapter.title)}</h3><img${ssrRenderAttrs(_temp0 = mergeProps({
                class: "img-fluid hub mt-3",
                "data-src": getDesign.value,
                alt: __props.chapter.title
              }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-2484a9ce${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
            } else {
              return [
                createVNode("h3", { class: "py-5 font-weight-normal fs-4" }, toDisplayString(__props.chapter.title), 1),
                withDirectives(createVNode("img", {
                  class: "img-fluid hub mt-3",
                  "data-src": getDesign.value,
                  alt: __props.chapter.title
                }, null, 8, ["data-src", "alt"]), [
                  [_directive_lazy_load]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: shouldActivateWaitingList.value || isPremium.value ? "#" : { path: `${getBaseURL.value}/${chapterSlug.value}/${__props.chapter.slug}` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="py-5 font-weight-normal fs-4" data-v-2484a9ce${_scopeId}>${ssrInterpolate(__props.chapter.title)}</h3><img${ssrRenderAttrs(_temp1 = mergeProps({
                class: "img-fluid hub mt-3",
                "data-src": getDesign.value,
                alt: __props.chapter.title
              }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-2484a9ce${_scopeId}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}`);
            } else {
              return [
                createVNode("h3", { class: "py-5 font-weight-normal fs-4" }, toDisplayString(__props.chapter.title), 1),
                withDirectives(createVNode("img", {
                  class: "img-fluid hub mt-3",
                  "data-src": getDesign.value,
                  alt: __props.chapter.title
                }, null, 8, ["data-src", "alt"]), [
                  [_directive_lazy_load]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><div class="col-xl-9 col-lg-12" data-v-2484a9ce><div class="row py-5 px-4" data-v-2484a9ce><div class="col-12 row" data-v-2484a9ce><div class="col-lg-6" data-v-2484a9ce><h5 class="font-weight-normal fs-4 pb-4" style="${ssrRenderStyle({ color: color.value })}" data-v-2484a9ce> What you will learn </h5><p class="lh-lg font-weight-light fs-5" data-v-2484a9ce>${__props.chapter.description ?? ""}</p></div><div class="col-lg-6" data-v-2484a9ce><h5 class="font-weight-normal fs-4 pb-4" style="${ssrRenderStyle({ color: color.value })}" data-v-2484a9ce>`);
      if (isPDF.value) {
        _push(`<span data-v-2484a9ce>Outline</span>`);
      } else {
        _push(`<span data-v-2484a9ce>${ssrInterpolate(postCount.value)} Resources</span>`);
      }
      _push(`</h5>`);
      if (isPDF.value) {
        _push(`<span class="overflow-auto d-flex flex-column justify-content-between" style="${ssrRenderStyle({ "height": "300px" })}" data-v-2484a9ce><!--[-->`);
        ssrRenderList(outlines.value, (outline, i) => {
          _push(`<p data-v-2484a9ce>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "font-weight-light d-flex flex-row justify-content-start fs-5",
            to: shouldActivateWaitingList.value || isPDF.value || isPremium.value ? "#" : {
              path: `${getBaseURL.value}/${chapterSlug.value}/${firstPostSlug.value}`
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", color.value)} width="24" height="24" data-v-2484a9ce${_scopeId}><path fill="none" d="M0 0h24v24H0z" data-v-2484a9ce${_scopeId}></path><path d="M16 12l-6 6V6z" data-v-2484a9ce${_scopeId}></path></svg><span class="flex-fill" data-v-2484a9ce${_scopeId}>${outline ?? ""}</span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: color.value,
                    width: "24",
                    height: "24"
                  }, [
                    createVNode("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }),
                    createVNode("path", { d: "M16 12l-6 6V6z" })
                  ], 8, ["fill"])),
                  createVNode("span", {
                    class: "flex-fill",
                    innerHTML: outline
                  }, null, 8, ["innerHTML"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</p>`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<span data-v-2484a9ce><!--[-->`);
        ssrRenderList(__props.chapter.posts, (post, i) => {
          _push(`<p data-v-2484a9ce>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "font-weight-light d-flex flex-row justify-content-start fs-5",
            to: shouldActivateWaitingList.value || isPremium.value ? "#" : { path: `${getBaseURL.value}/${chapterSlug.value}/${post.slug}` }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", color.value)} width="24" height="24" data-v-2484a9ce${_scopeId}><path fill="none" d="M0 0h24v24H0z" data-v-2484a9ce${_scopeId}></path><path d="M16 12l-6 6V6z" data-v-2484a9ce${_scopeId}></path></svg><span class="flex-fill" data-v-2484a9ce${_scopeId}>${ssrInterpolate(post.title)}</span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: color.value,
                    width: "24",
                    height: "24"
                  }, [
                    createVNode("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }),
                    createVNode("path", { d: "M16 12l-6 6V6z" })
                  ], 8, ["fill"])),
                  createVNode("span", { class: "flex-fill" }, toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</p>`);
        });
        _push(`<!--]--></span>`);
      }
      _push(`</div></div>`);
      if (isPDF.value) {
        _push(`<div class="col-12 align-self-end" data-v-2484a9ce>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn-block",
          size: "large",
          type: "link",
          link: `${getBaseURL.value}/${chapterSlug.value}/${firstPostSlug.value}`,
          "custom-style": { backgroundColor: color.value, color: "#fff" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get PDF Now `);
            } else {
              return [
                createTextVNode(" Get PDF Now ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Chapter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2484a9ce"]]);
const _sfc_main = {
  __name: "HubOverview",
  __ssrInlineRender: true,
  props: {
    hub: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isPDF = computed(() => props.hub?.type === "pdf");
    const slug = computed(() => props.hub?.slug ?? "");
    const firstLink = computed(() => {
      if (props.hub?.chapters?.length) {
        return props.hub.chapters[0]?.posts?.[0]?.slug || "#";
      }
      return "#";
    });
    const getURL = computed(
      () => isPDF.value ? `/resources/${slug.value}/${firstLink.value}` : `/${slug.value}/${firstLink.value}`
    );
    const linkToPay = computed(() => props.hub?.link ?? "#");
    const isPremium = computed(() => props.hub?.is_premium);
    const shouldActivateWaitingList = computed(
      () => props.hub?.activate_waiting ?? null
    );
    const link = computed(() => {
      if (isPremium.value) return linkToPay.value;
      return shouldActivateWaitingList.value ? "#" : getURL.value;
    });
    const isBackend = computed(() => route.params?.hub === "backend-engineering");
    const image = computed(
      () => props.hub?.design_url ?? "https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png"
    );
    const title = computed(() => props.hub?.title ?? "");
    const color = computed(() => {
      const mixedColor = props.hub?.color ?? "";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const color2 = first?.split(" ")[0];
        if (color2) return `#${color2.replace(/[^a-zA-Z0-9]/g, "")}`;
      }
      return mixedColor;
    });
    const enchargeTag = computed(() => props.hub?.encharge_tag ?? "");
    const description = computed(() => props.hub?.description ?? "");
    const chapters = computed(() => props.hub?.chapters ?? []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_0$1;
      const _component_Chapter = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-790434bf><section class="py-5 my-5" data-v-790434bf><div class="container" data-v-790434bf><div class="row d-flex align-items-center" data-v-790434bf><div class="col-md-6 hero__title" data-v-790434bf><h1 class="title__text" data-v-790434bf>${ssrInterpolate(title.value)} ${ssrInterpolate(isPDF.value ? "Resources" : "")}</h1><p class="title__subtext fs-6" data-v-790434bf>${ssrInterpolate(description.value)}</p><div class="input-group py-3" data-v-790434bf>`);
      if (!isPDF.value) {
        _push(ssrRenderComponent(_component_Button, {
          "custom-style": {
            backgroundColor: color.value,
            color: "#fff"
          },
          size: "large",
          type: "link",
          link: link.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(isPremium.value ? "Grab Your Copy Now" : "Start Now")}`);
            } else {
              return [
                createTextVNode(toDisplayString(isPremium.value ? "Grab Your Copy Now" : "Start Now"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6 hero__image" data-v-790434bf>`);
      if (shouldActivateWaitingList.value) {
        _push(`<div class="shadow border p-4 my-4" style="${ssrRenderStyle({ "background-color": "white" })}" data-v-790434bf><form id="form-bacf371b-b382-4024-9adb-99ea3c829eae" action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain" method="POST" data-v-790434bf><div class="form-group py-3" data-v-790434bf><label class="text-dark" for="1bf52140-11b8-46e9-8115-8fa21b589cfb" data-v-790434bf><b data-v-790434bf>Full Name</b></label><input id="1bf52140-11b8-46e9-8115-8fa21b589cfb" name="name" class="form-control shadow-none fs-5" type="text" placeholder="Enter your full name" required data-v-790434bf></div><div class="form-group py-3" data-v-790434bf><label class="text-dark" for="7dbc4ccf-238b-4128-9250-634cccb01176" data-v-790434bf><b data-v-790434bf>E-mail</b></label><input id="7dbc4ccf-238b-4128-9250-634cccb01176" name="email" class="form-control shadow-none fs-5" type="email" required placeholder="Enter your email address" data-v-790434bf></div><input type="hidden" id="31b47661-eae6-42bd-bc02-df3c004a01f9" name="HiddenTag"${ssrRenderAttr("value", enchargeTag.value)} data-v-790434bf><div class="text-center mt-4" data-v-790434bf><button class="col-12 start-btn py-2 my-2 fs-4 fw-bold" type="submit" style="${ssrRenderStyle({ backgroundColor: color.value, color: "#fff" })}" data-v-790434bf> Get Notified </button></div></form></div>`);
      } else {
        _push(`<img class="img-fluid"${ssrRenderAttr("data-src", image.value)}${ssrRenderAttr("alt", title.value)} data-v-790434bf>`);
      }
      _push(`</div></div></div></section>`);
      if (isBackend.value) {
        _push(`<section class="m-5" data-v-790434bf><div class="container w-50 d-flex flex-1" data-v-790434bf><div class="d-flex justify-content-center text-center flex-column" data-v-790434bf><h2 class="hero__title title__text" data-v-790434bf>Backend as a Journey (BaaJ)</h2><p data-v-790434bf> Backend engineering is a Journey of no return. If you&#39;re ready to jump on this rewarding journey. Start below: </p></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="${ssrRenderClass([{ "py-5 my-5": shouldActivateWaitingList.value || isPremium.value }, "Conent"])}" data-v-790434bf><div class="container" data-v-790434bf><!--[-->`);
      ssrRenderList(chapters.value, (chapter, i) => {
        _push(ssrRenderComponent(_component_Chapter, {
          key: i,
          chapter: { hub: __props.hub, ...chapter }
        }, null, _parent));
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/HubOverview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-790434bf"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=HubOverview-B-DEbORZ.mjs.map
