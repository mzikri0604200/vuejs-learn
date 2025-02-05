<script setup>
import { reactive, ref, computed, onMounted } from 'vue'

const form = ref({
  name: '',
  data: {
    year: null,
    price: null,
    'CPU model': '',
    'Hard disk size': '',
    color: '',
  },
})

const lists = ref([])

const loading = ref(false)
const nameObject = ref('')
const isupdate = ref(false)
const idUpdate = ref('')

onMounted(async () => {
  loading.value = true
  try {
    const response = await fetch('https://api.restful-api.dev/objects')
    const data = await response.json()
    lists.value = data
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  } finally {
    loading.value = false
  }
})

const getLastId = () => {
  if (lists.value.length === 0) return 0 // Jika belum ada data, mulai dari 0
  return Math.max(...lists.value.map((item) => parseInt(item.id))) // Ambil ID terbesar
}

const clearInput = () => {
  form.value = {
    name: '',
    data: {
      year: '',
      price: '',
      'CPU model': '',
      'Hard disk size': '',
      color: '',
    },
  }

  // nameObject.value = ''
  idUpdate.value = ''
  isupdate.value = false
}

const lastId = getLastId() // Ambil ID terakhir
const newId = lastId + 1 // Buat ID baru

const onSubmit = async () => {
  if (isupdate.value === true) {
    try {
      const response = await fetch(`https://api.restful-api.dev/objects/${idUpdate.value}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.value.name,
          data: form.value.data,
        }),
      })
      const data = await response.json()
      const index = lists.value.findIndex((item) => item.id === idUpdate.value)
      lists.value[index] = data
      clearInput()
    } catch (error) {
      console.error('Terjadi kesalahan:', error)
    }
  } else {
    try {
      const response = await fetch('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: newId.toString(),
          name: form.value.name,
          data: form.value.data,
        }),
      })
      const data = await response.json()
      lists.value.unshift(data)
      // lists.value.push(data)
      clearInput()
    } catch (error) {
      console.error('Terjadi kesalahan:', error)
    }
  }
}

const UpdateData = async (list) => {
  form.value.name = list.name
  form.value.data.year = list.data.year
  form.value.data['Hard disk size'] = list.data['Hard disk size']
  form.value.id = list.id
  idUpdate.value = list.id
  isupdate.value = true
}

const deleteData = async (id) => {
  try {
    const response = await fetch(`https://api.restful-api.dev/objects/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      console.log('OK')
      lists.value = lists.value.filter((item) => item.id !== id)
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  }
}

// const sortBy = ref('id')
const sortedItems = computed(() => {
  return [...lists.value].sort((a, b) => {
    return b.id - a.id
  })
})
</script>
<template>
  <div class="max-w-screen-xl grid mx-auto p-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
    <div class="md:col-span-2">
      <div v-if="loading" class="text-center">Loading...</div>
      <ol v-else class="list-decimal list-inside grid lg:grid-cols-2 gap-x-10 gap-y-2">
        <li
          class="flex items-center justify-between"
          v-for="(list, index) in sortedItems"
          :key="list.id"
        >
          <div>
            <span>{{ list.name }}</span>
            <ul class="list-disc list-inside">
              <li v-if="list.data?.color">Warna: {{ list.data.color }}</li>
              <li v-if="list.data?.price">Price: ${{ list.data.price }}</li>
              <li v-if="list.data?.year">Tahun: {{ list.data.year }}</li>
              <li v-if="list.data?.Capacity">Kapasitas: {{ list.data.Capacity }}</li>
              <li v-if="list.data?.generation">Generasi: {{ list.data.generation }}</li>
              <li v-if="list.data?.['CPU model']">CPU: {{ list.data['CPU model'] }}</li>
              <li v-if="list.data?.['Hard disk size']">HDD: {{ list.data['Hard disk size'] }}</li>
            </ul>
          </div>
          <div class="flex gap-2">
            <button
              @click="UpdateData(list)"
              class="py-2 px-2 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-md hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                />
              </svg>
            </button>
            <button
              @click="deleteData(list.id)"
              type="button"
              class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-xs px-2 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                />
              </svg>
            </button>
          </div>
        </li>
      </ol>
    </div>

    <div>
      <form @submit.prevent="onSubmit">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="nameObject"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            v-model="form.name"
          />
          <label
            for="nameObject"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name Object</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="thnObj"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            v-model.number="form.data.year"
          />
          <label
            for="thnObj"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Tahun</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="hddObj"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            v-model="form.data['Hard disk size']"
          />
          <label
            for="hddObj"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >HDD</label
          >
        </div>
        <button
          type="submit"
          :disabled="form.name === ''"
          :class="
            isupdate
              ? 'bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300'
              : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          "
          class="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-30"
        >
          {{ isupdate ? 'Update' : 'Submit' }}
        </button>
        <button
          type="button"
          v-if="isupdate"
          @click="clearInput"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 md:ml-3 md:mt-0 mt-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>
