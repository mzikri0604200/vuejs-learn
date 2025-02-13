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
  <button
    :disabled
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30 text-xs"
  >
    <!-- {{ props.title }} -->
    {{ title }}
  </button>
</template>
