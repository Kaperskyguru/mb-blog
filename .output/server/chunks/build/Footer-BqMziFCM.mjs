import { mergeProps, withCtx, createTextVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-B9PPBfnG.mjs';

const _imports_0$1 = "" + __buildAssetsURL("logo-white.Bs50MrLL.png");
const _imports_1$1 = "" + __buildAssetsURL("logo.na7O5fcJ.png");
const _sfc_main$2 = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logo",
  props: {
    isWhite: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({ to: "/" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.isWhite) {
          _push2(`<img data-not-lazy${ssrRenderAttr("src", _imports_0$1)} alt="logo" width="200" height="auto" class="d-inline-block align-text-top"${_scopeId}>`);
        } else {
          _push2(`<img data-not-lazy${ssrRenderAttr("src", _imports_1$1)} alt="logo" width="200" height="auto" class="d-inline-block align-text-top"${_scopeId}>`);
        }
      } else {
        return [
          $props.isWhite ? (openBlock(), createBlock("img", {
            key: 0,
            "data-not-lazy": "",
            src: _imports_0$1,
            alt: "logo",
            width: "200",
            height: "auto",
            class: "d-inline-block align-text-top"
          })) : (openBlock(), createBlock("img", {
            key: 1,
            "data-not-lazy": "",
            src: _imports_1$1,
            alt: "logo",
            width: "200",
            height: "auto",
            class: "d-inline-block align-text-top"
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]), { __name: "Logo" });
const _sfc_main$1 = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  data: () => ({ show: false }),
  methods: {
    isActive(slug = "/") {
      return this.$route.path === slug;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-xl pt-3" }, _attrs))} data-v-ab137085><div class="container" data-v-ab137085>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-ab137085><span class="navbar-toggler-icon" data-v-ab137085></span></button><div id="nav-menu" class="${ssrRenderClass([{ show: _ctx.show }, "collapse navbar-collapse"])}" data-v-ab137085><ul class="navbar-nav ms-auto" data-v-ab137085><li class="${ssrRenderClass([{ active: $options.isActive("/posts") }, "nav-item"])}" data-v-ab137085><a${ssrRenderAttr("href", `/posts?ref=${_ctx.$route.query?.ref ?? "homepage"}`)} class="links nav-link" data-v-ab137085>Blog</a></li><li class="${ssrRenderClass([{ active: $options.isActive("/courses") }, "nav-item"])}" data-v-ab137085><a${ssrRenderAttr("href", `/courses?ref=${_ctx.$route.query?.ref ?? "homepage"}`)} class="links nav-link" data-v-ab137085>Courses</a></li><li class="${ssrRenderClass([{ active: $options.isActive("/books") }, "nav-item"])}" data-v-ab137085><a${ssrRenderAttr("href", `/books?ref=${_ctx.$route.query?.ref ?? "homepage"}`)} class="links nav-link" data-v-ab137085>Books</a></li><li class="${ssrRenderClass([{ active: $options.isActive("/") }, "nav-item"])}" data-v-ab137085><a${ssrRenderAttr("href", `/?ref=${_ctx.$route.query?.ref ?? "homepage"}`)} class="links nav-link" data-v-ab137085>Hubs</a></li><li class="${ssrRenderClass([{ active: $options.isActive("/podcasts") }, "nav-item"])}" data-v-ab137085><a class="links nav-link" target="_blank" href="https://backendweekly.dev/podcasts?ref=masteringbackend&amp;utm_source=masteringbackend&amp;utm_medium=blog&amp;utm_campaign=footer" data-v-ab137085>Podcasts</a></li><li class="nav-item" data-v-ab137085><a class="links nav-link" target="_blank" href="https://store.masteringbackend.com" data-v-ab137085>Our Store</a></li><li class="${ssrRenderClass([{ active: $options.isActive("/community") }, "nav-item"])}" data-v-ab137085><a${ssrRenderAttr("href", `/community?ref=${_ctx.$route.query?.ref ?? "homepage"}`)} class="nav-link" data-v-ab137085>Community</a></li></ul><div class="ms-5 d-flex" data-v-ab137085><div data-v-ab137085><a target="_blank"${ssrRenderAttr("href", `https://app.masteringbackend.com?ref=${_ctx.$route.query?.ref ?? "homepage"}`)} class="start-btn px-3 py-3" data-v-ab137085> Learn Backend Free </a></div></div></div></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Nav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ab137085"]]), { __name: "Nav" });
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjSURBVHgB3Y/RCYAwDEQvxUE6iiM4QjfTEewEOkpHcIMzgpUSiPXbBwchOe4I0EByUm00tIZIh9AEjXAY4LOqcs+URWS5BtHK+V5GU7mrSjUR75SAPsczaWAyn6d6+5L0c9MJLuhTJqdorG8AAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBnVGBDQIhDATjAL+BjMAIP4JugJPoCG6gG/gb+E6gG+AG7wb1KkUJAcN7yUFDe0ehSgFEZFQFyHXgDpwo4Mj1YA9aJYGvmYighNtbg8XJAZu4TGyojil20NG3vY8RJ4U1uPSNB5qPdTTo6T/Y9K0XmgcftQvZN+AAPlUbRlWYtW+9nUojpzCyFhNX7Us6Of8Q73ONpjAO/tEVyHFX8H6AW631mCeWOBxgwrGRQpuI7uAVPKGu+MEv8Pnm6AIQaygAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBlVMLUcQwFHzpICASzgFFAT0HOKCngEEBRQGcAkABOEhRQFGAhNZB2R02Ry6X+72ZnTTJ7su+l9QMMc+zBx6AAIzz/hjFaU3hlOALQw30wKcdjkvgBhiAJcWtsjdHhNHpglxpOpOljwMCn8yfJaylC5WsD5mQJwR8jgRLlMMeeHXODSq1ZgKfizEETVfAvThcmyBeJXRvm1r+E/C0n0I5Qa7ivKOwymtWSWvbjTegSXvCqKwcU2HNl4hbCVAfhT1wW+DeAYM4m7goEB+BoD6s5YYJF8aHU3AwZS56Ebn+BLxoa6m9NCYXO4vNneyxYblt7b2brrE79Skn4viUW6dT6ILXxyf9fUR/DTT219CrNGt7xu/cxfJ+AX6aICYDKN8yAAAAAElFTkSuQmCC";
const _sfc_main = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data: () => ({
    showLogin: false,
    showRegister: false
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3deeaf55><footer class="py-5" data-v-3deeaf55><div class="container" data-v-3deeaf55><div class="row" data-v-3deeaf55><div class="col-md-4" data-v-3deeaf55><div class="col mb-3" data-v-3deeaf55><div data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_Logo, { "is-white": "" }, null, _parent));
  _push(`<p class="fs-6 mt-2 text-white" data-v-3deeaf55> A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources. </p></div></div></div><div class="col" data-v-3deeaf55><div class="row justify-between" data-v-3deeaf55><div class="col-md-3 text-col" data-v-3deeaf55><p class="mb-4" data-v-3deeaf55>Learn</p><div class="d-md-flex text-white" data-v-3deeaf55><ul class="footer-nav fs-6" data-v-3deeaf55><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/posts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/courses" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Courses`);
      } else {
        return [
          createTextVNode("Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/books" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Books`);
      } else {
        return [
          createTextVNode("Books")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Hubs`);
      } else {
        return [
          createTextVNode("Hubs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-3deeaf55><a href="https://store.masteringbackend.com?ref=masteringbackend&amp;utm_source=masteringbackend&amp;utm_medium=blog&amp;utm_campaign=footer" data-v-3deeaf55>Our Store</a></li></ul></div></div><div class="col-md-3 text-col" data-v-3deeaf55><p class="mb-4" data-v-3deeaf55>Products</p><div class="d-md-flex text-white" data-v-3deeaf55><ul class="footer-nav fs-6" data-v-3deeaf55><li class="mb-3" data-v-3deeaf55><a target="_blank"${ssrRenderAttr("href", `https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`)} data-v-3deeaf55>MB Platform</a></li><li class="mb-3" data-v-3deeaf55><a target="_blank"${ssrRenderAttr("href", `https://playground.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`)} data-v-3deeaf55>Code Playground</a></li><li class="mb-3" data-v-3deeaf55><a target="_blank"${ssrRenderAttr("href", `https://getbackendjobs.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`)} data-v-3deeaf55>Get Backend Jobs</a></li><li class="mb-3" data-v-3deeaf55><a target="_blank" href="#" data-v-3deeaf55>Backend Interview Preps</a></li><li class="mb-3" data-v-3deeaf55><a target="_blank" href="https://projects.masteringbackend.com?ref=masteringbackend&amp;utm_source=masteringbackend&amp;utm_medium=blog&amp;utm_campaign=footer" data-v-3deeaf55>Access 200+ Backend Projects</a></li></ul></div></div><div class="col-md-3 text-col" data-v-3deeaf55><p class="mb-4" data-v-3deeaf55>Join</p><div class="d-md-flex text-white" data-v-3deeaf55><ul class="footer-nav fs-6" data-v-3deeaf55><li class="mb-3" data-v-3deeaf55><a target="_blank"${ssrRenderAttr("href", `https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`)} data-v-3deeaf55>Learn Backend Free</a></li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/newsletter" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join Our Newsletter`);
      } else {
        return [
          createTextVNode("Join Our Newsletter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/community" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join Our Community`);
      } else {
        return [
          createTextVNode("Join Our Community")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/academy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join The Academy `);
      } else {
        return [
          createTextVNode("Join The Academy ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55><a target="_blank" href="https://backendweekly.dev/podcasts?ref=masteringbackend&amp;utm_source=masteringbackend&amp;utm_medium=blog&amp;utm_campaign=footer" data-v-3deeaf55>Listen to GBE Podcast </a></li><li class="mb-3" data-v-3deeaf55><a target="_blank" href="https://masteringbackend.featurebase.app/?ref=masteringbackend&amp;utm_source=masteringbackend&amp;utm_medium=blog&amp;utm_campaign=footer" data-v-3deeaf55>Add or Vote for the next Course </a></li></ul></div></div><div class="col-md-3 text-col" data-v-3deeaf55><p class="mb-4" data-v-3deeaf55>Company</p><ul class="footer-nav fs-6" data-v-3deeaf55><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3" data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></div><hr data-v-3deeaf55><div class="d-md-flex align-items-center justify-content-between" data-v-3deeaf55><div class="d-flex socia-links mb-3 align-items-center" data-v-3deeaf55><a href="https://facebook.com/masteringbackend" aria-label="facebook" data-v-3deeaf55><div class="socia-link p-2" data-v-3deeaf55><img class="img-fluid face"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3deeaf55></div></a><a href="https://twitter.com/master_backend" aria-label="twitter" data-v-3deeaf55><div class="socia-link p-2" data-v-3deeaf55><img class="img-fluid"${ssrRenderAttr("src", _imports_1)} alt="" data-v-3deeaf55></div></a><a href="https://instagram.com/kaperskyguru" aria-label="instagram" data-v-3deeaf55><div class="socia-link p-2" data-v-3deeaf55><img class="img-fluid"${ssrRenderAttr("src", _imports_2)} alt="" data-v-3deeaf55></div></a></div><div data-v-3deeaf55><small class="text-light fs-7" data-v-3deeaf55>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Masteringbackend. All right reserved.</small></div></div><div class="col-md-8" data-v-3deeaf55><div data-v-3deeaf55>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/terms-and-conditions" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms and Conditions`);
      } else {
        return [
          createTextVNode("Terms and Conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` |  `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/privacy-policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy`);
      } else {
        return [
          createTextVNode("Privacy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` |  `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/disclaimer" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Disclaimer`);
      } else {
        return [
          createTextVNode("Disclaimer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` |  `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/return-policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Return Policy`);
      } else {
        return [
          createTextVNode("Return Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><small data-v-3deeaf55>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" data-v-3deeaf55>Privacy Policy</a> and <a href="https://policies.google.com/terms" data-v-3deeaf55>Terms of Service</a> apply. </small></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3deeaf55"]]), { __name: "Footer" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Footer-BqMziFCM.mjs.map
