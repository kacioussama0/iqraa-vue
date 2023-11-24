import {createRouter,createWebHistory} from "vue-router";
import Home from "@/components/Home.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Faq from "@/components/Faq.vue";
import Activities from "@/components/Activities.vue";
import Post from "@/components/Post.vue";
import Photos from "@/components/Photos.vue";
import NotFound from "@/components/NotFound.vue";
import WhoWeAre from "@/components/WhoWeAre.vue";

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
        name: 'photos',
        path: '/gallery/:category',
        component: Photos
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
    {
        name: 'post',
        path: '/posts/:slug',
        component: Post
    },
    {
        path: '/404', name: 'NotFound', component: NotFound
    },
    {
        path: '/:catchAll(.*)', redirect:'404'
    },
    {
        name: 'who We Are',
        path: '/who-we-are',
        component: WhoWeAre
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: function (to, from, savedPosition) {
        return { top: 0 }
    }
})
