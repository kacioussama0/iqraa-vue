<script>
import {getData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";
export default {
  created() {
    VueProgressbar.start();
  },
  async beforeMount() {
    document.title = 'مدرسة إقرأ جنيف | أسئلة شائعة';
    this.faqs = await getData('faq');
    await VueProgressbar.done()
  },
  data() {
   return {
     faqs: []
   }
 }
}
</script>

<template>

 <div class="container my-5">
   <h1 class="text-center my-5">أسئلة شائعة</h1>

   <div class="accordion" id="accordionFaq">
     <div class="accordion-item" v-for="faq in faqs">
       <h2 class="accordion-header">
         <button :class="`accordion-button ${(faq.id == faqs[0].id) ? '' : 'collapsed'}`" type="button" data-bs-toggle="collapse" :data-bs-target="`#id-faq-${faq.id}`" aria-expanded="true" :aria-controls="`faq-${faq.id}`">
                <i class="fa-duotone fa-question fa-2x me-2"></i>
                {{faq.question}}
         </button>
       </h2>
       <div :id="`id-faq-${faq.id}`" :class="`accordion-collapse collapse  ${(faq.id == faqs[0].id) ? 'show' : ''}`" data-bs-parent="#accordionFaq">
         <div class="accordion-body">
           {{faq.answer}}
         </div>
       </div>
     </div>

   </div>


 </div>

</template>

<style scoped>

</style>