<script setup>
import { inject } from 'vue';


const profile = inject('key_profile')
</script>

<template>
	<h1>Profile</h1>
	<p>Name : {{ profile.name }}</p>
	<p>Email : {{ profile.email }}</p>
</template>