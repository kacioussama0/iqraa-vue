<script>
import {VueProgressbar} from "@jambonn/vue-next-progressbar";
import Card from "@/components/Card.vue";
import {getData} from "@/api";
import News from "@/components/News.vue";


export default {
  components: {News, Card},

  async created() {

    VueProgressbar.start();

    this.news = await getData('latest-news');
    $(document).ready(function () {
      $('.trending-news-slider').slick({
        infinite: true,
        arrows: false,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false,
              arrows: false
            }
          }
        ]
      });
    })
  },

  async beforeMount() {
    document.title = 'مدرسة إقرأ جنيف | الرئيسية';
    this.latestPosts = await getData('latest-posts');
    await  VueProgressbar.done();
  },
  data() {
    return {
      latestPosts: [],
      news: [],
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

  <news :news="news"  v-if="news.length" />

  <!--    Start Landing Page  -->

  <section class="landing-page pt-5 ">

    <div class="container">

      <div class="row align-items-end">

        <div class="col-lg-5 align-items-center rounded-3 my-5 vstack gap-3 justify-content-center align-items-lg-start align-items-center order-last order-lg-first">
          <h2 class="fw-light"><i class="fa-duotone fa-hand-wave fa-1x"></i>{{$t('Welcome')}}</h2>
          <h1 class="display-3 fw-bold text-primary text-lg-start text-center">{{$t('School')}}</h1>
          <p class="lh-lg text-muted text-lg-start text-center"> أن نكون مدرسة متميزة في تثقيف وحماية الهوية الإسلامية لأبنائنا.<br>  وأن نكون نموذجاً يحتذى به للمدارس العربية في أوروبا.</p>
          <router-link to="/who-we-are" class="btn btn-lg btn-warning rounded-pill px-5 py-2 fw-bold">تعرفوا علينا</router-link>
        </div>

        <div class="col-12 col-lg-7 order-last order-lg-first d-none d-md-block">
          <img src="../assets/imgs/landing-bg.webp"  alt="landing page" height="500" class="w-100">
        </div>

      </div>

    </div>


  </section>

  <!--    End Landing Page  -->


  <!-- Start Wish The Best -->

  <div class="ad mb-5 py-5">

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


  <!--    Start Our Features -->

  <section class="our-features  z-n1 position-relative pt-5">


    <div class="container">

      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">أهداف مدرستنا</span></h4>

      <div class="row align-items-center">

        <div class="col-12 col-lg-8">

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
        <div class="col-lg-4 order-last  mt-5">
          <img src="../assets/imgs/goal.webp" alt="" class="img-fluid rounded-5">
        </div>

      </div>

    </div>

  </section>

  <!--    End Our Features -->


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




  <section class="properties py-5">

    <div class="container">

          <div class="row gy-5 mb-5 align-items-center">

            <div class="col-md-6 ">
              <img src="../assets/imgs/properties.webp" alt="" class="img-fluid" height="300px">
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
          <card class="border-0 mb-3 rounded-2 overflow-hidden">
            <template v-slot:header>
              <img :src="`${post.thumbnail}`" class="card-img-top object-fit-cover" alt="..." style="height: 250px">
            </template>
            <template v-slot:body class="vstack gap-4">
              <h2 class="card-title text-truncate fw-bold" style="font-size: 12px;">{{post.title}}</h2>
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
  background-image: url("../assets/imgs/landing-4.webp");
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