<script>
export default {
  data() {
    return {
      listItem: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Gallery',
          link: '/gallery'
        },
        {
          name: 'School Activity',
          link: '/activities'
        },
        {
          name: 'FAQ',
          link: '/faq'
        },
        {
          name: 'Contact',
          link: '/contact'
        },
      ]
    }
  },

}
</script>

<template>

  <!--    Start Footer  -->

  <img src="../assets/imgs/waves.svg" alt="" class="waves">

  <footer class=" mt-0 pt-0 pb-1 text-white  position-relative text-bg-success">

    <div class="container  mb-5">


      <div class="row mt-1 g-5 text-lg-start text-center">


        <div class="col-lg-3 mt-2 mt-lg-5 vstack gap-4">

          <h3 class="mt-5 fw-bolder"> مدرسة جنيف العربية </h3>
          <p>
            مدرسة جنيف العربية، هي مدرسة بسويسرا تابعة للمؤسسة الثقافية الإسلامية بجنيف، انشئت سنة 1978، ومنذ ذلك تعمل بالتعاون مع جميع عناصر العملية (الطاقم الإداري والتربوي والتلاميذ والاولياء) في بيئة آمنة من اجل دعم أبناء الجالية دينيا وتربويا وعقليا وخُلقيا ولغويا ومهارايا؛ وغيرهم من الجاليات غير المسلمة فيما يتعلق باللغة العربية من خلال فريق مؤهل إداريا وتربويا ومعرفيا وفق المعايير المعمول بها في التعليم، في بيئة تتسم بالتعاون والحيوية والتفاعل.
          </p>
        </div>
        <div class="col-lg-3 mt-2 mt-lg-5 justify-content-center align-items-center ">
          <h3 class="mt-2 mt-lg-5">الإختصارات</h3>
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="item in listItem">
              <router-link :to="item.link" class="nav-link active fw-bold" aria-current="page">{{$t(item.name)}}</router-link>
            </li>


          </ul>
        </div>
        <div class="col-lg-3 mt-2 mt-lg-5">
          <h3 class="mt-2 mt-lg-5">تواصلوا معنا</h3>


          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">


            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="tel:+(41) 799 653 711">
                <i class="fa-duotone fa-phone-alt"></i>
                <span>+(41) 799 653 711</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://rb.gy/2ua5cv">
                <i class="fa-duotone fa-location-check"></i>
                Chemin Colladon 1209 Genève
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="mailto:info@fcigeneve.ch" >
                <i class="fa-duotone fa-mailbox"></i>
                Madrassa@fcigeneve.ch
              </a>
            </li>

          </ul>
        </div>


      </div>


      <img src="/logo.svg" alt="" class="img-fluid text-center text-lg-start" style="width: 150px">
      <p class="text-lg-start text-center mt-2 mt-lg-3">كل الحقوق محفوظة مدرسة جنيف العربية &copy; 2023</p>

    </div>

  </footer>

  <!--    End Footer  -->

</template>

<style scoped>
  .waves {
    margin-bottom: -50px;
  }
</style>