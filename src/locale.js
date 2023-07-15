import {createI18n} from "vue-i18n";
import fr from './locales/fr.json';
import ar from './locales/ar.json';
export const languages = createI18n({
    locale: localStorage.getItem('locale') || 'ar',
    messages: {
        ar,fr
    }
})