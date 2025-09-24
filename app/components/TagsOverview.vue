<template>
  <section>
    <!-- Hero Section -->
    <section class="flex items-center justify-center mb-10">
      <div class="max-w-6xl w-full px-4">
        <div class="mt-12 text-center">
          <h1
            class="text-3xl md:text-4xl font-extrabold uppercase tracking-wide"
          >
            LATEST {{ name }} ARTICLES
          </h1>
          <div class="mt-6 flex flex-col items-center justify-center">
            <p class="text-lg md:text-xl text-gray-700 text-left max-w-2xl">
              Latest {{ name }} Articles curated daily by the community.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="mx-2">
      <!-- Featured Article -->
      <FeaturedArticle v-if="featuredPost" :post="featuredPost" />

      <!-- Advert -->
      <!-- <ArticleAdvert /> -->

      <span v-for="(post, index) in getAllArticles" :key="index" :post="post">
        <!-- Locked Article -->
        <LockArticle v-if="post.is_sticky" :post="post" />

        <!-- Normal Article -->
        <Article v-else :post="post" />
      </span>

      <!-- Load More Button (optional) -->
      <!--
      <div class="grid place-items-center mt-8 mb-12">
        <button
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-xl px-6 py-3 rounded-md shadow"
        >
          Older Posts
        </button>
      </div>
      -->
    </section>
  </section>
</template>

      
      <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'PostOverview',

  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    featuredPost() {
      const posts = this.removeSponsored
      return posts.shift()
    },

    getAllArticles() {
      const posts = this.removeSponsored

      return posts.filter((post) => {
        const fPost = this.featuredPost
        return post.slug !== fPost?.slug
      })
    },

    removeSponsored() {
      return [...this.posts].filter(
        (post) => !post?.categories?.find((cat) => cat.slug === 'sponsored')
      )
    },
  },
}
</script>
      
      <style scoped>
.no-border {
  border: 0;
  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */
}

.hero-text {
  font-weight: 800;
  color: #0a083b;
  font-size: 40px;
}

.lead {
  color: #000;
}

.hero-img {
  width: 50px;
  height: 50px;
}

.btn-outline-secondary {
  background: #191489;
  color: #fff;
}

.btn-primary-old {
  background-color: #9c4df4;
  color: #fff;
}

.btn-primary-old:hover {
  color: rgba(255, 255, 255, 0.8);
}

.form-control {
  color: #5d5a6f;
  opacity: 60%;
  font-size: 0.8rem;
}

h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

/* ---------------End Navbar----------------------------- */

/*----------------------Hero Section------------------*/
/*----------------------Hero Section------------------*/
.no-border {
  border: 0;
  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */
}

.hero-text {
  font-weight: 800;
  color: #0a083b;
  font-size: 40px;
}

.lead {
  color: #000;
}

.hero-img {
  width: 50px;
  height: 50px;
}

.btn-outline-secondary {
  background: #191489;
  color: #fff;
}

.form-control {
  color: #5d5a6f;
  opacity: 60%;
  font-size: 0.8rem;
}

.bor-btm {
  border-bottom: 1px solid #c8c8c8;
  margin-top: 5px;
}

ul.bor-btm span::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  background-color: #1c168c;
  transition: 0.5s ease;
}

ul.bor-btm span:hover::after {
  width: 100%;
}

small {
  color: #57586e;
}

.btn-primaryy {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primaryy:hover {
  background-color: #100c5cda;
  color: #fff;
}

footer {
  background: #17154b;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.6rem;
  font-weight: normal;
}

footer ul {
  list-style-type: none;
  padding-left: 0;
}

footer small {
  color: #fff;
  opacity: 70%;
}
</style>