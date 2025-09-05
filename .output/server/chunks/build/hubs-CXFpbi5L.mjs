import { computed, toValue, getCurrentInstance, onServerPrefetch, ref, shallowRef, toRef, nextTick, unref } from 'vue';
import { a as useRuntimeConfig, c as useNuxtApp, d as asyncDataDefaults, e as createError } from './server.mjs';
import { defineStore } from 'pinia';
import qs from 'qs';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
  if (!nuxtApp._asyncData[key.value]?._init) {
    initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
    nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
  }
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const initialFetch = () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    execute: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    clear: () => clearNuxtDataByKey(nuxtApp, key.value)
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
        nuxtApp._asyncDataPromises[key].cancelled = true;
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            resolve(handler(nuxtApp));
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        if (promise.cancelled) {
          return;
        }
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
const resolveChapters = (chapters) => {
  return chapters?.map((chapter) => {
    return {
      id: chapter.id,
      ...chapter.attributes,
      posts: resolvePosts(chapter?.attributes?.posts?.data ?? []),
      post: {
        ...chapter?.attributes.post?.data?.attributes
      },
      hub: {
        id: chapter.attributes?.hub?.data?.id,
        ...chapter.attributes?.hub?.data?.attributes
      }
    };
  });
};
const resolvePosts = (posts) => {
  return posts?.map((post) => {
    return {
      id: post.id,
      ...post.attributes,
      categories: post.attributes?.categories?.data?.map((cat) => ({
        id: cat.id,
        ...cat.attributes
      })),
      tags: post.attributes?.tags?.data?.map((tag) => ({
        id: tag.id,
        ...tag.attributes
      })),
      featured_image: {
        id: post.attributes?.featured_image?.data?.id,
        ...post.attributes?.featured_image?.data?.attributes
      },
      user: {
        id: post.attributes?.user?.data?.id,
        ...post.attributes?.user?.data?.attributes
      },
      author: {
        id: post.attributes?.author?.data?.id,
        ...post.attributes?.author?.data?.attributes
      },
      resource: {
        id: post.attributes?.resource?.data?.id,
        ...post.attributes?.resource?.data?.attributes,
        hub: {
          id: post?.attributes?.resource?.data?.attributes?.hub?.data?.id,
          ...post?.attributes?.resource?.data?.attributes?.hub?.data?.attributes
        }
      },
      chapters: resolveChapters(post.attributes?.chapters?.data),
      chapter: {
        id: post.attributes?.chapter?.data?.id,
        ...post.attributes?.chapter?.data?.attributes,
        hub: {
          id: post?.attributes?.chapter?.data?.attributes?.hub?.data?.id,
          ...post?.attributes?.chapter?.data?.attributes?.hub?.data?.attributes
        },
        post: {
          ...post.attributes?.chapter?.data?.attributes.post?.data?.attributes
        }
      }
    };
  });
};
const useStrapi = () => {
  const config = useRuntimeConfig();
  return $fetch.create({
    baseURL: config.public.BASE_ENDPOINT_URL,
    headers: {
      Authorization: `bearer ${config.public.STRAPI_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
};
const useHubsStore = defineStore("hubs", {
  state: () => ({
    hubState: "init",
    // 'init' | 'loaded' | 'error'
    hubs: [],
    pdfs: [],
    books: [],
    courses: [],
    worldHubs: [],
    hub: null,
    definitiveGuides: [],
    chapters: [],
    chapter: null,
    post: null,
    total_hub_pages: 0,
    recent_hubs: [],
    category_hubs: [],
    sticky_hubs: [],
    related_hubs: []
  }),
  getters: {
    getHubBySlug: (state) => (slug) => state.hubs?.find((hub) => hub.slug === slug),
    // getHubs: (state) => () => state.hubs,
    getPDFs: (state) => () => state.pdfs,
    getBooks: (state) => () => state.books,
    getCourses: (state) => () => state.courses,
    getRecentHubs: (state) => () => state.recent_hubs,
    getCategoryHubs: (state) => () => state.category_hubs,
    getChapter: (state) => (slug) => state.chapters?.find((chapter) => chapter.slug === slug),
    getRelatedHubs: (state) => () => state.related_hubs,
    getHubsByAuthor: (state) => (author) => state.hubs.filter((hub) => hub.author?.slug === author),
    getStickyHubs: (state) => () => state.sticky_hubs
  },
  actions: {
    setHubState(hubState) {
      this.hubState = hubState;
    },
    async getHubs({ page = 1, count = 22 }) {
      try {
        const api = useStrapi();
        const res = await api(
          `/hubs?filters[type][$eq]=hub&populate=*&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        );
        if (!res?.data) return [];
        const hubs = mapHubs(res.data);
        this.hubs = hubs;
        this.total_hub_pages = res.meta?.pagination?.pageCount || 0;
        this.hubState = "loaded";
        return hubs;
      } catch (error) {
        console.error(error);
        this.hubState = "error";
        throw error;
      }
    },
    async getPDFs({ page = 1, count = 22, populate }) {
      try {
        const api = useStrapi();
        const query = qs.stringify({ populate }, { encodeValuesOnly: true });
        const res = await api(
          `/hubs?filters[type][$eq]=pdf&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        );
        if (res?.data) {
          const hubs = mapHubs(res.data);
          this.pdfs = hubs;
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0;
          this.hubState = "loaded";
          return hubs;
        }
      } catch (error) {
        this.hubState = "error";
        throw error;
      }
    },
    async fetchCourseContent(slug) {
      try {
        const api = useStrapi();
        const config = useRuntimeConfig();
        return await api(`${config.public.MB_API_URL}/roadmap/${slug}`);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAllCourses() {
      try {
        const api = useStrapi();
        const config = useRuntimeConfig();
        const url = config.public.MB_API_URL ?? "https://api.masteringbackend.com";
        return await api(url + "/courses");
      } catch (error) {
        console.error(error);
      }
    },
    async getBooks({ page = 1, count = 22, populate }) {
      try {
        const api = useStrapi();
        const query = qs.stringify({ populate }, { encodeValuesOnly: true });
        const res = await api(
          `/hubs?filters[type][$eq]=book&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        );
        if (res?.data) {
          const hubs = mapHubs(res.data);
          this.books = hubs;
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0;
          this.hubState = "loaded";
          return hubs;
        }
      } catch (error) {
        this.hubState = "error";
        throw error;
      }
    },
    async getCourses({ page = 1, count = 22, populate }) {
      try {
        const api = useStrapi();
        const query = qs.stringify({ populate }, { encodeValuesOnly: true });
        const res = await api(
          `/hubs?filters[type][$eq]=course&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        );
        if (res?.data) {
          const hubs = mapHubs(res.data);
          this.courses = hubs;
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0;
          this.hubState = "loaded";
          return hubs;
        }
      } catch (error) {
        this.hubState = "error";
        throw error;
      }
    },
    async getRecentHubs() {
      try {
        const api = useStrapi();
        const res = await api(`/get_hubs?count=6`);
        if (res?.hubs) {
          this.recent_hubs = res.hubs;
          this.hubState = "loaded";
          return res.hubs;
        }
      } catch (error) {
        this.hubState = "error";
      }
    },
    async getStickyHubs() {
      try {
        const api = useStrapi();
        const res = await api(`/get_sticky_hubs`);
        if (res?.hubs) {
          this.sticky_hubs = res.hubs;
          this.hubState = "loaded";
          return res.hubs;
        }
      } catch {
        this.hubState = "error";
      }
    },
    async getRelatedHubs(hubId) {
      try {
        const api = useStrapi();
        const res = await api(`/get_related_hubs?hub_id=${hubId}&count=3`);
        if (res?.hubs) {
          this.related_hubs = res.hubs;
          this.hubState = "loaded";
          return res.hubs;
        }
      } catch {
        this.hubState = "error";
      }
    },
    async getCategoryHubs({ count = 22, page = 1, slug }) {
      try {
        const api = useStrapi();
        const res = await api(
          `/hubs?filters[type][$eq]=0&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}`
        );
        if (res?.data?.length) {
          const hubs = mapHubs(res.data);
          this.category_hubs = hubs;
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0;
          this.hubState = "loaded";
          return hubs;
        }
      } catch {
        this.hubState = "error";
      }
    },
    async getHub({ slug, populate = "*" }) {
      try {
        const api = useStrapi();
        const query = qs.stringify({ populate }, { encodeValuesOnly: true });
        const res = await api(`/hubs/?${query}&filters[slug][$eq]=${slug}`);
        if (res?.data?.length) {
          const hub = mapHubs(res.data)[0];
          this.hub = hub;
          this.hubState = "loaded";
          return hub;
        }
      } catch {
        this.hubState = "error";
      }
    },
    async getChapter({ slug, populate = "*" }) {
      try {
        const api = useStrapi();
        const res = await api(
          `/chapters/?populate=${populate}&filters[slug][$eq]=${slug}`
        );
        if (res?.data?.length) {
          const chapter = mapChapters(res.data)[0];
          this.chapters.push(chapter);
          this.hubState = "loaded";
          return chapter;
        }
      } catch {
        this.hubState = "error";
      }
    },
    async getPost({ slug, populate = "*" }) {
      const api = useStrapi();
      const query = qs.stringify({ populate }, { encodeValuesOnly: true });
      this.postState = "loading";
      try {
        const res = await api(`/posts?filters[slug][$eq]=${slug}&${query}`);
        console.log(res?.data, "Pinia");
        if (!res?.data.length) return null;
        const mapped = mapPosts(res.data)[0];
        this.post = mapped;
        this.postState = "success";
        return mapped;
      } catch (error) {
        this.postState = "error";
        console.error(error);
      }
    }
  }
});
function mapHubs(hubs) {
  return hubs?.map((hub) => ({
    id: hub.id,
    ...hub.attributes,
    image: {
      id: hub.attributes?.image?.data?.id,
      ...hub.attributes?.image?.data?.attributes
    },
    topics: hub.attributes?.topics?.data?.map((topic) => ({
      id: topic.id,
      ...topic.attributes
    })),
    author: {
      id: hub.attributes?.author?.data?.id,
      ...hub.attributes?.author?.data?.attributes
    },
    chapters: hub.attributes?.chapters?.data?.map((chapter) => ({
      id: chapter.id,
      ...chapter.attributes,
      posts: resolvePosts(chapter?.attributes?.posts?.data ?? [])
    }))
  }));
}
function mapChapters(chapters) {
  return resolveChapters(chapters);
}
function mapPosts(posts) {
  return resolvePosts(posts);
}

export { useAsyncData as a, useHubsStore as u };
//# sourceMappingURL=hubs-CXFpbi5L.mjs.map
