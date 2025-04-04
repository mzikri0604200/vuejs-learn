<script setup>
import { ref, useSlots } from 'vue';

const slots = useSlots();

const counter = ref(0);
</script>

<template>
  <div v-if="slots.header">
    <slot name="header" :counter="counter">
      <h1>Default Header</h1>
    </slot>
  </div>
  <div v-if="slots.default">
    <slot name="default" :counter="counter">
      <h5>Anda belum mengisi content</h5>
    </slot>
  </div>
  <div v-if="slots.footer">
    <slot name="footer" :counter="counter">
      <p>Default Footer</p>
    </slot>
  </div>
  <div>
    <button @click="counter++">Increment Counter</button>
  </div>
</template>

<style>
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>
