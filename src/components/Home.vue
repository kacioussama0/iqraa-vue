<script>

import Card from "@/components/Card.vue";

export default {
  components: {Card},

  data() {
    return {
      statistics: [
        {name: 'طالب' , goal: 634 , icon: 'fa-graduation-cap'},
        {name: 'فصل' , goal: 30 , icon: 'fa-school'},
        {name: 'قاعة تدريس' , goal: 10 , icon: 'fa-screen-users'},
        {name: 'مدرس' , goal: 20 , icon: 'fa-chalkboard-teacher'},
      ],

      modules: [
        {name: 'اللغة العربية' , icon: 'fa-language'},
        {name: 'منهاج إقرأ و ارتق' , icon: 'fa-stairs'},
        {name: 'القرآن الكريم' , icon: 'fa-book-quran'},
        {name: 'التربية الاسلامية' , icon: 'fa-mosque'},
        {name: 'الاناشيد' , icon: 'fa-music'},
        {name: 'القراءة' , icon: 'fa-book-open-reader'},
        {name: 'المحادثة والتعبير .' , icon: 'fa-comments'},
      ],
      countries: ['iq','sy','lb','jo','ps','ye','sd','eg','ly','tn','dz','ma','mr','pk','af','tr','al','xk','ng','sn','gn','so','er','bd','ba','in','cn','br','fr','ch','sa','es','it','km','mk'],
    }
  },

  beforeMount() {

    let nums = document.querySelectorAll(".statistics .number");

    let statsSection = document.querySelector(".statistics");
    let started = false; // Function Started ? No


    window.onscroll = function () {

      // Stats Increase Number
      if (window.scrollY >= statsSection.offsetTop - 400) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
    };

    function startCount(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
          clearInterval(count);
        }
      }, 2000 / goal);
    }
  }

}

</script>

