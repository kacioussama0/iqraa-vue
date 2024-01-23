<script>
import {Collapse} from "bootstrap";

export default  {
  data() {
    return {
      listItem: [
        {
          name: 'Home',
          link: '/'
        },

        {
          name: 'Our School',
          link: '/who-we-are'
        },

        {
          name: 'Gallery',
          link: '/gallery'
        },

        {
          name: 'Activities',
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
  methods: {
    changeLocal(lang) {
      if(lang != 'ar') document.dir = 'ltr'
      else document.dir = 'rtl'
      this.$i18n.locale = lang
      localStorage.setItem('locale',lang);
    },
    isActive(path) {
      return (this.$route.path == path) ? 'active' : ''
    },
    hideMenu() {

      if(window.innerWidth <= 991) {
        const navBar = document.querySelector('#navbarSupportedContent');
        const collapse = new Collapse(navBar);
        collapse.hide();
      }
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
  }
}
</script>

<template>

  <!--        Start Navbar    -->

  <nav class="navbar navbar-expand-lg shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bolder" to="/" >
        <img src="/logo.svg" alt="" style="width: 80px">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-duotone fa-bars text-primary fa-2x"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li :class="`nav-item  ${isActive(item.link)}`" @click="hideMenu" v-for="item in listItem" >
            <router-link :to="item.link" :class="`nav-link fw-bold`"  aria-current="page">{{$t(item.name)}}</router-link>
          </li>
        </ul>

        <!--        Start Social Media    -->

        <div class="social-media d-lg-flex d-none">
          <a class="nav-link active fw-bold fi fi-sa me-2"  v-if="locale === 'fr'"  @click="changeLocal('ar')"></a>
          <a class="nav-link active fw-bold fi fi-ch me-2" v-else @click="changeLocal('fr')"></a>
          <a href="#" class="bg-light me-2 text-decoration-none"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="bg-light me-2 text-decoration-none"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="bg-light me-2 text-decoration-none"><i class="fa-brands fa-youtube"></i></a>
        </div>

        <!--        End Social Media    -->

      </div>
    </div>
  </nav>

  <!--        End Navbar    -->


</template>

<style scoped>

@import "flag-icons/css/flag-icons.css";

/* Start Header */

nav ul li {
  position: relative;
}

nav ul li::before, nav ul li.active::before {
  content: '';
  width: 80%;
  height: 4px;
  background: var(--bs-warning);
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.7s;
  opacity: 0;
}

nav ul li a {
  transition: 0.4s;
}


nav ul li:hover::before , nav ul li.active::before{
  opacity: 1;
}

.active {
  font-weight: 500;
}

nav div.social-media a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
}


@media (max-width: 991px) {
  nav ul li::before {
    display: none !important;
  }
}

/* End NavBar */


.navbar-toggler {
  border: none !important;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width) var(--bs-primary);
}

li.active a {
  color: var(--bs-primary) !important;
}

</style>