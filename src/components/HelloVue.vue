<script setup>
console.info('Hello Vue');

const data = {
  id: 'hello',
  class: 'hello',
  message: '<h4 style="color:white;">Hello Message</h4>',
};
const btnDisabled = false;
</script>

<template>
  <h1 v-bind="data">{{ data.message }}</h1>
  <div :class="data.class" v-html="data.message.toUpperCase()"></div>
  <button :disabled="btnDisabled">{{ data.class }}</button>
</template>

<style>
.hello {
  color: rgb(130, 255, 249);
}

body {
  background-color: black;
}
</style>
