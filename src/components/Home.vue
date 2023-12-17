<script>
import {VueProgressbar} from "@jambonn/vue-next-progressbar";
import Card from "@/components/Card.vue";
import {getData} from "@/api";




export default {
  components: {Card},

  created() {
    VueProgressbar.start();
  },

  async beforeMount() {
    document.title = 'مدرسة إقرأ جنيف | الرئيسية';
    this.latestPosts = await getData('latest-posts');
    await  VueProgressbar.done();
  },
  data() {
    return {
      latestPosts: [],
      statistics: [
        {name: 'طالب' , goal: 1139 , icon: 'fa-graduation-cap'},
        {name: 'قاعة تدريس' , goal: 14 , icon: 'fa-screen-users'},
        {name: 'مدرس' , goal: 28 , icon: 'fa-chalkboard-teacher'},
      ],
      modules: [
        {name: 'اللغة العربية' , icon: 'fa-language', color: "warning"},
        {name: 'التربية الاسلامية' , icon: 'fa-mosque', color: "primary"},
        {name: 'القرآن الكريم' , icon: 'fa-book', color: "primary"},
        {name: 'القراءة' , icon: 'fa-book-open-reader', color: "warning"},
        {name: 'المحادثة والتعبير' , icon: 'fa-comments', color: "warning"},
        {name: 'منهاج إقرأ و ارتق' , icon: 'fa-stairs', color: "primary"},
      ],
      countries: ['iq','sy','lb','jo','ps','ye','sd','eg','ly','tn','dz','ma','mr','pk','af','tr','al','xk','ng','sn','gn','so','er','bd','ba','in','cn','br','fr','ch','sa','es','it','km','mk'],
    }
  },


}

</script>

