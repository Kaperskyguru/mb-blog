import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    },
    isWaiting: {
      type: Boolean,
      default: true
    },
    slug: {
      type: String,
      default: ""
    }
  },
  methods: {
    // async onSubmit() {
    //   try {
    //     const token = await this.$recaptcha.execute('login')
    //     const data = await recaptcha({ token })
    //     if (!data?.success) return
    //     this.$refs.form?.submit()
    //   } catch (error) {
    //     console.log('Login error:', error)
    //   }
    // },
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.slug.includes("design-patterns")) {
    _push(`<iframe${ssrRenderAttrs(mergeProps({
      src: "https://embeds.beehiiv.com/638ed077-b961-4a71-80a7-cefc821c28d4",
      "data-test-id": "beehiiv-embed",
      width: "100%",
      height: "320",
      frameborder: "0",
      scrolling: "no",
      style: { "border-radius": "4px", "border": "2px solid #e5e7eb", "margin": "0", "background-color": "transparent" }
    }, _attrs))}></iframe>`);
  } else {
    _push(`<form${ssrRenderAttrs(mergeProps({
      ref: "form",
      id: "form-bacf371b-b382-4024-9adb-99ea3c829eae",
      action: "https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain",
      method: "POST"
    }, _attrs))}><div class="form-group py-3"><label class="text-dark" for="1bf52140-11b8-46e9-8115-8fa21b589cfb"><b>Full Name</b></label><input id="1bf52140-11b8-46e9-8115-8fa21b589cfb" name="name" class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-" type="text" placeholder="Enter your full name" required></div><div class="form-group py-3"><label class="text-dark" for="7dbc4ccf-238b-4128-9250-634cccb01176"><b>E-mail</b></label><input id="7dbc4ccf-238b-4128-9250-634cccb01176" name="email" class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-" type="email" required placeholder="Enter your email address"></div><input type="hidden" id="31b47661-eae6-42bd-bc02-df3c004a01f9" name="HiddenTag"${ssrRenderAttr("value", $props.tag)} class="encharge-form-input sc-htoDjs jmyTNa form-control"><div class="field mt-4"><small class="text-center fst-italic fw-bold">If you only want the resource, please peacefully unsubscribe when you recieve it</small><div class="control text-center"><button class="col-12 start-btn py-2 my-2 fs-4 fw-bold" type="submit" style="${ssrRenderStyle({
      backgroundColor: `${$props.color}`,
      color: "#fff"
    })}">${ssrInterpolate($props.isWaiting ? "Get Notified" : "Get The Book")}</button></div></div><div class="sc-jzJRlG hjFAqE"><div name="nativeFormMarketingConsent" class="encharge-form-group sc-jTzLTM bPowmp form-group"><input type="checkbox" id="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4" name="nativeFormMarketingConsent" required class="encharge-form-checkbox sc-gqjmRU gCOwty form-check-input"><label for="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4" class="encharge-form-label sc-VigVT bSCkYy"><small>I agree to receive emails from you (unsubscribe anytime).</small></label></div></div></form>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hubs/ResourceForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "ResourceForm" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ResourceForm-CBR8yoPA.mjs.map
