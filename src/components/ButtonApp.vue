<script setup>
import MyButton from './MyButton.vue';

const clickHandler = () => {
  alert('Button clicked!');
};
</script>

<template>
  <MyButton class="button" @click="clickHandler" name="bali" contoh="tower" />
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
