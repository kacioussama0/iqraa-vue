<script>
export default {

  props: {
    news: {type: Array,required:true}
  },

}
</script>

<template>
  <!-- Trending News Start -->
  <div class="trending-news py-3 border-top border-bottom border-tranding">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="trending-news-inner">
            <div class="title">
              <i class="fa fa-bolt me-2"></i>
              <strong>أخر الأخبار</strong>
            </div>
            <div class="trending-news-slider">
              <div class="item-single" v-for="latestNews in news">
                <a href="#">{{latestNews.content}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Trending News End -->
</template>

<style scoped>

</style>