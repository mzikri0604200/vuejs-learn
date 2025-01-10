<script setup>
import { reactive, ref, computed } from 'vue'
import MainButton from './MainButton.vue'

const author = reactive({
  firstName: 'John',
  books: [
    { judul: 'LaskarPelangi', penulis: 'AndreaHirata', tahunTerbit: 2005, reviews: [5, 3, 5] },
    { judul: 'BumiManusia', penulis: 'Pramoedya', tahunTerbit: 1980, reviews: [9, 7, 5] },
    { judul: 'FilosofiTeras', penulis: 'RyanHoliday', tahunTerbit: 2016, reviews: [4, 9, 1] },
    { judul: 'AtomicHabits', penulis: 'JamesClear', tahunTerbit: 2018, reviews: [7, 2, 4] },
    { judul: 'Dilan1990', penulis: 'PidiBaiq', tahunTerbit: 2014, reviews: [2, 4, 5] },
  ],
})

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap gap-3 mx-auto p-4 flex-col">
    <h2 class="text-2xl">Books</h2>
    <div class="mx-4">
      <ul class="list-disc">
        <!-- <li v-for="book in author.books" :key="book.judul">{{ book.judul }}</li> -->
        <!-- <li v-for="(book, index) in author.books" :key="`book-${index}`">{{ book.judul }}</li> -->
        <li v-for="({ judul, tahunTerbit, reviews }, index) in author.books" :key="index">
          {{ judul }} - {{ tahunTerbit }}
          <div>
            <span v-for="(review, rindex) in reviews" :key="rindex">{{ review }}</span>
          </div>
        </li>
      </ul>

      <ul class="list-disc my-4">
        <li v-for="(data, key, index) in author" :key="key">
          {{ index }} . {{ key }} : {{ data }}
        </li>
      </ul>

      <ul class="list-disc">
        <template v-for="(book, index) in author.books" :key="index">
          <!-- <li v-if="book.tahunTerbit > 2010">{{ book.judul }} - {{ book.penulis }}</li> -->
          <MainButton v-if="book.tahunTerbit > 2010" :title="book.judul" />
        </template>
      </ul>
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
