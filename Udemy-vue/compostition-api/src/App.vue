<template>
  <h1>Hello world</h1>
  <cartt-item v-for="item in items" :cartItem="item" :key="item.id"></cartt-item>
</template>
<script>
import CarttItem from './components/CarttItem.vue';
import { Ref } from 'vue';
export default{
components:{CarttItem},
setup(){
  const items=Ref([
    {
      id:1,
      name:"Product 1",
      price:20,
      quantity:1
    }
  ])
  return {items}
}
}
</script>
<style scoped>
</style>