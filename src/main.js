import '@bhplugin/vue3-datatable/dist/style.css'
import './assets/style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'

import OptionsApiC from './components/learn/OptionsApi.vue'
import CompositionApiC from './components/learn/CompositionApi.vue'

import ToggleSwitch from 'primevue/toggleswitch'
const app = createApp(App)

app
  .component('OptionsApi', OptionsApiC)
  .component('CompositionApi', CompositionApiC)
  .component('ToggleSwitch', ToggleSwitch)

app.use(PrimeVue, {
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
app.mount('#app')
