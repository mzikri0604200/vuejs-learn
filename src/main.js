import './assets/style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(PrimeVue, {
    // theme: 'none',
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        // darkModeSelector: 'system',
        // darkModeSelector: '.my-app-dark',
        // darkModeSelector: false,
        darkModeSelector: '.dark',
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities',
        },
      },
    },
  })
  .mount('#app')
