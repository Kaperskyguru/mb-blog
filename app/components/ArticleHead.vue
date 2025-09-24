<template>
  <div>
    <!-- Title -->
    <h1 class="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
      <NuxtLink
        v-if="link"
        class="hover:underline text-gray-900 dark:text-white"
        :to="`/${link}`"
      >
        {{ title }}
      </NuxtLink>

      <span
        v-else
        @click.prevent=""
        class="cursor-pointer text-gray-900 dark:text-white"
      >
        {{ title }}
      </span>
    </h1>

    <!-- Meta Info -->
    <small
      v-if="showAuthor || showDate"
      class="text-sm font-semibold text-gray-600 dark:text-gray-300"
    >
      <span v-if="showAuthor">By {{ authorName }}</span>
      <span v-if="showDate"> · Updated {{ dateFormat }}</span>
    </small>
  </div>
</template>


<script>
export default {
  name: 'ArticleHead',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    showAuthor: {
      type: Boolean,
      default: true,
    },
    showDate: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    authorName() {
      return this.post?.author?.name
    },

    link() {
      if (!this.showDate) return ''
      return this.post?.slug
    },

    title() {
      return this.post?.title ?? ''
    },

    authorSlug() {
      return this.post?.author?.slug
    },

    dateFormat() {
      return new Date(this.post.updatedAt).toDateString()
    },
  },
}
</script>

<style scoped>
h1 {
  color: #0a083b;
}

.title_header {
  text-decoration: none;
  color: var(--primary-color);
  transition: 0.3s ease all;
}

.title_header:hover {
  color: #14107c;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

small {
  color: #57586e;
}
</style>