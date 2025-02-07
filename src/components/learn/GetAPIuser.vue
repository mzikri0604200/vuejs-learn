<script setup>
import { reactive, ref, computed, onMounted, toRaw } from 'vue'
import Vue3Datatable from '@bhplugin/vue3-datatable'

import IconUpdatev1 from '../icons/IconUpdatev1.vue'
import IconDeletev1 from '../icons/IconDeletev1.vue'
// import '@bhplugin/vue3-datatable/dist/style.css'

const loading = ref(false)
const total_rows = ref(0)
const params = reactive({ current_page: 1, pagesize: 10 })
const rows = ref(null)

const cols =
  ref([
    { field: 'id', title: 'ID', isUnique: true, type: 'number', filter: false },
    { field: 'username', title: 'Username' },
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
    { field: 'phone', title: 'Phone', type: 'number' },
    { field: 'address.city', title: 'City' },
    { field: 'website', title: 'Website' },
    { field: 'actions', title: 'Actions' },
  ]) || []

const getUser = async () => {
  loading.value = true
  try {
    const url = new URL('https://jsonplaceholder.typicode.com/users')
    url.searchParams.append('page', params.current_page) // Halaman aktif
    url.searchParams.append('_limit', params.pagesize) // Jumlah item per halaman
    const response = await fetch(url)
    const data = await response.json()

    const totalCount = response.headers.get('X-Total-Count')
    total_rows.value = parseInt(totalCount)

    rows.value = data
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  getUser()
})

const changeServer = (data) => {
  params.current_page = data.current_page
  params.pagesize = data.pagesize
  getUser()
}
</script>
<template>
  <div class="max-w-screen-xl grid mx-auto p-4">
    <vue3-datatable
      :rows="rows"
      :columns="cols"
      :loading="loading"
      :totalRows="total_rows"
      :isServerMode="true"
      :showPageSize="false"
      :showNumbersCount="3"
      @change="changeServer"
    >
      <template #actions="data">
        <div class="flex gap-4">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded text-xs"
            @click="viewUser(data.value)"
          >
            <IconUpdatev1 />
          </button>
          <button
            type="button"
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-2 border border-red-500 hover:border-transparent rounded text-xs"
            @click="deleteUser(data.value)"
          >
            <IconDeletev1 />
          </button>
        </div>
      </template>
    </vue3-datatable>
  </div>
</template>
