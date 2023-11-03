<script>
import Card from "@/components/Card.vue";

export default {
  components: {Card},
  data() {
    return {
      contacts: [
        {
          icon: 'fa-phone',
          text: '+(41) 799 653 711',
          link: 'tel:+(41) 799 653 711'

        },
        {
          icon: 'fa-envelope',
          text: 'Madrassa@fcigeneve.ch',
          link: 'mailto:info@fcigeneve.ch'
        },
        {
          icon: 'fa-location-dot',
          text: 'Chemin Colladon 34, 1209 Genève',
          link: 'https://rb.gy/2ua5cv'
        }
      ]
    }
  }
}
</script>

<template>

 <div class="container">
   <h1 class="my-5">تواصلوا معنا</h1>


   
   <div class="row g-3 ">
     <div class="col-md-6 col-lg-4" v-for="info in contacts">
       <card>
         <template v-slot:body>
           <div class="vstack gap-3 text-center justify-content-center align-items-center">
             <i :class="`fa-duotone ${info.icon} fa-3x`"></i>
             <a :href="info.link" target="_blank" class="fw-bolder text-decoration-none text-dark fs-5">{{info.text}}</a>
           </div>
         </template>
       </card>
     </div>
   </div>



   <div class="row justify-content-center align-items-center">
     <div class="col-md-6">
       <form action="" class="my-5">

         <form-kit
             type="text"
             placeholder="الرجاء إدخال إسمك بالكامل"
             label="الاسم"
             validation="required|max:25"
         />

         <form-kit
             type="email"
             placeholder="xyz@gmail.com"
             label="البريد الإلكتروني"
             validation="required|email|max:128"
         />

         <form-kit
             type="textarea"
             label="الرسالة"
         />

         <button class="btn btn-primary w-100 mt-3">إرسال</button>

       </form>

     </div>

     <div class="col-md-6">
       <img src="../assets/imgs/contact-us.svg" alt="">
     </div>
   </div>

 </div>

</template>

<style scoped>

</style>