<template>
  <nav
    class="
      navbar navbar-light
      bg-white
      navbar-expand-lg
      border-bottom
      fixed-top
    "
  >

    <div class="container">
      <a class="navbar-brand" href="/"><strong>Vue</strong>Drive</a>
     
<div id="search-form"></div>
      <!-- <SearchForm v-model="q"/> -->
     
    </div>
  </nav>
</template>
<!-- <script>
import SearchForm from './SearchForm.vue';
import { ref,watchEffect } from 'vue'
export default{
 components:{SearchForm},
 setup() {
   const q = ref("");
   
   watchEffect(() => console.log('q', q.value)); 
   return{ q };
 }
}
</script> -->
