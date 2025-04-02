<script setup>
import { ref } from 'vue';
import CounterStateless from './CounterStateless.vue';

const counter = ref(0);

const incrementCounter = (increment) => {
  counter.value += increment;
};
</script>

<template>
  <CounterStateless name="Bali" :counter="counter" :increment="1" @teken="incrementCounter" />
  <CounterStateless name="Tower" :counter="counter" :increment="2" @teken="incrementCounter" />

  <div style="margin-top: 20px; background-color: aquamarine; padding: 20px">
    <button @click="counter++">Increment Counter</button>
  </div>
</template>

<style></style>
