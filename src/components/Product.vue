<script setup>
import { ref, watch, watchEffect, onWatcherCleanup } from 'vue';

// const productId = ref('');
const productId = ref('product1');
const product = ref(null);

// watch(
//   productId,
//   async (newVal, oldVal) => {
//     // if (newVal) {
//     //   const response = await fetch(`/${newVal}.json`);
//     //   product.value = await response.json();
//     // } else {
//     //   product.value = null;
//     // }
//     const response = await fetch(`/${newVal}.json`);
//     product.value = await response.json();
//   },
//   { immediate: true }
// );

watchEffect(async (newVal, oldVal) => {
  onWatcherCleanup(() => {
    console.log('cleanup');
  });

  console.log('call watch callback');
  const response = await fetch(`/${productId.value}.json`);
  product.value = await response.json();
});
</script>

<template>
  <label>
    Product ID:
    <select v-model="productId">
      <!-- <option value=""></option> -->
      <option value="product1">Product 1</option>
      <option value="product2">Product 2</option>
      <option value="product3">Product 3</option>
    </select>
  </label>
  <div v-if="product">
    <h2>Id : {{ product.id }}</h2>
    <h2>Name : {{ product.name }}</h2>
    <p>Price : {{ product.price }}</p>
  </div>
</template>

<style></style>
