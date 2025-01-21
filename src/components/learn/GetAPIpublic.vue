<script setup>
import { reactive, ref, computed, onMounted } from 'vue'

const lists = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const response = await fetch('http://openlibrary.org/people/george08/lists.json')
    const data = await response.json()
    lists.value = data.entries
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap gap-3 mx-auto p-4 flex-col">
    <div v-if="loading" class="text-center">Loading...</div>
    <ul v-else class="list-disc">
      <li v-for="list in lists" :key="list.key">
        {{ list.name }}
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
