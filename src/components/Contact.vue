<script setup>
import { reactive } from 'vue';
import ContactForm from './ContactForm.vue';
import ContactList from './ContactList.vue';

const contact = reactive({
  name: '',
  email: '',
  age: 0,
  type: 'Reguler',
  complain: false,
  message: '',
});
</script>
<template>
  <ContactForm v-model="contact" />
  <ContactList v-model:name.uppercase="contact.name" v-model:email="contact.email" v-model:age="contact.age" v-model:type="contact.type" v-model:complain="contact.complain" v-model:message="contact.message" />

  <!-- <h1>Preview</h1>
  <div>
    <p>Name: {{ contact.name }}</p>
    <p>Email: {{ contact.email }}</p>
    <p>Age: {{ contact.age }}</p>
    <p>Type: {{ contact.type }}</p>
    <p>Complain: {{ contact.complain }}</p>
    <p>Message: {{ contact.message }}</p>
  </div> -->
</template>
<style scoped></style>