<template>



  <!--    Start Landing Page  -->

  <section class="landing-page py-5 my-5">

    <div class="container">

      <div class="row align-items-center">

        <div class="col-lg-6 align-items-center rounded-3 my-5 vstack gap-3 justify-content-center align-items-lg-start align-items-center order-last order-lg-first">
          <h2 class="fw-light"><i class="fa-duotone fa-hand-wave fa-1x"></i>{{$t('Welcome')}}</h2>
          <h1 class="display-4 fw-bold text-primary text-lg-start text-center">{{$t('School')}}</h1>
          <p class="lh-lg text-muted text-lg-start text-center"> أن نكون مدرسة متميزة في تثقيف وحماية الهوية الإسلامية لأبنائنا. وأن نكون نموذجاً يحتذى به للمدارس العربية في أوروبا.</p>
          <router-link to="/who-we-are" class="btn btn-lg btn-warning">تعرفوا علينا</router-link>
        </div>

        <div class="col-12 col-lg-6 order-first order-lg-last">

          <img src="../assets/imgs/landing.jpeg"  alt="landing page" class="rounded-5 img-fluid">

        </div>

      </div>

    </div>


  </section>

  <!--    End Landing Page  -->


  <!-- Start Wish The Best -->


  <div class="ad my-5 py-5">

    <div class="container">
      <h3 class="text-center display-5 fw-bold text-light">مدرسة جنيف العربية هي الاختيار الأفضل لطفلك</h3>
    </div>

  </div>


  <!-- End Wish The Best -->





  <!--    Start Our Modules -->

  <section class="our-modules">

    <div class="container">

      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">المواد التي ندرسها</span></h4>

      <!-- Start Cards  -->

      <div class="row my-5  gy-5 align-items-center">

        <div class="col-sm-6 col-md-4" v-for="module in modules">
          <card class="vstack gap-3 justify-content-center align-items-center  text-center">
            <template v-slot:body class="">
              <i :class="`fa-duotone ${module.icon}  fa-4x text-${module.color} mb-4`"></i>
              <h5 class="fw-bolder">{{module.name}}</h5>
            </template>
          </card>

        </div>

      </div>

      <!-- End Cards  -->

    </div>

  </section>

  <!--    End Our Modules -->

  <!--    Start Statistics -->

  <section class="statistics  py-5 mb-5 w-100">

    <div class="container">

      <div class="row gy-5">

        <div class="col-sm-6 col-md-3 vstack gap-3 justify-content-center align-items-center text-light" v-for="item in statistics">
          <i :class="`fa-duotone ${item.icon} fa-4x`"></i>
          <h4 class="fw-bold"> + <span :data-goal="item.goal" class="number">{{ item.goal }} </span> {{item.name}}</h4>
        </div>


      </div>

    </div>

  </section>

  <!--    End Statistics -->


  <!--    Start Our Features -->

  <section class="our-features  z-n1 position-relative py-5">


    <div class="container">

      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">أهداف مدرستنا</span></h4>

      <div class="row align-items-center">

        <div class="col-12 col-lg-8 order-1 order-lg-0">

          <div class="row ">

            <div class="col-md-6 ">
              <ul class="list-unstyled vstack gap-3">
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعزيز تطوير شخصية الفرد المنتسب إلى مدرستنا بناءً تربويًا سليمًا وشاملًا</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعزيز الفهم الصحيح للإسلام والتطبيق الصحيح للعقيدة الإسلامية وتعميق معانيها.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعريف أبناءنا بشخصية النبي محمد صلى الله عليه وسلم وتعزيز حبه في قلوبهم.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعريف ابناءنا بمحطات مختارة في السيرة النبوية وتعليمهم كيفية الاستفادة منها في حياتهم اليومية.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>إكساب أبناءنا الثقافة الإسلامية الصحيحة من خلال دراسة سير الأنبياء والرسل والرسائل السماوية.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعزيز قيمة اللغة العربية وأهميتها في حياة المتعلم وحضارته كفرد مسلم.</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled vstack gap-3">
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعريف أبناءنا بأركان الإسلام وأهميتها في الحياة اليومية.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تنمية القدرة على استخدام القواميس والمراجع باللغة العربية بفعالية.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعزيز القيم الأخلاقية والآداب والفضائل الإسلامية، مع تعزيز قيم المواطنة والمشاركة في المجتمع.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تطوير مهارات الإستماع والتحدث والقراءة والكتابة باللغة العربية بشكل صحيح، وتشجيع التفاعل مع المواد المقروءة.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>حفظ بعض السور القرآنية المختارة (حوالي 5 أحزاب).</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>حفظ بعض الأحاديث المناسبة من الأربعين النووية.</li>
                <li><i class="fa-duotone fa-circle-check text-primary me-2"></i>تعليم النطق الصحيح للحروف العربية والتعريف بالرسم العثماني للحروف.</li>
              </ul>
            </div>

          </div>

        </div>
        <div class="col-lg-4 mb-5">
          <img src="../assets/imgs/features.jpeg" alt="" class="img-fluid rounded-5">
        </div>

      </div>

    </div>

  </section>


  <!--    End Our Features -->


  <section class="properties py-5">

    <div class="container">

          <div class="row gy-5 mb-5 align-items-center">

            <div class="col-md-6 ">
              <img src="../assets/imgs/ages.jpeg" alt="" class="img-fluid rounded-5  object-fit-cover" style="width:100%;height: 500px">
            </div>

            <div class="col-md-6">
              <div class="ages">
                <h4 class="lh-lg fw-normal mb-3"><span class="heading-shape fw-bolder">أعمار التلاميذ</span></h4>
                <p>تتراوح أعمار التلاميذ من 4 سنوات وحتى17 سنة </p>
              </div>

              <div class="levels">
                <h4 class="lh-lg fw-normal mb-3"><span class="heading-shape fw-bolder">المستويات</span></h4>
                <ul class="vstack gap-2">
                  <li v-for="count in 10">المستوى {{count}} </li>
                </ul>
              </div>

            </div>

          </div>

          <section>

            <h4 class="lh-lg fw-normal"><span class="heading-shape fw-bolder">جنسيات التلاميذ</span></h4>
            <p>مدرستنا تضم تلاميذ من 35 جنسية مختلفة.</p>

            <div class="row gy-3 mt-4">
              <div class="col-4 col-sm-3 col-md-1" v-for="country in countries">
                <div :class="`fi fi-${country}`" ></div>
              </div>
            </div>

          </section>

        </div>



  </section>


  <!--    Start Posts  -->


  <section class="posts py-5">
    <div class="container">


      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">آخر منشوراتنا</span></h4>

      <div class="row gy-5">

        <div class="col-md-6 col-lg-4 " v-for="post in latestPosts">
          <card class="border-0 mb-3 rounded-2 overflow-hidden h-100">
            <template v-slot:header>
              <img :src="`${post.thumbnail}`" class="card-img-top object-fit-cover" alt="..." style="height: 300px">
            </template>
            <template v-slot:body class="vstack gap-4">
              <h5 class="card-title mb-3 text-truncate fw-bold" style="font-size: 16px;">{{post.title}}</h5>
              <div class="card-text text-muted text-truncate text-truncate" style="font-size: 14px; height: 40px" v-html="post.content"></div>
              <span> <i class="fa-duotone fa-calendar text-primary me-2"></i>تاريخ النشر :  {{post.created_at}}  </span>
              <router-link class="fw-bold stretched-link d-block my-3" :to="`posts/${post.slug}`">إقرأ المزيد</router-link>
            </template>
          </card>
        </div>

      </div>


    </div>
  </section>


  <!--    End Posts  -->




</template>

<style scoped>

@import "flag-icons/css/flag-icons.css";

.fi {
  font-size: 80px;
  width: 100%;
}

.ad {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.statistics {
  min-height: 500px;
  background-image: url("../assets/imgs/landing-4.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.statistics::before,
.ad::before{
  content: '';
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--bs-primary);
  opacity: 0.9;
  z-index: -1;
}


/* Start Landing Page */



.landing-page .landing-imgs img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

@media (max-width: 767px) {
  .landing-page .landing-imgs img {
    width: 150px;
    height: 150px;

  }
}

/* End Landing Page */


/* Start Our Features */

.our-features {
  width: 100%;
}

/* End Our Features */


/* Start Posts */


.posts img {
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  transition: 0.6s;
}


/* End Posts */


/* Start Testimonials */

.testimonials .carousel-indicators {
  bottom: -30px !important;
}

.testimonials .carousel-indicators button {
  background: var(--bs-primary) !important;
  border-radius: 15px;
}


/* End Testimonials */



</style>