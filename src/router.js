import {createRouter,createWebHistory} from "vue-router";
import Home from "@/components/Home.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Faq from "@/components/Faq.vue";
import Activities from "@/components/Activities.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'gallery',
        path: '/gallery',
        component: Gallery
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'faq',
        path: '/faq',
        component: Faq
    },
    {
        name: 'activities',
        path: '/activities',
        component: Activities
    },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: function (to, from, savedPosition) {
        return { top: 0 }
    }
})
