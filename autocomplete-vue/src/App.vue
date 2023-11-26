<script setup>
import countries from './data/countries.json'
import Autocomplete from './components/autocomplete/Autocomplete.vue';
import { ref } from 'vue';
const country = ref('')
</script>

<template>
  <div>
    <h1>Selected {{ country }}</h1>
    <Autocomplete :source="countries" v-model="country" />
  <div class="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
    <div class="w-1/3">
      <h1 class="text-center mb-3 font-bold">Selected {{ country }}</h1>
      <Autocomplete :source="countries" v-model="country" />
    </div>
  </div>
  </div>
</template>

<style scoped>
</style>
