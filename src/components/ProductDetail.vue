<script setup>
const product = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    validator: (value, props) => {
      return value.trim().length !== 0;
    },
  },
  price: {
    type: Number,
    required: true,
    validator: (value, props) => {
      return value > 0;
    },
  },
});
</script>

<template>
  <div>
    <h1 id="title">Product</h1>
    <h2>Id : {{ product.id }}</h2>
    <h2>Name : {{ product.name }}</h2>
    <p>Price : {{ product.price }}</p>
  </div>
</template>
