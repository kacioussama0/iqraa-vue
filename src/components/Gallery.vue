<script>
import Card from "@/components/Card.vue";

export default {
  components: {Card}

}


</script>

<template>

 <div class="container my-5">
   <h1>المعرض</h1>

    <div class="row mt-5">
      <div class="col-md-4">
        <card>
          <template v-slot:header class="">
            <img src="../assets/imgs/landing-4.jpg" alt="" class="img-fluid">
          </template>

          <template v-slot:footer>
            <h3 class="text-center fw-bolder">رحلات شتوية</h3>
          </template>
        </card>
      </div>

      <div class="col-md-4">
        <card>
          <template v-slot:header class="">
            <img src="../assets/imgs/landing-4.jpg" alt="" class="img-fluid">
          </template>

          <template v-slot:footer>
            <h3 class="text-center fw-bolder">رحلات صيفية</h3>
          </template>
        </card>
      </div>

      <div class="col-md-4">
        <card>
          <template v-slot:header class="">
            <img src="../assets/imgs/landing-4.jpg" alt="" class="img-fluid">
          </template>

          <template v-slot:footer>
            <h3 class="text-center fw-bolder">حفلات</h3>
          </template>
        </card>
      </div>



    </div>

 </div>

</template>

<style scoped>

</style>