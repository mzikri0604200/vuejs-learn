<script setup>
import { reactive, ref, computed } from 'vue'

const showAuthor = ref(true)
const author = reactive({
  firstName: 'John',
  lastName: 'Doe',
  // books: ['Vue 3 Guide', 'Vue 2 Guide'],
  // books: ['Vue 3 Guide'],
  books: [],
})

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap gap-3 mx-auto p-4 flex-col">
    <h1 class="text-4xl font-semibold" v-if="showAuthor">
      <small class="text-xl">Show Author: </small> {{ author.firstName }}
    </h1>
    <h1 class="text-4xl font-semibold" v-show="count % 2 == 0">v-show {{ count }}</h1>
    <h1 class="text-4xl font-semibold">
      Length Books:
      <small v-if="author.books.length > 1" class="text-xl block my-2">Have more than Book</small>
      <small v-else-if="author.books.length === 1" class="text-xl block my-2">Have A Book</small>
      <small v-else class="text-xl block my-2">Dont Have A Book</small>
    </h1>
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
