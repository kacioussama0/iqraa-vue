<script>
import {defineComponent} from 'vue'
import {VueProgressbar} from "@jambonn/vue-next-progressbar";

export default defineComponent({
  name: "NotFound",

  created() {
    VueProgressbar.start();
  },

  mounted() {
    VueProgressbar.done();
  },
})
</script>

<template>
  <div class="not-found">
    <div class="my-3 w-100 h-100 d-flex justify-content-center text-center  align-items-center flex-column">
      <div class="container">
        <img src="../assets/imgs/404pages.png" alt="404" class="w-50">
        <h1 class="mb-5">عذرا ! 404 الصفحة غير موجودة</h1>
        <router-link to="/" class="btn btn-danger text-light btn-lg my-3">الرجوع للرئيسية</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  height: calc(100vh - 180px);
}
</style>