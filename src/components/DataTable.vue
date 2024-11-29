<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import { ref, onMounted } from 'vue'

const listAPI = ref([])

onMounted(async () => {
  const response = await fetch('https://picsum.photos/v2/list')
  const data = await response.json()
  listAPI.value = data
})
</script>

<template>
  <section class="max-w-screen-xl mx-auto py-8 px-4">
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
          <IconField>
            <InputIcon class="pi pi-search" />
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
  </section>
</template>
