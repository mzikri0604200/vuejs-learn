<script setup>
import { reactive, ref, computed, onMounted, toRaw } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import IconViewv1 from '../icons/IconViewv1.vue'
import IconDeletev1 from '../icons/IconDeletev1.vue'
import IconDollar from '../icons/IconDollar.vue'
import IconUpdatev1 from '../icons/IconUpdatev1.vue'
import IconClose from '../icons/IconClose.vue'
import MainButton from './MainButton.vue'
import IconLink from '../icons/IconLink.vue'

const loading = ref(false)
const isupdate = ref(false)
const selectedItem = ref(null)

const products = ref(null)
const categories = ref([])

const formData = reactive({
  title: '',
  price: '',
  description: '',
  image: '',
  category: '',
})

const idUpdate = ref('')

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

const getCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    categories.value = data
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

onMounted(() => {
  getUser()
  getCategories()
})

const isModalOpen = ref(false)

const viewUser = (user) => {
  isModalOpen.value = true
  selectedItem.value = user
}

const clearInput = () => {
  for (const key in formData) {
    formData[key] = ''
  }
  idUpdate.value = ''
  isupdate.value = false
}

const closeModal = () => {
  clearInput()
  isModalOpen.value = false
}

const createData = async (data) => {
  // Kirim data ke server untuk membuat data baru
  if (condition) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${idUpdate.value}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      const index = products.value.findIndex((item) => item.id === idUpdate.value)
      products.value[index] = data
      clearInput()
    } catch (error) {
      console.error('Terjadi kesalahan:', error)
    }
  } else {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newProduct = await response.json()
        products.value.unshift(newProduct)
        closeModal()
      } else {
        console.error('Error creating data:', response.status)
      }
    } catch (error) {
      console.error('Error creating data:', error)
    }
  }
}

const UpdateData = async (list) => {
  formData.title = list.title
  formData.price = list.price
  formData.image = list.image
  formData.category = list.category
  formData.description = list.description
  isupdate.value = true
  isModalOpen.value = true
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
          <h2 class="text-lg font-semibold">Add User</h2>
          <form @submit.prevent="createData" class="grid grid-cols-1 gap-3 mt-4">
            <div class="relative z-0 w-full group">
              <label
                for="title"
                class="block mb-1 text-xs peer-focus:font-medium text-gray-600 dark:text-white"
                >Title</label
              >
              <input
                type="text"
                v-model="formData.title"
                id="title"
                class="shadow-xs border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>
            <div class="relative z-0 w-full group">
              <label for="image" class="block mb-1 text-xs text-gray-500 dark:text-white"
                >URL Image</label
              >
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-gray-600 bg-slate-100 border border-e-0 border-gray-300 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                >
                  <IconLink />
                </span>
                <input
                  v-model="formData.image"
                  type="text"
                  id="image"
                  class="rounded-none rounded-e-sm focus:outline-none border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div class="relative z-0 w-full group">
              <label for="price" class="block mb-1 text-xs text-gray-500 dark:text-white"
                >Price</label
              >
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-gray-600 bg-slate-100 border border-e-0 border-gray-300 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                >
                  <IconDollar />
                </span>
                <input
                  v-model.number="formData.price"
                  type="text"
                  id="price"
                  class="rounded-none rounded-e-sm focus:outline-none border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div class="relative z-0 w-full group">
              <label for="category" class="block mb-1 text-xs text-gray-500 dark:text-white"
                >Select your category</label
              >
              <select
                v-model="formData.category"
                id="category"
                class="border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" selected>Pilih Kategori</option>
                <option v-for="category in categories" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
            <div class="relative z-0 w-full group">
              <label
                for="description"
                class="block mb-1 text-xs peer-focus:font-medium text-gray-600 dark:text-white"
                >Description</label
              >
              <textarea
                id="description"
                v-model="formData.description"
                rows="4"
                class="block p-2.5 w-full text-sm focus:outline-none text-gray-900 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              :class="
                isupdate
                  ? 'bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300'
                  : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              "
              class="text-white font-bold p-2 text-xs rounded"
            >
              {{ isupdate ? 'Update' : 'Submit' }}
            </button>
          </form>
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
      <Column field="price" header="Price">
        <template #body="slotProps">
          <div>
            <p class="font-medium">${{ slotProps.data.price }}</p>
          </div>
        </template>
      </Column>
      <Column field="description" header="Description"></Column>
      <Column field="category" header="Category" bodyClass="text-nowrap"></Column>
      <Column header="Actions" bodyClass="text-nowrap">
        <template #body="slotProps">
          <div class="flex gap-1">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded text-xs"
              @click="UpdateData(slotProps.data)"
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
