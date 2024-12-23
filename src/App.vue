<script setup>
import MainForm from './components/MainForm.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarTop from './components/NavbarTop.vue'
import DataTable1 from './components/DataTable.vue'
import 'primeicons/primeicons.css'
import MainButton from './components/learn/MainButton.vue'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional
const greeting = 'Hello World'
import { ref, reactive } from 'vue'

const user = reactive({ name: 'Balitower', age: 20 })

const count = ref(1)
function increment() {
  count.value++
}
</script>

<template>
  <NavbarTop />
  <!-- <HeroSection /> -->
  <!-- <DataTable1 /> -->
  <!-- <MainForm /> -->
  <!-- <OptionsApi /> -->
  <!-- <CompositionApi /> -->
  <MainButton :title="greeting" />
  <MainButton :title="`Submit`" :disabled="true" />
  <MainButton />
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button
      @click="increment"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
    >
      {{ count }}
    </button>

    <div>
      {{ user.name }}

      <button
        @click="user.age++"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        {{ user.age }}
      </button>
    </div>
  </div>
</template>
