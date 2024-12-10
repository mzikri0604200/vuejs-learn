<script setup>
// const props = defineProps(['title'])
// const props = defineProps({
//   title: String,
// })
const { title, disabled = false } = defineProps({
  title: {
    type: String,
    default: 'Button',
  },
  disabled: Boolean,
})
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button
      :disabled
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30"
    >
      <!-- {{ props.title }} -->
      {{ title }}
    </button>
  </div>
</template>
