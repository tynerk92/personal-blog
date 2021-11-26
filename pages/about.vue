<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Hi, I'm Kylon"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>What's My Goal?</h3>
          <p>
            With over 10,000 hours of professional software development, I want
            to help everyone become the best developer they can be. Not only do
            I genuinely love helping other people succeed, but I've learned that
            it can be the fastest way to learn and succeed.
          </p>
          <quote-card
            quote="If you want to lift yourself up, lift up someone else."
            author="Booker T. Washington"
          />
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
