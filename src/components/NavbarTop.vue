<script setup>
import { ref, watch } from 'vue'

const isSidebarOpen = ref(false)
const isDarkMode = ref(false)

const toggleDrawer = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark') // Aktifkan mode dark
    document.documentElement.classList.remove('light') // Nonaktifkan mode light
  } else {
    document.documentElement.classList.add('light') // Aktifkan mode light
    document.documentElement.classList.remove('dark') // Nonaktifkan mode dark
  }
})
</script>

<template>
  <nav class="bg-[#1C2B4F]/50 sticky w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a
        href="https://www.balitower.co.id/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="https://img.logoipsum.com/288.svg" class="h-10" alt="Balitower Logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Balitower</span
        > -->
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
        <ToggleSwitch v-model="isDarkMode">
          <template #handle="{ checked }">
            <i :class="['!text-xs pi', { 'pi-sun': checked, 'pi-moon': !checked }]" />
          </template>
        </ToggleSwitch>

        <button
          type="button"
          @click="toggleDrawer"
          class="text-white font-medium rounded-md text-sm px-4 py-2 text-center"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <div
    id="hs-offcanvas-right"
    class="hs-overlay hs-overlay-open:translate-x-0 fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
    :class="{ 'translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-offcanvas-right-label"
  >
    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
      <h3 id="hs-offcanvas-right-label" class="font-bold text-gray-800 dark:text-white">
        Offcanvas title
      </h3>
      <button
        type="button"
        class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
        aria-label="Close"
        @click="toggleDrawer"
        data-hs-overlay="#hs-offcanvas-right"
      >
        <span class="sr-only">Close</span>
        <svg
          class="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>
    <div class="p-4">
      <p class="text-gray-800 dark:text-neutral-400">
        Some text as placeholder. In real life you can have the elements you have chosen. Like,
        text, images, lists, etc.
      </p>
    </div>
  </div>
</template>
