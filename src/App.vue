<script setup>
import HeroSection from './components/HeroSection.vue'
import NavbarTop from './components/NavbarTop.vue'
</script>

<template>
  <NavbarTop />
  <HeroSection />

  <section class="max-w-screen-xl mx-auto py-8 px-4">
    <h3 class="text-xl font-medium leading-tight mb-7">Form Add Master</h3>
    <form class="">
      <div class="grid md:grid-cols-2 md:gap-6">
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
            >Product**</label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-teal-500 focus:outline-none focus:ring-blue-100 block w-full p-2.5"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </section>
</template>