<template>




  <!--    Start Landing Page  -->

  <section class="landing-page py-5 my-3">


    <div class="container">


      <div class="row align-items-center">



        <div class="col-lg-6  p-5 rounded-3 vstack gap-3 justify-content-center align-items-start text-center text-lg-start">
          <h2 class="fw-bolder"><i class="fa-duotone fa-hand-wave fa-1x"></i>{{$t('Welcome')}}</h2>
          <h1 class="display-3 fw-bold text-success">{{$t('School')}}</h1>
          <p class="lh-lg text-muted"> مدرسة جنيف العربية مدرسة متميزة في حماية الهوية الإسلامية لأبناء الجالية، وجعلهم نافعـين لذاتهم ومجتمعهم، بما يجعلها نموذجا للمدارس العربية في اوروبا.</p>
          <button  class="btn btn-primary d-block btn-lg px-5">
            <i class="fa-duotone fa-school me-2"></i>
            تعرف علينا
          </button>
        </div>


        <div class="col-lg-6 landing-imgs">
          <div class="row gap-md-5 text-center">

            <div class="col-sm-6 col-md-5">
              <img src="../assets/imgs/landing-1.jpg" alt="" class="rounded-5">
            </div>

            <div class="col-sm-6 col-md-5">
              <img src="../assets/imgs/landing-2.jpg" alt="" class="rounded-circle">
            </div>

            <div class="col-sm-6 col-md-5">
              <img src="../assets/imgs/landing-3.jpg" alt="" class="rounded-start-pill">
            </div>

            <div class="col-sm-6 col-md-5">
              <img src="../assets/imgs/landing-4.jpg" alt="" class="rounded-end-5">
            </div>

          </div>
        </div>


      </div>



    </div>


  </section>

  <!--    End Landing Page  -->


  <!--    Start Statistics -->

  <section class="statistics text-bg-primary py-5 mb-5" >


    <div class="container">

      <div class="row g-5">

        <div class="col-md-3 vstack gap-3 justify-content-center align-items-center" v-for="item in statistics">
          <i :class="`fa-duotone ${item.icon} fa-4x`"></i>
          <h4 class="fw-bold">+<span :data-goal="item.goal" class="number">{{ item.goal }} </span> {{item.name}}</h4>
        </div>


      </div>

    </div>

  </section>

  <!--    End Statistics -->

  <!--    Start Our Modules -->

  <section class="our-modules">

    <div class="container">

      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">المواد التي ندرسها</span> <br>في مختلف الفصول الدراسية</h4>

      <!-- Start Cards  -->

      <div class="row my-5 g-5 justify-content-center align-items-center">

        <div class="col-sm-6 col-md-4 col-lg-3" v-for="module in modules">
          <card class="vstack gap-3 justify-content-center align-items-center">
            <template v-slot:body class="">
              <i :class="`fa-duotone ${module.icon}  fa-5x text-success mb-3`"></i>
              <h5 class="fw-bolder text-center">{{module.name}}</h5>
            </template>
          </card>

        </div>

      </div>

      <!-- End Cards  -->

    </div>

  </section>

  <!--    End Our Modules -->

  <!--    Start Our Features -->

  <section class="our-features  z-n1 position-relative py-5">


    <div class="container">


      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">خصائص مدرستنا</span></h4>

      <div class="row align-items-center">

        <div class="col-12 col-lg-8 order-1 order-lg-0">

          <div class="row">

            <div class="col-md-6 ">
              <ul class="list-unstyled vstack gap-2">
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>الاسهام في بناء شخصية المنتسب الى مدرستنا بناءً تربوياً سليماً ومتكاملا.</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>تعميق معاني العقيدة الإسلامية الصحيحة</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>التعريف بشخصية النبي صلى الله عليه وسلم وحبه</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>التعريف ببعض محطات السيرة النبوية المختارة، وكيف يستثمرها في حياته اليومية</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>اكساب ثقافة إسلامية دينية صحيحة -الأنبياء، الرسالات السماوية...</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled vstack gap-2">
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>التعريف باركان الإسلام اجمالا</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>تنمية القدرة على استعمال القواميس والمراجع باللغة العربية</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>تنمية القدرة على الاصغاء والتحدث والقراءة والكتابة بلغة عربية بشكل صحيح، والتفاعل مع ما يقرأ.</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>حفظ بعض السور القرآنية المختارة (حوالي 05 احزاب)</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>حفظ بعض الأحاديث المناسبة (الأربعين النووية)</li>
                <li><i class="fa-duotone fa-badge-check text-primary me-2"></i>تقدير قيمة اللغة واهميتها في حياة المتعلم وحضارته كفرد مسلم نطق الحروف بشكل صحيح، والتعريف ب الرسم العثماني.</li>
              </ul>
            </div>

          </div>

        </div>
        <div class="col-lg-4">
          <img src="../assets/imgs/features.svg" alt="" class="img-fluid">
        </div>

      </div>


    </div>


  </section>


  <!--    End Our Features -->



  <section class="properties py-5">

    <div class="container">

      <div class="row">

        <div class="col-xl-6">

          <h4 class="lh-lg fw-normal mb-5"><span class="heading-shape fw-bolder">أعمار التلاميذ</span></h4>

          <p>تتراوح أعمار التلاميذ من 4 سنوات وحتى17 سنة </p>
          <img src="../assets/imgs/proprties.svg" alt="" class="img-fluid">

        </div>


        <div class="col-xl-6">


          <h4 class="lh-lg fw-normal mb-5"><span class="heading-shape fw-bolder"> جنسيات التلاميذ</span></h4>
          <p>وتتضمن التلاميذ بدول إسلامية وغير إسلامية</p>

            <div class="row g-3">

              <div class="col-4 col-sm-3 col-md-2" v-for="country in countries">
                  <div :class="`fi fi-${country}`"></div>
              </div>

            </div>

        </div>

      </div>

    </div>

  </section>


  <!--    Start Posts  -->


  <section class="posts py-5">
    <div class="container">


      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">أخر منشوراتنا</span></h4>

      <div class="row g-5">


        <div class="col-md-6 col-lg-4" v-for="i in 6">
          <card class="text-center">
            <template v-slot:header>
              <img src="https://mkte.tech/assets/imgs/landing-1.jpg" class="card-img-top" alt="...">
            </template>
            <template v-slot:body class="vstack gap-2 ">
              <h5 class="card-title text-center">مقال عن مماراسات المدرسة</h5>
              <p class="card-text text-muted">تعد الرحلات المدرسية طريقة من طرق التعليم التي تعتمد على التشويق والتجربة والبحث والاستكشاف وتمتلك في طياتها نوعاً من أنواع الترفيه ...</p>
              <span> <i class="fa-duotone fa-calendar text-primary me-2"></i>تاريخ النشر :  07/05/2023  </span>
              <a href="#" class="btn btn-outline-success fw-bold stretched-link d-block my-2">إقرأ المزيد</a>
            </template>
          </card>

        </div>

      </div>


    </div>
  </section>


  <!--    End Posts  -->


  <!--    Start Testimonials  -->

  <section class="testimonials py-5">


    <div class="container">


      <h4 class="lh-lg fw-normal text-center mb-5"><span class="heading-shape fw-bolder">ماذا قالو عنا</span></h4>

      <div id="carouselExampleIndicators" class="carousel slide rounded-4 mx-auto w-50" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" class="bg-primary" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" class="bg-primary" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner p-5">
          <div class="carousel-item active text-center">

            <img src="https://mkte.tech/assets/imgs/landing-1.jpg" class="rounded-circle object-fit-cover mb-3" alt="..." style="width: 100px ; height: 100px">
            <h3 class="mb-3">الأستاذ مهاجري زيان</h3>
            <p class="text-muted">بارك الله فيكم وفي منهجكم الدراسي </p>
          </div>
          <div class="carousel-item text-center">
            <img src="https://mkte.tech/assets/imgs/landing-3.jpg" class="rounded-circle object-fit-cover mb-3" alt="..." style="width: 100px ; height: 100px">
            <h3 class="mb-3">الأستاذ إسماعيل دباح</h3>
            <p class="text-muted">بارك الله فيكم وفي منهجكم الدراسي </p>
          </div>
          <div class="carousel-item text-center">
            <img src="https://mkte.tech/assets/imgs/landing-2.jpg" class="rounded-circle object-fit-cover mb-3" alt="..." style="width: 100px ; height: 100px">
            <h3 class="mb-3">الأستاذ مهاجري زيان</h3>
            <p class="text-muted">بارك الله فيكم وفي منهجكم الدراسي </p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <i class="fa-duotone fa-arrow-right text-primary fa-2x"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <i class="fa-duotone fa-arrow-left text-primary fa-2x"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>


  </section>


  <!--    End Testimonials  -->




</template>

<style scoped>

@import "flag-icons/css/flag-icons.css";

.fi {
  font-size: 80px;
  width: 100%;
}


.statistics {
  height: 500px;
  background-image: url("../assets/imgs/landing-4.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.statistics::before {
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


.landing-page {
  background-image: url("../imgs/Shape Hero.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

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

/* Start Our Modules */

.our-modules {
  background-image: url("../imgs/Shape Hero.svg");
  background-repeat: no-repeat;
  background-position: right center;
}

/* End Our Modules */


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


.posts div.card {
  cursor: pointer;
  transition: 0.6s;
}

.posts div.card:hover  {
  transform: rotate(1deg);
}


.posts a {
  bottom: -20px !important;
}

/* End Posts */


/* Start Testimonials */

.testimonials .carousel-indicators {

  bottom: -50px !important;
}

.testimonials .carousel-indicators button {
  background: var(--bs-primary) !important;
  width: 15px !important;
  border-radius: 50%;
}


/* End Testimonials */



</style>