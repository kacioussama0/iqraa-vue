<script>
import Card from "@/components/Card.vue";
import {getData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";
export default {

  created() {
    VueProgressbar.start();
  },

  async beforeMount() {

    document.title = 'مدرسة إقرأ جنيف | أنشطة المدرسة'

    this.categories = await getData('categories');
    this.categories = this.categories.filter((item)=> {
          return item.type === 'posts'
    })

    await VueProgressbar.done();

  },
  components: {Card},
  data() {
    return {
      categories: []
    }
  }
}
</script>

<template>

  <div class="container my-5">


      <div class="categories">

        <section class="category my-5" v-for="category in categories" >
          <div v-if="category.posts.length">
            <h3 class="mb-3 display-4 fw-bold">{{category.name}}</h3>
            <div class="row gy-5 g-lg-5">


              <div class="col-md-6 col-lg-4 " v-for="post in category.posts">
                <card class="border-0 mb-3 shadow-sm rounded-2 overflow-hidden h-100">
                  <template v-slot:header>
                    <img :src="`${post.thumbnail}`" class="card-img-top" alt="...">
                  </template>
                  <template v-slot:body class="vstack gap-4">
                    <h5 class="card-title mb-3 text-truncate fw-bold">{{post.title}}</h5>
                    <div class="card-text text-muted text-truncate lh-lg text-truncate" style="font-size: 14px; height: 150px" v-html="post.content"></div>
                    <span> <i class="fa-duotone fa-calendar text-primary me-2"></i>تاريخ النشر :  {{post.created_at}}  </span>
                    <router-link class="fw-bold stretched-link d-block my-3" :to="`posts/${post.slug}`">إقرأ المزيد</router-link>
                  </template>
                </card>
              </div>

            </div>
          </div>
        </section>

      </div>

  </div>

</template>

<style scoped>

.card {
  transition: .3s;
}

.card:hover {
  cursor: pointer;
  transform: rotate(-1deg);
}

</style>