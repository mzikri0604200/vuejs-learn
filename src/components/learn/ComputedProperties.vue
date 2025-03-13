<script setup>
import { reactive, ref, computed } from 'vue'

const author = reactive({
  firstName: 'John',
  lastName: 'Doe',
  books: ['Vue 3 Guide', 'Vue 2 Guide'],
})

const count = ref(0)
const increment = () => {
  count.value++
}

const fullName = () => {
  console.log('RUN')
  return author.books.length > 0 ? `${author.firstName} ${author.lastName}` : 'No books'
}

const fullName_computed = computed(() => {
  console.log('COMPUTED')
  return author.books.length > 0 ? `${author.firstName} ${author.lastName}` : 'No books'
})
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap gap-3 mx-auto p-4 flex-col">
    <p>Author: {{ fullName() }}</p>
    <p>Author: {{ fullName_computed }}</p>
    <div>
      <button
        @click="author.firstName = 'Jane'"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        Change Author
      </button>
    </div>
    <div>
      <button
        @click="increment"
        class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
      >
        {{ count }}
      </button>
    </div>
  </div>
</template>
<style scoped></style>
