<script setup>
import { inject } from 'vue';


 const profile = inject('key_profile')
</script>

<template>
	<h1>Profile Address : {{ profile.name }}</h1>
	<p>Jl. Jend. Sudirman No. 58, Manggarai Barat, JT 96975</p>
</template>