<template>
  <div class="all-categories">
    <h3 class="subtitle">
      Choose a Topic
    </h3>
    <div class="panel">
      <nuxt-link
        v-for="cat in allCats"
        :key="cat.slug"
        :to="`/categories/${cat.slug}`"
        :class="{
          'panel-block': true,
          'is-active': cat.slug === $route.params.single
        }"
      >
        <span class="category-button">
          <span>{{ cat.name }}</span>
          <img v-if="cat.icon" :src="responsiveImage(cat.icon)" />
        </span>
      </nuxt-link>
      <a
        class="button is-primary"
        :href="'/categories'"
        :to="'/categories'"
        nuxt
      >
        See More
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCats: []
    }
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  },
  computed: {
    responsiveImage(path) {
      if (path.indexOf('/uploads') === 0) {
        return require(`~/assets${path}`)
      }
      return { src: path, srcSet: '' }
    }
  }
}
</script>

<style lang="scss">
.panel .button {
  margin: 20px 0;
}
.category-button {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 32px;
    max-height: 32px;
  }
}
.all-categories {
  position: sticky;
  top: 92px;
}
</style>
