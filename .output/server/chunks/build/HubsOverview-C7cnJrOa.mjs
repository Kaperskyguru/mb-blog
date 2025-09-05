import { _ as __nuxt_component_0$1 } from './Button-DCDiVCLl.mjs';
import { computed, mergeProps, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-B9PPBfnG.mjs';
import { useRoute } from 'vue-router';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgB7VRBTsMwEJx1KwG38gLyA/gB+QKqOHACn1BOwAsKPygX2lvCGZXyA/KE9AfhB7kjvKztpCqCOkGCW0aysuvsjDcbeQiCdPYUAyomUgc2ZzZvUFzAvBc6OSvxA9LZMgKM8BB94cHkOjnNh3aDaPDqyxk+Jwll0Q6y+TIXwqNOxpkXXFzI+3MpEFHCNx4NriTcH6IVLF9CcTZ/nkhSyorD5RjZRwfhNaJ6dYLCP6EX7oV74QDclWZm7e44oZKkEieJxFGOxFOOse0as9QSvbAxK8fze6MmpraTraWK+6UbB4jbfdxZawzxqCG3+XH6sLjGANCX46nn/J0f14K/8GM2fANFEQyX9YxsF4fSQgza4sduxihEcuX/i1MWL+ZyPYrwjF2Hk40Zl9LIPfZUpvVJhdCMu0AOuHXBrpqGBBt8AropnbA2us62AAAAAElFTkSuQmCC";
const _sfc_main$1 = {
  name: "CourseComponent",
  props: {
    course: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    title() {
      return this.course?.title ?? "";
    },
    type() {
      return this.course?.type ?? "";
    },
    slug() {
      return this.course?.slug ?? "";
    },
    summary() {
      return this.course?.summary ?? "";
    },
    isPremium() {
      return this.course?.isPremium ?? "";
    },
    amount() {
      return this.course?.amount ?? "Paid";
    },
    totalContent() {
      return this.course?.chapters?.reduce((a, c) => {
        return a + (c.videos?.length + c.articles?.length);
      }, 0);
    },
    banner() {
      return this.course?.banner ?? "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/nodejs%20essential.png";
    }
  },
  methods: {
    substring(str) {
      if (!str || str.length <= 160) return str;
      return str.substring(0, 160) + "...";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "min-width": "300px", "max-width": "388px", "overflow": "hidden" },
    class: "col-md-2 col-12 p-0 border rounded bg-white"
  }, _attrs))}><div class="position-relative d-flex w-ful align-items-center justify-content-center"><div class="w-100"><div class="h-100 w-100"><span style="${ssrRenderStyle({ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "inset": "0px" })}"><img class="img-fluid w-100"${ssrRenderAttr("src", $options.banner)}${ssrRenderAttr("alt", $options.title)}></span></div></div></div><div class="p-3" style="${ssrRenderStyle({ "min-height": "148px", "margin-top": "0.5rem" })}"><div class="d-flex justify-content-between align-items-center mb-2"><h3 class="text-uppercase bg-success rounded py-1 px-2 text-white" style="${ssrRenderStyle({ "font-size": "1rem" })}">${ssrInterpolate($options.type)}</h3><span class="border-primary border rounded px-2 text-primary">${ssrInterpolate($options.isPremium ? `$${$options.amount}` : "Free")}</span></div><div class="course-content"><h2 class="font-weight-bold" style="${ssrRenderStyle({ "font-size": "1.5rem", "line-height": "2.5rem" })}">${ssrInterpolate($options.title)}</h2><p style="${ssrRenderStyle({ "font-size": "0.5rem" })}">${$options.substring($options.summary) ?? ""}</p></div></div><div class="d-flex justify-content-between align-items-center px-3 pb-4"><div class="d-flex align-items-center ga-2"><span><img class="star-img"${ssrRenderAttr("src", _imports_0)} alt=""></span><span style="${ssrRenderStyle({ "font-size": "0.875rem" })}" class="pl-2">${ssrInterpolate($options.totalContent)}+ Contents</span></div>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "link",
    appearance: "primary",
    target: "_blank",
    href: `https://app.masteringbackend.com/courses/${$options.slug}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Start Learning `);
      } else {
        return [
          createTextVNode(" Start Learning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Course.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Course" });
const image = "https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.png";
const _sfc_main = {
  __name: "HubsOverview",
  __ssrInlineRender: true,
  props: {
    desc: {
      type: String,
      default: "Whether you're new to backend engineering, or want to scale up, this is your home for in-depth backend engineering knowledge."
    },
    title: {
      type: String,
      default: "Welcome To Our Content Hub"
    },
    hubs: {
      type: Array,
      default: () => []
    },
    featured: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const cFeatured = computed(() => props.featured.slice(0, 4));
    console.log(props.hubs);
    const getURL = (hub) => {
      if (isBook(hub)) return `/books/${hub.slug}`;
      if (isCourse(hub)) return `/courses/${hub.slug}`;
      if (isPDF(hub)) return `/resources/${hub.slug}`;
      return `/${hub.slug}`;
    };
    const isPDF = (hub) => hub.type === "pdf";
    const getLink = (chapter) => chapter?.posts[0]?.slug;
    const isBook = (hub) => hub.type === "book";
    const isCourse = (hub) => hub.type === "course";
    const isPremium = (hub) => hub.is_premium;
    const getBookPostsFromHubChapter = (hub) => {
      if (!isBook(hub)) return [];
      const chapters = hub?.chapters;
      if (chapters && chapters.length > 1) return chapters;
      if (chapters?.[0]) return chapters[0].posts;
      return [];
    };
    const color = (hub) => {
      const mixedColor = hub?.color ?? "";
      if (mixedColor.includes("gradient")) {
        const first = mixedColor.split("#")[1];
        const c = first.split(" ")[0];
        return `#${c.replace(/[^a-zA-Z0-9]/g, "")}`;
      }
      return mixedColor;
    };
    const getDesign = (hub) => hub?.design_url ?? "https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.pngg";
    const getPostCount = (hub) => getBookPostsFromHubChapter(hub)?.length ?? 0;
    const getChapterCount = (hub) => hub?.chapters?.length ?? 0;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Course = __nuxt_component_0;
      const _component_Button = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="hero"><div class="container"><div class="row d-flex align-items-center"><div class="col-md-6 hero__title"><h1 class="title__text">${ssrInterpolate(__props.title)}</h1><p class="title__subtext fs-6">${ssrInterpolate(__props.desc)}</p><div class="mt-5"><div class="mb-1" style="${ssrRenderStyle({ "color": "#0a083b" })}"> Be notified when we publish new ${ssrInterpolate(unref(route).name)}. </div><iframe src="https://embeds.beehiiv.com/78d77170-5724-4176-ad4a-9b9c6447f3ec?slim=true" height="52" frameborder="0" scrolling="no" style="${ssrRenderStyle({ "margin": "0", "border-radius": "0", "background": "transparent", "width": "100%" })}"></iframe></div></div><div class="col-md-6 hero__image"><img class="img-fluid"${ssrRenderAttr("data-src", image)}${ssrRenderAttr("alt", __props.title)}></div></div></div></section>`);
      if (unref(route).path.includes("/courses")) {
        _push(`<section class="container"><h2 class="text-center py-5">Featured Single Courses</h2><div class="row gap-3 p-2"><!--[-->`);
        ssrRenderList(unref(cFeatured), (course, i) => {
          _push(ssrRenderComponent(_component_Course, {
            key: i,
            course
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="d-flex justify-content-center py-5">`);
        _push(ssrRenderComponent(_component_Button, {
          type: "link",
          appearance: "primary",
          link: "/courses/single"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View All Courses `);
            } else {
              return [
                createTextVNode(" View All Courses ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="Content">`);
      if (unref(route).path.includes("/courses")) {
        _push(`<h2 class="text-center py-5"> Roadmap Courses </h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><!--[-->`);
      ssrRenderList(__props.hubs, (hub, i) => {
        _push(`<div class="row mt-5 bg-white"><div class="col-xl-3 lh-lg col-lg-12 text-center text-white" style="${ssrRenderStyle({ backgroundColor: color(hub) })}"><h3 class="py-5 font-weight-normal fs-4">${ssrInterpolate(hub.title)} ${ssrInterpolate(isPDF(hub) ? "Resources" : "")}</h3><img loading="lazy" class="img-fluid hub mt-3"${ssrRenderAttr("src", getDesign(hub))}${ssrRenderAttr("alt", hub.title)}></div><div class="col-xl-9 col-lg-12"><div class="row justify-content-between py-5 px-4"><div class="col-lg-6"><h5 class="pb-4" style="${ssrRenderStyle({ color: color(hub) })}"> What you will learn </h5><p class="lh-lg">${ssrInterpolate(hub.description)}</p></div><div class="col-lg-6">`);
        if (getChapterCount(hub)) {
          _push(`<h5 class="pb-4" style="${ssrRenderStyle({ color: color(hub) })}">`);
          if (isPDF(hub)) {
            _push(`<span>${ssrInterpolate(getChapterCount(hub))} Resource${ssrInterpolate(getChapterCount(hub) > 1 ? "s" : "")}</span>`);
          } else if (isBook(hub)) {
            _push(`<span>${ssrInterpolate(getPostCount(hub))} Chapter${ssrInterpolate(getPostCount(hub) > 1 ? "s" : "")}</span>`);
          } else if (isCourse(hub)) {
            _push(`<span>${ssrInterpolate(getChapterCount(hub))} Module${ssrInterpolate(getChapterCount(hub) > 1 ? "s" : "")}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(getChapterCount(hub))} Chapter${ssrInterpolate(getChapterCount(hub) > 1 ? "s" : "")}</span>`);
          }
          _push(`</h5>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="d-flex flex-column overflow-auto" style="${ssrRenderStyle({ "height": "300px" })}">`);
        if (isBook(hub)) {
          _push(`<div><!--[-->`);
          ssrRenderList(getBookPostsFromHubChapter(hub), (chapter, idx) => {
            _push(`<p class="pe-2 font-weight-light d-flex flex-row fs-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", color(hub))} width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 12l-6 6V6z"></path></svg><span class="flex-fill">${ssrInterpolate(chapter.title)}</span></p>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(!isBook(hub) && hub.chapters || [], (chapter, idx) => {
          _push(`<div>`);
          if (isPDF(hub)) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `${getURL(hub)}/${getLink(chapter)}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<p class="pe-2 font-weight-light d-flex flex-row fs-5"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", color(hub))} width="24" height="24"${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path d="M16 12l-6 6V6z"${_scopeId}></path></svg><span class="flex-fill"${_scopeId}>${ssrInterpolate(chapter.title)}</span></p>`);
                } else {
                  return [
                    createVNode("p", { class: "pe-2 font-weight-light d-flex flex-row fs-5" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: color(hub),
                        width: "24",
                        height: "24"
                      }, [
                        createVNode("path", {
                          fill: "none",
                          d: "M0 0h24v24H0z"
                        }),
                        createVNode("path", { d: "M16 12l-6 6V6z" })
                      ], 8, ["fill"])),
                      createVNode("span", { class: "flex-fill" }, toDisplayString(chapter.title), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<p class="pe-2 font-weight-light d-flex flex-row fs-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${ssrRenderAttr("fill", color(hub))} width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 12l-6 6V6z"></path></svg><span class="flex-fill">${ssrInterpolate(chapter.title)}</span></p>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div><div class="col-12 d-flex gap-2 align-self-end">`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn-block",
          size: "large",
          type: "link",
          link: getURL(hub),
          "custom-style": { backgroundColor: color(hub), color: "#fff" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Start Now `);
            } else {
              return [
                createTextVNode(" Start Now ")
              ];
            }
          }),
          _: 2
        }, _parent));
        if (isPremium(hub)) {
          _push(`<div><span class="badge text-light" style="${ssrRenderStyle({ "background": "#191489" })}">Premium</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/HubsOverview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=HubsOverview-C7cnJrOa.mjs.map
