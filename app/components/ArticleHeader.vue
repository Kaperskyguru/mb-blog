<template>
  <section class="pt-4" :style="{ backgroundColor: color }">
    <div class="max-w-6xl mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center pt-8">
        <!-- Title -->
        <h1 class="text-white text-3xl md:text-5xl font-bold my-6">
          {{ post.title || '' }}
        </h1>

        <!-- Meta Info -->
        <div
          class="flex flex-wrap justify-center items-center gap-3 pb-6 text-sm md:text-base"
        >
          <nuxt-link
            :to="'/authors/' + authorSlug"
            class="text-white hover:underline"
          >
            <p>by {{ authorName }}</p>
          </nuxt-link>
          <span class="text-white">·</span>
          <p class="text-white">
            Updated
            {{
              isFreeman
                ? 'Sat Mar 01 2023'
                : isAdelekan
                ? 'Wed Feb 01 2023'
                : dateFormat
            }}
          </p>
          <span v-if="isFreeman" class="text-white">·</span>
          <p v-if="isFreeman" class="text-white">10.43K views</p>
        </div>

        <!-- Cover Image -->
        <figure class="w-full relative">
          <img
            id="cover"
            class="w-full h-auto rounded-lg shadow-md"
            :src="image"
            :alt="post.title"
          />
        </figure>
      </div>
    </div>
  </section>
</template>


<script>
import Utils from '../../helpers/utils'
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    authorSlug() {
      return this.post?.author?.slug
    },

    isFreeman() {
      return this.$route?.params?.slug == 'designing-a-food-menu-app-in-python'
    },

    isAdelekan() {
      return (
        this.$route.params?.slug ==
        'building-an-enterprise-grade-kafka-messaging-system-with-the-outbox-pattern-on-kubernetes-using-strimzi-java-and-my-sql'
      )
    },

    dateFormat() {
      return new Date(this.post.updatedAt).toDateString()
    },

    color() {
      return Utils.color(this.post.color)
    },

    authorName() {
      return this.post?.author?.name
    },

    image() {
      return (
        this.post &&
        (this.post?.image ??
          this.post?.featured_image?.url ??
          '/img/backend-2023.jpg')
      )
    },
  },
}
</script>

<style scoped>
.profile-img {
  margin-bottom: 0px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-img img {
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.cover-img {
  position: relative;
  margin: 0 auto;
  max-width: 600px;
  margin-top: -10px;
}

.cover-img img {
  border-radius: 10px;
  position: relative;
}

.showcase {
  overflow: hidden;
  position: relative;
}

figure::before {
  content: '';
  position: absolute;
  left: -100vw;
  right: -100vw;
  bottom: 0;
  height: 50%;
  background-color: white;
}
</style>
