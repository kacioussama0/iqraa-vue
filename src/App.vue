<template>


<!--    <up-bar/>-->

  <!--    Start Header    -->
  <header >
    <nav-bar />
  </header>
  <!--        End Header    -->

  <!--  Start Main  -->

  <main>
      <router-view/>
  </main>

  <!--  End Main  -->

  <Footer/>

</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import UpBar from "@/components/UpBar.vue";
import {VueProgressbar} from "@jambonn/vue-next-progressbar";
export  default  {
  components: {UpBar, Footer, NavBar},
  mounted() {
    VueProgressbar.done()
  },
}
</script>


<style>

/* Start Global Rules */

@font-face {
  font-family: ExpoArabic;
  src: url('assets/fonts/ExpoArabic-Book.ttf');
}

body {
  //font-family: 'ExpoArabic', sans-serif !important;
  font-family: 'Noto Kufi Arabic', sans-serif;
}

@media screen and (min-width: 992px) {
  .heading-shape {
    position: relative;
  }

  .heading-shape::before {
    content: '';
    width: 0%;
    height: 40%;
    border-radius: 10px;
    background-color: var(--bs-primary);
    opacity: 0.4;
    position: absolute;
    top: 50%;
    z-index: -1;
    animation: fill 2s  alternate infinite ;
  }

  .jump {
    animation: jump 0.8s  alternate-reverse infinite ;
  }
}

@keyframes fill {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

@keyframes jump {
  from {
    top: -20%;
  }

  to {
    top: -5%;
  }
}

.v-p-bar {
  background: var(--bs-primary) !important;
}

/* End Global Rules */

</style>
