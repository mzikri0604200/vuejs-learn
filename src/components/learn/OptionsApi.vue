<script>
export default {
  data() {
    return {
      name: 'Balitower Balifiber',
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    },
  },
}
</script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <h1 class="text-4xl font-semibold">{{ name }}</h1>

    <button
      @click="showName"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Show Name Options Api
    </button>
  </div>
</template>
