<script setup>
import MainForm from './components/MainForm.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarTop from './components/NavbarTop.vue'
import DataTable1 from './components/DataTable.vue'
import 'primeicons/primeicons.css'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional
const greeting = 'Hello World'
</script>

<template>
  <NavbarTop />
  <!-- <HeroSection /> -->
  <!-- <DataTable1 /> -->
  <!-- <MainForm /> -->
  <OptionsApi />
  <CompositionApi />
</template>
