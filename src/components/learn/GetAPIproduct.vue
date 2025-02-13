<script setup>
import { reactive, ref, computed, onMounted, toRaw } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import IconViewv1 from '../icons/IconViewv1.vue'
import IconDeletev1 from '../icons/IconDeletev1.vue'
import IconUpdatev1 from '../icons/IconUpdatev1.vue'
import IconClose from '../icons/IconClose.vue'
import MainButton from './MainButton.vue'

const loading = ref(false)
const selectedItem = ref(null)

const products = ref(null)

const formData = reactive({
  name: '',
})

const getUser = async () => {
  loading.value = true
  try {
    const url = new URL('https://fakestoreapi.com/products')
    const response = await fetch(url)
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getUser()
})

const isModalOpen = ref(false)

const viewUser = (user) => {
  isModalOpen.value = true
  selectedItem.value = user
}

const closeModal = () => {
  isModalOpen.value = false
}

const createData = async (data) => {
  // Kirim data ke server untuk membuat data baru
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      const newProduct = await response.json()
      console.log(newProduct)

      users.value.push(newProduct)
      // Handle success (e.g., update rows, close modal)
      // getUser()
    } else {
      // Handle error (e.g., display error message)
      console.error('Error creating data:', response.status)
    }
  } catch (error) {
    console.error('Error creating data:', error)
  }
}
</script>
<template>
  <div class="max-w-screen-xl grid mx-auto p-4">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-500"
      @click="closeModal"
    ></div>

    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <h2 class="text-lg font-semibold text-center">Detail User</h2>
          <ul class="flex flex-col my-3">
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Name</span>
                <span>:</span>
                <span class="grow">{{ selectedItem.name }}</span>
              </div>
            </li>
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Email</span>
                <span>:</span>
                <span class="grow">{{ selectedItem.email }}</span>
              </div>
            </li>
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Phone</span>
                <span>:</span>
                <span class="grow">{{ selectedItem.phone }}</span>
              </div>
            </li>
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Username</span>
                <span>:</span>
                <span class="grow">{{ selectedItem.username }}</span>
              </div>
            </li>
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Company Name</span>
                <span>:</span>
                <span class="grow">{{ selectedItem.company?.name }}</span>
              </div>
            </li>
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Website</span>
                <span>:</span>
                <span class="grow">{{ selectedItem.website }}</span>
              </div>
            </li>
            <li
              class="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
              <div class="flex flex-row gap-2 w-full">
                <span class="basis-1/3">Street Address</span>
                <span>:</span>
                <span class="grow">
                  {{ selectedItem.address?.suite }}, {{ selectedItem.address?.street }},
                  {{ selectedItem.address?.city }}
                  <span v-if="selectedItem.address?.zipcode" class="block">
                    {{ selectedItem.address?.zipcode }}
                  </span>
                </span>
              </div>
            </li>
          </ul>
          <div class="absolute -right-3 -top-3">
            <button
              @click="closeModal"
              class="bg-red-500 text-white p-1.5 rounded hover:bg-red-600 transition duration-200"
            >
              <IconClose />
            </button>
          </div>
        </div>
      </div>
    </transition>

    <div class="flex gap-4 mb-4">
      <MainButton :title="`Add User`" @click="viewUser" />

      <form @submit.prevent="createData" class="flex gap-2 items-center">
        <div class="relative z-0 w-full group">
          <input
            type="text"
            id="nameObject"
            v-model="formData.name"
            placeholder=""
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            for="nameObject"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name</label
          >
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
        >
          Submit
        </button>
      </form>
    </div>

    <DataTable
      :value="products"
      paginator
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      stripedRows
    >
      <Column field="id" header="Code" headerClass="text-center" bodyClass="text-center"></Column>
      <Column field="image" header="Images">
        <template #body="slotProps">
          <img :src="`${slotProps.data.image}`" :alt="slotProps.data.title" class="w-32" />
        </template>
      </Column>
      <Column field="title" header="Title"></Column>
      <Column field="price" header="Price"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="category" header="Category" bodyClass="text-nowrap"></Column>
      <Column header="Actions" bodyClass="text-nowrap">
        <template #body="slotProps">
          <div class="flex gap-1">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded text-xs"
              @click="editProduct(slotProps.data)"
            >
              <IconUpdatev1 />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-2 border border-red-500 hover:border-transparent rounded text-xs"
              @click="deleteProduct(slotProps.data.id)"
            >
              <IconDeletev1 />
            </button>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
