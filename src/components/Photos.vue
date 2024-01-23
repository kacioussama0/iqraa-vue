<script>

import {getData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
export default  {

  created() {
    VueProgressbar.start();
  },

  async mounted() {

    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }

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

  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },

}
</script>

<template>
  <div id="gallery" class="container my-5">
    <div class="row gy-5 g-lg-5">

      <div class="col-12 col-md-4 " v-for="(image, key) in photos">
        <a
            :key="key"
            :href="image.path"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
        >

        <img :src="image.path" alt=""  class="w-100 rounded-3 category-images" loading="lazy"/>

        </a>
      </div>

    </div>


  </div>
</template>

<style scoped>
.category-images {
  height: 250px;
  object-fit: cover;
  object-position: center;
}
</style>