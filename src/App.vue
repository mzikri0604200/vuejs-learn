<script setup>
import MainForm from './components/MainForm.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarTop from './components/NavbarTop.vue'
import DataTable1 from './components/DataTable.vue'
import 'primeicons/primeicons.css'
import MainButton from './components/learn/MainButton.vue'
import RefReactive from './components/learn/RefReactive.vue'
import ComputedProperties from './components/learn/ComputedProperties.vue'
import ConditionalRe from './components/learn/ConditionalRendering.vue'
import ListRendering from './components/learn/ListRendering.vue'
import EventHandling from './components/learn/EventHandling.vue'
import GetAPIpublic from './components/learn/GetAPIpublic.vue'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional
const greeting = 'Hello World'
</script>

<template>
  <NavbarTop />
  <!-- <HeroSection /> -->
  <!-- <DataTable1 /> -->
  <!-- <MainForm /> -->
  <!-- <OptionsApi /> -->
  <!-- <CompositionApi /> -->

  <!-- <MainButton :title="greeting" /> -->
  <!-- <MainButton :title="`Submit`" :disabled="true" /> -->
  <!-- <MainButton /> -->

  <!-- <ComputedProperties /> -->
  <!-- <ConditionalRe /> -->
  <!-- <ListRendering /> -->
  <!-- <EventHandling /> -->
  <GetAPIpublic />
</template>
