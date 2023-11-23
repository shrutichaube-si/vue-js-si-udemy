<template>
 <div class="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
    <div class="w-1/3">
      <h1 class="text-center mb-3 font-bold">Selected {{ country }}</h1>
      
      <auto-complete :source="countries" v-model="country"></auto-complete>
    </div>
  </div>
</template>
<script setup>
import countries from './data/countries.json'
import AutoComplete from './components/autocomplete/AutoComplete.vue';
import { ref } from 'vue';

const country=ref('')
</script>
<style scoped>

</style>
