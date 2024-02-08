import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from '@/translation/default.json'
import { fr } from '@/translation/default.fr.json'

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en,
            fr,
        },
        lng: 'en', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    })

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
