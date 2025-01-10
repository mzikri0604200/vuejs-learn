<script setup>
import { ref } from 'vue'
const count = ref(0)
const count2 = ref(0)

const increment = (counter) => {
  count2.value = count2.value + counter
}
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="grid grid-cols-1 gap-3">
      <button
        @click="count++"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        {{ count }}
      </button>

      <button
        @click="increment(5)"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        {{ count2 }}
      </button>
    </div>
  </div>
</template>
