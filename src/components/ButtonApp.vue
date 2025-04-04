<script setup>
import MyButton from './MyButton.vue';
import Container from './Container.vue';

const clickHandler = () => {
  alert('Button clicked!');
};
</script>

<template>
  <Container>
    <template #header="counter">
      <h1>Header {{ counter.counter }}</h1>
    </template>

    <template v-slot:default="getdata">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa placeat? Optio distinctio dolorum aperiam tempora, amet eligendi exercitationem atque?</p>
      <MyButton class="button" @click="clickHandler" :name="getdata.counter">Click Me!</MyButton>
    </template>

    <template #footer></template>
  </Container>
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
