<template>
  <div class="all-categories">
    <h3 class="subtitle">
      All Categories
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
        {{ cat.name }}
      </nuxt-link>
      <button class="button is-primary" :to="'/categories'" nuxt>
        See More
      </button>
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
  }
}
</script>

<style>
.panel button {
  margin: 20px 0;
}
</style>
