<script setup>
import { ref, watch, watchEffect, onWatcherCleanup } from 'vue';
import ProductDetail from './ProductDetail.vue';

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
//   { immediate: true } watch langsung mengeksekusi saat pertama kali, ketika load data awal tanpa ada bantuan trigger dari user
//   { once: true } watch hanya mengeksekusi sekali saja, tidak peduli ada perubahan atau tidak
// );

// watchEffect secara otomatis mengeksekusi setiap kali ada perubahan pada data dan bersifat immediate true
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
    <ProductDetail :id="product.id" :name="product.name" :price="product.price" />

    <!-- <h2>Id : {{ product.id }}</h2>
    <h2>Name : {{ product.name }}</h2>
    <p>Price : {{ product.price }}</p> -->
  </div>
</template>

<style></style>
