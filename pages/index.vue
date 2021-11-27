<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- All Posts -->
        <h1>Latest Posts</h1>
        <posts-grid :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <all-categories />
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'
import AllCategories from '~/components/categories/AllCategories'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Blog | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal,
    AllCategories
  },
  data() {
    return {
      allCats: []
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'blog' })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
h1 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
}
</style>
