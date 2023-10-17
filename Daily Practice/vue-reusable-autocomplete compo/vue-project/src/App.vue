<template>
  <div>
  <Autocomplete :source="countries" v-model="country"/>
  <h1>Selected{{ country }} </h1>
</div>
</template>

<script setup>
import Autocomplete from './components/autocomplete/Autocomplete.vue';
import countries from './data/countries.json'
import { ref } from 'vue'

const country = ref('')

</script>

<style scoped>

</style>