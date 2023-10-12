<template>
  <h1>{{ message }}</h1>
  <h2>{{ quantity }}</h2>
  <h2>{{ total }}</h2>
  <h1>{{ item.name }}:  {{ item.price }}</h1>
  <button @click="swapProduct">swapProduct</button>
  <button @click="item.price++">Increment price</button>
  <input type="text" v-model="message"/>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
import {watch,computed, ref , reactive,watchEffect } from 'vue';
export default {
  setup () {
    const message =ref ("Darpan") 

    const quantity = ref(1)
    const item = reactive ({
      name: "laptop 1",
      price : 10
    })

    const increment = () => quantity.value++
    const decrement= () => quantity.value--
    const swapProduct = () => {
      item.name = "Hp Du2077TU",
      item.price = 54000
    }

    const total = computed (() => item.price * quantity.value)
    //  watch(total, (newValue, oldValue) => {
    //   console.log('newValue', newValue),
    //   console.log('oldValue', oldValue)
    // })


    watch(() => quantity.value, () => {
      if (quantity.value == 5) {
        alert("You cannot add more no init")
      }
    }, { immediate: true })
    watchEffect (()=> {
      console.log('price changed:', item.price)
    })

    return  {
    message,
    quantity,
    increment,
    decrement,
    item,
    swapProduct,
    total
  }
  }
  
  }
</script>

<style>

</style>