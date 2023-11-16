<script>
import Card from "@/components/Card.vue";
import {getData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";
export default {

  created() {
    VueProgressbar.start();
  },

  async beforeMount() {
    document.title = 'مدرسة إقرأ جنيف | المعرض';
    this.categories = await getData('categories');
    this.categories = this.categories.filter((item)=> {
      return item.type == 'images';
    });
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

   <h1>المعرض</h1>

    <div class="row mt-5">
      <div class="col-md-4" v-for="category in categories">
        <card>
          <template v-slot:header>
            <div class="card-img" :style="{backgroundImage : `url('${category.thumbnail}')`}"></div>
            <router-link :to="`/gallery/${category.slug}`" class="stretched-link"  ></router-link>
          </template>

          <template v-slot:footer>
            <h3 class="text-center fw-bolder">{{category.name}}</h3>
          </template>
        </card>
      </div>

    </div>

 </div>

</template>

<style scoped>
.card-img {
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>