<script setup>
import { ref, reactive } from 'vue'
const user = reactive({ name: 'Balitower', age: 20 })

const count = ref(1)
function increment() {
  count.value++
}
// setTimeout(() => {
//   count.value = 2
// }, 1000)

// let count = 1
// function increment() {
//   count++
// }
</script>

<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button
      @click="increment"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
    >
      {{ count }}
    </button>

    <div>
      {{ user.name }}

      <button
        @click="user.age++"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        {{ user.age }}
      </button>
    </div>
  </div>
</template>
