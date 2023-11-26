<script setup>
import Dropdown from './components/dropdown.vue';
import DropdownItem from './components/DropdownItem.vue';
import DropdownTrigger from './components/DropdownTrigger.vue';
</script>

<template>
  <div class="center">
    <Dropdown>
      <template v-slot:trigger="{ toggleClass, toggle }">
        <DropdownTrigger class="btn btn-secondary" :class="toggleClass" @click="toggle" type="button">
          Dropdown button
        </DropdownTrigger>
      </template>
      <template v-slot:menu="{ toggle }">
        <DropdownItem href="#" @click.prevent="toggle">Action</DropdownItem>
        <DropdownItem href="#" @click.prevent="toggle">Another action</DropdownItem>
        <DropdownItem href="#" @click.prevent="toggle">Something else here</DropdownItem>
      </template>
    </Dropdown>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>