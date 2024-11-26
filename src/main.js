import './assets/style.css'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(PrimeVue, {
    theme: 'none',
  })
  .mount('#app')
