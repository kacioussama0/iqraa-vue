<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "UpBar"
})
</script>

<template>
  <!--    Start Up Bar     -->
  <div class="up-bar">
    <div class="alert alert-light rounded-0 alert-dismissible fade show mb-0" role="alert">
      <div class="container text-center">
        <h6 class="mb-0">
          هل تريد مساعدة نحن هنا للإجابة على إستفساراتكم
          <router-link to="/contact" class="alert-link">تواصلوا معنا</router-link>
        </h6>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  </div>

  <!--    End Up Bar     -->
</template>

<style scoped>

</style>