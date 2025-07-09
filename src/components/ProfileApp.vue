<script setup>
import { provide, reactive } from 'vue';
import Profile from './Profile.vue';
import ProfileAddress from './ProfileAddress.vue';


const dataProfile = reactive({
	name: 'Surya Bali',
	email: 'suryabali@gmail.com'
})

provide('key_profile', dataProfile)
</script>

<template>
	<input type="text" v-model="dataProfile.name" placeholder="nNme">
	<Profile/>
	<ProfileAddress/>
</template>