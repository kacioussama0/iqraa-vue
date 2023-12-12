import "./assets/css/bootstrap.rtl.min.css";
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/css/fontawesome/css/all.min.css";
import VueNextProgressbar from '@jambonn/vue-next-progressbar';
import "./assets/css/fontawesome/js/all.min.js";
import '@jambonn/vue-next-progressbar/lib/vue-next-progressbar.min.css';
import { createApp } from 'vue'
import {languages} from "@/locale";
import App from './App.vue';
import {router} from "@/router.js";


const app = createApp(App);

app.use(router)
app.use(languages)
app.mount('#app')
app.use(VueNextProgressbar, { router: true });