<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
const isChecked = ref(false)

const handleCheckboxChange12 = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <section>
    <div class="max-w-screen-xl mx-auto py-8 px-4">
      <h3 class="text-2xl font-medium leading-tight mb-4">Form Add Master</h3>
      <form class="">
        <div class="flex flex-row gap-4 w-100 mb-4">
          <div class="bg-white dark:bg-black rounded-lg basis-1/2">
            <div class="p-3 rounded-t-lg bg-[#F8FAFC] dark:bg-black border-b-2 border-gray-200">
              <h5 class="text-md mb-2 font-medium">General Information</h5>
              <p class="text-xs">Please fill required field</p>
            </div>
            <div class="grid md:grid-cols-3 md:gap-3 p-3">
              <div class="group">
                <label
                  for="cctv-name"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white dark:text-white"
                  >Name*</label
                >
                <input
                  type="text"
                  id="cctv-name"
                  class="border border-gray-400 text-gray-900 dark:text-white text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                  placeholder="Input CCTV Name"
                  required
                />
              </div>
              <div class="group">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Product*</label
                >
                <select
                  id="countries"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5"
                >
                  <option value="" disabled selected>Select Product</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <div class="group">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >License ID*</label
                >
                <select
                  id="countries"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5"
                >
                  <option value="" disabled selected>Select License ID</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <div class="group col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Dinas*</label
                >
                <select
                  id="countries"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5"
                >
                  <option value="" disabled selected>Select Dinas</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <div class="group">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Alive Status*</label
                >
                <label class="flex cursor-pointer select-none items-center">
                  <div class="relative">
                    <input type="checkbox" class="sr-only" @change="handleCheckboxChange12" />
                    <div
                      class="block h-8 w-14 rounded-full"
                      :class="isChecked ? 'bg-[#4B8EE6]' : 'bg-[#E5E7EB]'"
                    ></div>
                    <div
                      class="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition duration-300"
                      :class="{ 'translate-x-full': isChecked }"
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-black rounded-lg basis-1/2">
            <div class="p-3 rounded-t-lg bg-[#F8FAFC] dark:bg-black border-b-2 border-gray-200">
              <h5 class="text-md mb-2 font-medium">Location Information</h5>
              <p class="text-xs">Please fill required field</p>
            </div>
            <div class="grid md:grid-cols-3 md:gap-3 p-3">
              <div class="group">
                <label
                  for="cctv-name"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Kotamadya*</label
                >
                <input
                  type="text"
                  id="cctv-name"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                  placeholder="Select Kotamadya"
                  required
                />
              </div>
              <div class="group">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Site*</label
                >
                <select
                  id="countries"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5"
                >
                  <option value="" disabled selected>Select Site</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <div class="group">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Latitude**</label
                >
                <input
                  type="text"
                  id="cctv-name"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                  placeholder="Input Latitude"
                  required
                />
              </div>
              <div class="group col-span-3">
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                  >Longtitude*</label
                >
                <input
                  type="text"
                  id="cctv-name"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                  placeholder="Input Longtitude"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-black rounded-lg">
          <div class="p-3 rounded-t-lg bg-[#F8FAFC] dark:bg-black border-b-2 border-gray-200">
            <h5 class="text-md mb-2 font-medium">Stream Information</h5>
            <p class="text-xs">Please fill required field</p>
          </div>
          <div class="grid md:grid-cols-4 md:gap-3 p-3">
            <div class="group">
              <label
                for="cctv-name"
                class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                >RTSP*</label
              >
              <input
                type="text"
                id="cctv-name"
                class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                placeholder="Input RTSP"
                required
              />
            </div>
            <div class="group">
              <label
                for="cctv-name"
                class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                >Embed*</label
              >
              <input
                type="text"
                id="cctv-name"
                class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                placeholder="Input Embed"
                required
              />
            </div>
            <div class="group">
              <label
                for="cctv-name"
                class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                >IP CCTV</label
              >
              <input
                type="text"
                id="cctv-name"
                class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                placeholder="Input IP CCTV "
                required
              />
            </div>
            <div class="group">
              <label
                for="cctv-name"
                class="block mb-2 text-sm font-semibold text-[#1C2B4F] dark:text-white"
                >IP Server</label
              >
              <input
                type="text"
                id="cctv-name"
                class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                placeholder="Input IP Server"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
