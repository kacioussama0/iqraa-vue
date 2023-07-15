import "./assets/css/bootstrap.rtl.css";
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/css/fontawesome/css/all.min.css";
import "./assets/css/fontawesome/js/all.min.js";


import { createApp } from 'vue'
import {languages} from "@/locale";
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue';
import {router} from "@/router.js";


const app = createApp(App);
app.use(router)
app.use(plugin, defaultConfig({
    config: {
        classes: {
            input: 'form-control'
        }
    }
}))
app.use(languages)
app.mount('#app')
