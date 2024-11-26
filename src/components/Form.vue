<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <section class="bg-[#ECEFF5]">
    <div class="max-w-screen-xl mx-auto py-8 px-4">
      <h3 class="text-2xl font-medium leading-tight mb-4">Form Add Master</h3>
      <form class="">
        <div class="flex flex-row gap-4 w-100 mb-4">
          <div class="bg-white rounded-lg basis-1/2">
            <div class="p-3 rounded-t-lg bg-[#F8FAFC] border-b-2 border-gray-200">
              <h5 class="text-md mb-2 font-medium">General Information</h5>
              <p class="text-xs">Please fill required field</p>
            </div>
            <div class="grid md:grid-cols-3 md:gap-3 p-3">
              <div class="group">
                <label for="cctv-name" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
                  >Name*</label
                >
                <input
                  type="text"
                  id="cctv-name"
                  class="border border-gray-400 text-gray-900 text-sm rounded-md focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5 placeholder-gray-400"
                  placeholder="Input CCTV Name"
                  required
                />
              </div>
              <div class="group">
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
                  >Alive Status*</label
                >
                <label class="flex cursor-pointer select-none items-center">
                  <div class="relative">
                    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
                    <div
                      class="block h-8 w-14 rounded-full bg-[#E5E7EB]"
                      :class="{ 'bg-[#4B8EE6]': isChecked }"
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
          <div class="bg-white rounded-lg basis-1/2">
            <div class="p-3 rounded-t-lg bg-[#F8FAFC] border-b-2 border-gray-200">
              <h5 class="text-md mb-2 font-medium">Location Information</h5>
              <p class="text-xs">Please fill required field</p>
            </div>
            <div class="grid md:grid-cols-3 md:gap-3 p-3">
              <div class="group">
                <label for="cctv-name" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
                <label for="email" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
        <div class="bg-white rounded-lg">
          <div class="p-3 rounded-t-lg bg-[#F8FAFC] border-b-2 border-gray-200">
            <h5 class="text-md mb-2 font-medium">Stream Information</h5>
            <p class="text-xs">Please fill required field</p>
          </div>
          <div class="grid md:grid-cols-4 md:gap-3 p-3">
            <div class="group">
              <label for="cctv-name" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
              <label for="cctv-name" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
              <label for="cctv-name" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
              <label for="cctv-name" class="block mb-2 text-sm font-semibold text-[#1C2B4F]"
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
