<template>
  <div>
    <h1>Selected{{ country }}</h1>
    <Autocomplete  :source ="countries"  v-model ="country"/>
  </div>
</template>


<script setup>
import {ref} from 'vue';
 import countries from './data/countries.json'
  import Autocomplete from './components/autocomplete/Autocomplete.vue';


  const country = ref('')
</script>
<style >

</style>