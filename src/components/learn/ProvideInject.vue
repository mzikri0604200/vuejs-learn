<script setup>
import { inject } from 'vue'

const { val_provide, updateVal_provide } = inject('key_provide')
const styleH1 = 'text-xl font-semibold mb-3'
const btnAttr = {
  disabled: false,
  type: 'button',
  class:
    'bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded disabled:opacity-30',
}
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <h1 :class="styleH1">{{ val_provide }}</h1>

    <div class="grid grid-cols-1 gap-3">
      <button @click="updateVal_provide" v-bind="btnAttr">Update Value Provide</button>
    </div>
  </div>
</template>
