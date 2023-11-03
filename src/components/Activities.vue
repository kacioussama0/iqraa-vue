<script>
import Card from "@/components/Card.vue";

export default {
  components: {Card}

}
</script>

<template>

  <div class="container my-5">
    <div class="row g-5">


      <div class="col-md-6 col-lg-4" v-for="i in 6">
        <card class="text-center">
          <template v-slot:header>
            <img src="../assets/imgs/landing-1.jpg" class="card-img-top" alt="...">
          </template>
          <template v-slot:body class="vstack gap-2 ">
            <h5 class="card-title text-center">مقال عن مماراسات المدرسة</h5>
            <p class="card-text text-muted">تعد الرحلات المدرسية طريقة من طرق التعليم التي تعتمد على التشويق والتجربة والبحث والاستكشاف وتمتلك في طياتها نوعاً من أنواع الترفيه ...</p>
            <span> <i class="fa-duotone fa-calendar text-primary me-2"></i>تاريخ النشر :  07/05/2023  </span>
            <router-link class="btn btn-outline-dark fw-bold stretched-link d-block my-2" to="/post">إقرأ المزيد</router-link>
          </template>
        </card>

      </div>

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