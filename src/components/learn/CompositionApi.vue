<script setup>
const name = 'Balitower Balifiber'
const styleH1 = 'text-4xl font-semibold'
const btnDisabled = true
const btnAttr = {
  disabled: false,
  type: 'button',
  class: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30',
}

const showName = () => console.log(name)
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <h1 :class="styleH1">{{ name }}</h1>
    <div class="grid grid-cols-1 gap-3">
      <button
        :disabled="btnDisabled"
        @click="showName"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        Show Name Composition Api 1
      </button>
      <button @click="showName" v-bind="btnAttr">Show Name Composition Api 2</button>
    </div>
  </div>
</template>
