<template>
  <div class="card quote-card">
    <div class="card-content">
      <p class="title">“{{ quote }}”</p>
      <p class="subtitle">~ {{ author }}</p>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <span>
          Share on
          <a
            :href="`https://twitter.com/intent/tweet?text=${quote} - ${author}`"
            target="_blank"
          >
            Twitter
          </a>
        </span>
      </div>
      <div class="card-footer-item">
        <span> Share on <a href="#">Facebook</a> </span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    quote: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }
  }
}
</script>
