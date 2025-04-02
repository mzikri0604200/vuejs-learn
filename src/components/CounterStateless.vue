<script setup>
const { name, counter, increment } = defineProps({
  name: String,
  counter: Number,
  increment: Number,
});
const emits = defineEmits(['teken']);

const buttonClick = () => {
  emits('teken', increment);
};
</script>

<template>
  <h1>Counter {{ name }} : {{ counter }}</h1>
  <button @click="buttonClick">Increment {{ name }}</button>
</template>

<style></style>
