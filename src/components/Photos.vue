<script>
import {getData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";

import SimpleGallery from "@/components/SimpleGallery.vue";
export default  {
  components: {SimpleGallery},

  created() {
    VueProgressbar.start();
  },

  async mounted() {
    document.title = 'مدرسة إقرأ جنيف | الصور';
    const slug = this.$route.params.category;
      this.photos = await getData(`categories/${slug}/images`);
      await VueProgressbar.done();
  },
  data() {
    return {
      photos: []
    }
  },

}
</script>

<template>
  <div class="container my-5">

    <SimpleGallery  galleryID="iqraa-gallery" :images="photos" />

<!--    <div class="row gy-5 g-lg-5">-->
<!--      <div class="col-12 col-md-4" v-for="photo in photos">-->
<!--          <img :src="photo.path" class="rounded-3 w-100 category-images" alt="...">-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.category-images {
  height: 250px;
  object-fit: cover;
  object-position: center;
}
</style>