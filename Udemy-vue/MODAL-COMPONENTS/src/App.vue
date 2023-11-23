<template>
  <div>
    <button @click="showModal=true">Show Modal</button>
    <modal-comp :show="showModal" @close="showModal=false">
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit esse repudiandae nam error nostrum, magni
        odit voluptates saepe omnis provident modi molestias? Repellat, possimus! Alias sequi inventore ab. Excepturi!</p>
    </modal-comp>
  </div>
</template>

<script setup> 
import ModalComp from './components/Modal/ModalComp.vue'
import { ref } from 'vue';
const showModal = ref(false)
</script>
<style scoped></style>
