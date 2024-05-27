import i18n, { t } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'en',
        returnObjects: true,
        resources: {
            en: {
                translation: {
                    greeting: 'Hello, World!',
                    desc: {
                        text1: 'The quick brown fox jumps over the lazy dog',
                        text2: 'The sun rises in the east and sets in the west'
                    }
                }
            },
            de: {
                translation: {
                    greeting: 'Hallo, Welt!',
                    desc: {
                        text1: 'Der schnelle braune Fuchs springt über den faulen Hund',
                        text2: 'Die Sonne geht im Osten auf und im Westen unter'
                    }
                }
            },
            hi: {
                translation: {
                    greeting: 'नमस्ते, दुनिया!',
                    desc: {
                        text1: 'तेज काला लोमड़ी आलसी कुत्ते पर कूदता है',
                        text2: 'सूर्य पूर्व में उगता है और पश्चिम में अस्त होता है'
                    }
                }
            }
        }
    })