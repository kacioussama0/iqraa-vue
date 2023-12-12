<script>
import Card from "@/components/Card.vue";
import CInput from "@/components/CInput.vue";
import CButton from "@/components/CButton.vue";
import {postData} from "@/api";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";

export default {


  created() {
    VueProgressbar.start();
  },

  beforeMount() {
    document.title = 'مدرسة إقرأ جنيف | تواصلوا معنا';
  },

  mounted() {
    VueProgressbar.done();
  },

  components: {CButton, CInput, Card},
  data() {
    return {
      FormStatus: '',
      SubmitLoading: false,
      contacts: [
        {
          icon: 'fa-brands fa-whatsapp',
          text: '+(41) 79 462 94 17',
          link: 'tel: +(41) 79 462 94 17'

        },
        {
          icon: 'fa-duotone fa-envelope',
          text: 'Madrassa@fcigeneve.ch',
          link: 'mailto:info@fcigeneve.ch'
        },
        {
          icon: 'fa-duotone  fa-location-dot',
          text: 'Chemin Colladon 34, 1209 Genève',
          link: 'https://rb.gy/2ua5cv'
        }
      ],

      name: {
        value: '',
        valid: false,
      },
      subject: {
        value: '',
        valid: false,
      },
      email: {
        value: '',
        valid: false,
      },
      message: {
        value: '',
        valid: false,
      },

    }
  },
  methods: {
    async submit() {

      if(this.valid) {
        this.SubmitLoading = true;
        let sended = await postData('send-message',{
          'name': this.name.value,
          'subject': this.subject.value,
          'email': this.email.value,
          'message': this.message.value
        })

        if(sended.success) {
          this.SubmitLoading = false;
          this.name = this.subject = this.email = this.message = {name: '',valid:false}
          this.FormStatus = 'success';
          setTimeout(()=> {
            this.FormStatus = ''
          },1000)
        }
      }
    },
    update(data) {
      this[data.name] = data
    },
  },
  computed: {
    valid() {
      return this.name.valid && this.subject.valid && this.email.valid && this.message.valid
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
             <i :class="`${info.icon} fa-3x`"></i>
             <a :href="info.link" target="_blank" class="fw-bolder text-decoration-none text-dark fs-5" dir="ltr">{{info.text}}</a>
           </div>
         </template>
       </card>
     </div>
   </div>



   <div class="row justify-content-center align-items-center">
     <div class="col-md-6">

          <CInput id="name" :rules="{required: true, min: 3 , max: 50}" type="text" name="الإسم الكامل" @onUpdate="update" :value="name.value"/>
          <CInput id="subject" :rules="{required: true,min:10,max:128}" type="text" name="الموضوع" @onUpdate="update" :value="subject.value"/>
          <CInput id="email" :rules="{required: true, email: true, max:128}" type="email" name="البريد الإلكتروني" @onUpdate="update" :value="email.value"/>
          <CInput id="message" :rules="{required: true, min:20}" type="textarea" name="الرسالة" @onUpdate="update" :value="message.value"/>
          <CButton title="إرسال" @click="submit" :disabled="!valid" :status="FormStatus" :loading="SubmitLoading" />

     </div>

     <div class="col-md-6">
       <img src="../assets/imgs/2.png" alt="" class="img-fluid">
     </div>

   </div>

 </div>

</template>

<style scoped>

</style>