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
import FormHandling from './components/learn/FormHandling.vue'
import SlotButton from './components/learn/SlotsCard.vue'
import SlotsCard from './components/learn/SlotsCard.vue'
import ProvideInject from './components/learn/ProvideInject.vue'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional

import { provide, ref } from 'vue'
var val_provide = ref('Provide and Inject With Vue 2')

const updateVal_provide = () => {
  val_provide.value = 'Update Provide and Inject With Vue 3'
}

provide('key_provide', { val_provide, updateVal_provide })
</script>

<template>
  <NavbarTop />
  <!-- <HeroSection /> -->
  <!-- <DataTable1 /> -->
  <!-- <MainForm /> -->
  <!-- <OptionsApi /> -->
  <!-- <CompositionApi /> -->
  <!-- <RefReactive /> -->

  <!-- <MainButton :title="greeting" /> -->
  <!-- <MainButton :title="`Submit`" :disabled="true" /> -->
  <!-- <MainButton /> -->

  <!-- <ComputedProperties /> -->
  <!-- <ConditionalRe /> -->
  <!-- <ListRendering /> -->
  <!-- <EventHandling /> -->
  <GetAPIpublic />
  <!-- <FormHandling /> -->
  <!-- <SlotsCard>
    <template #image>
      <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </template>
    <template #title="{ since }">Noteworthy technology acquisitions {{ since }} </template>
    <template #body>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
      chronological order.
    </template>
    <span>Read Me</span>
  </SlotsCard> -->
  <!-- <ProvideInject /> -->
</template>
