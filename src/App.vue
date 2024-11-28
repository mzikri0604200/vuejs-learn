<script setup>
import Form from './components/Form.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarTop from './components/NavbarTop.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional

import { ref, onMounted } from 'vue'

const listAPI = ref([])

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}

onMounted(async () => {
  const response = await fetch('https://picsum.photos/v2/list')
  const data = await response.json()
  listAPI.value = data
})
</script>

<template>
  <NavbarTop />
  <HeroSection />
  <Form />

  <div class="max-w-screen-xl mx-auto py-8 px-4">
    <DataTable
      :value="listAPI"
      paginator
      stripedRows
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      tableStyle="min-width: 50rem"
      paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="flex justify-between">
          <div class="flex gap-3">
            <Button label="Toggle Dark Mode" @click="toggleDarkMode" />
          </div>
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText placeholder="Search" />
          </IconField>
        </div>
      </template>
      <Column field="id" header="ID" />
      <Column field="author" header="Author" />
      <Column field="width" header="Width" />
      <Column field="height" header="Height" />
      <Column field="url" header="URL" />
      <Column field="download_url" header="Download URL" />
    </DataTable>
  </div>
</template>
