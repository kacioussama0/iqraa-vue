<template>


    <up-bar/>

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

export  default  {
  components: {UpBar, Footer, NavBar},
}
</script>


<style>

/* Start Global Rules */

@font-face {
  font-family: ExpoArabic;
  src: url('assets/fonts/ExpoArabic-Book.ttf');
}

body {
  font-family: 'ExpoArabic', sans-serif !important;

}

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

.jump {
  animation: jump 0.8s  alternate-reverse infinite ;
}

/* End Global Rules */

</style>
