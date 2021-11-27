<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Category -->
        <posts-grid :category="[$store.state.name]" :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <all-categories />
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
import AllCategories from '~/components/categories/AllCategories'

export default {
  components: {
    AllCategories
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  }
}
</script>
