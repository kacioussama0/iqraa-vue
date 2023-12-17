<script>
import {getData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";


export default  {
  created() {
    VueProgressbar.start();
  },
  async beforeMount() {
    document.title = 'مدرسة إقرأ جنيف | الرئيسية';
    const slug = this.$route.params.slug
    this.post = await getData(`posts/${slug}`);
    document.title = 'مدرسة إقرأ جنيف | مقال';
    VueProgressbar.done();
  },
  data() {
    return {
       post: {}
    }
  }
}
</script>

<template>
  <div class="post-header position-relative" :style="{backgroundImage: `url('${post.thumbnail}')`}">
      <h1 class="text-center fs-3 lh-lg position-absolute text-white fw-bolder start-50 top-50 translate-middle">{{post.title}}</h1>
  </div>
  <div class="container my-5 post-content">
      <div class="row">
        <div class="col-md-12" v-html="post.content"></div>
      </div>
  </div>
</template>

<style >
.post-header {
  min-height: 250px;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.post-header::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--bs-primary);
  opacity: .5;
  z-index: 0;
}

.post-content img {
  width: 100%;
}

</style>