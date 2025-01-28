<script setup>
import { ref } from 'vue'
const nama = ref()
const desc = ref()
const checked = ref([])
const checkedR = ref()
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 gap-3">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
      <div class="p-4 bg-gray-100 rounded shadow w-full">
        <h1 class="text-xl font-bold">Input Text</h1>
        <p class="my-3">Value : {{ nama }}</p>
        <div class="flex justify-between gap-2 items-center flex-row mb-3">
          <label for="">Un V-Model</label>
          <input
            type="text"
            :value="nama"
            @input="(event) => (nama = event.target.value)"
            class="border border-gray-300 p-2 rounded"
          />
        </div>
        <div class="flex justify-between gap-2 items-center flex-row">
          <label for="">V-Model</label>
          <input v-model="nama" class="border border-gray-300 p-2 rounded" />
        </div>
      </div>
      <div class="p-4 bg-gray-100 rounded shadow w-full">
        <h1 class="text-xl font-bold">Textarea</h1>
        <p class="my-3 whitespace-pre-line">Value : {{ desc }}</p>
        <div class="flex justify-between gap-2 items-center flex-row">
          <label for="">V-Model</label>
          <textarea v-model="desc" class="border border-gray-300 p-2 rounded"></textarea>
        </div>
      </div>
      <div class="p-4 bg-gray-100 rounded shadow w-full">
        <h1 class="text-xl font-bold">Checkbox</h1>
        <ul
          class="items-center w-full my-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div class="flex items-center ps-3">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                v-model="checked"
                value="Vue JS"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Vue JS</label
              >
            </div>
          </li>
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div class="flex items-center ps-3">
              <input
                id="react-checkbox-list"
                type="checkbox"
                v-model="checked"
                value="React"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="react-checkbox-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >React</label
              >
            </div>
          </li>
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div class="flex items-center ps-3">
              <input
                id="angular-checkbox-list"
                type="checkbox"
                v-model="checked"
                value="Angular"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Angular</label
              >
            </div>
          </li>
          <li class="w-full dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input
                id="laravel-checkbox-list"
                type="checkbox"
                v-model="checked"
                value="Laravel"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="laravel-checkbox-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Laravel</label
              >
            </div>
          </li>
        </ul>

        <ol class="list-inside list-decimal">
          <li v-for="(item, index) in checked" :key="index">{{ item }}</li>
        </ol>
      </div>
      <div class="p-4 bg-gray-100 rounded shadow w-full">
        <h1 class="text-xl font-bold">Radio</h1>
        <p class="my-3">Value : {{ checkedR }}</p>
        <ul
          class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div class="flex items-center ps-3">
              <input
                id="vue-radio-list"
                type="radio"
                v-model="checkedR"
                value="Vue JS"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-radio-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Vue JS</label
              >
            </div>
          </li>
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div class="flex items-center ps-3">
              <input
                id="react-radio-list"
                type="radio"
                v-model="checkedR"
                value="React"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="react-radio-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >React</label
              >
            </div>
          </li>
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div class="flex items-center ps-3">
              <input
                id="angular-radio-list"
                type="radio"
                v-model="checkedR"
                value="Angular"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-radio-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Angular</label
              >
            </div>
          </li>
          <li class="w-full dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input
                id="laravel-radio-list"
                type="radio"
                v-model="checkedR"
                value="Laravel"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="laravel-radio-list"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Laravel</label
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
