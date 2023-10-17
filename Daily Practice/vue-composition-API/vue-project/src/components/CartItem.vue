<!-- <template>
    <div>
    <h1>{{ message }}</h1>
    <h2>{{ quantity }}</h2>
    <h2>{{ total }}</h2>
    <h1>{{ item.name }}:  {{ item.price }}</h1>
    <! <button @click="swapProduct">swapProduct</button>
    <button @click="item.price++">Increment price</button> -->
    <!-- <input type="text" v-model="message"/>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div> -->
  <!-- </template> -->
  
  <!-- <script>
  import {watch,computed, ref , reactive,watchEffect } from 'vue';
  export default {
    props: {
        cartItem: {
            type: Object,
            required: true
        }
    }, 
    setup (props) {
        consoel,log(props.cartItem)
      const message =ref ("Darpan") 
  
      const quantity = ref(1)
      const item = reactive ({
        name: "laptop 1",
        price : 10
      })
  
      const increment = () => quantity.value++
      const decrement= () => quantity.value-- -->
    <!-- //   const swapProduct = () => {
    //     item.name = "Hp Du2077TU",
    //     item.price = 54000
    //   }
  
      const total = computed (() => item.price * quantity.value)
      //  watch(total, (newValue, oldValue) => {
      //   console.log('newValue', newValue),
      //   console.log('oldValue', oldValue)
      // })
  
  
    //   watch(() => quantity.value, () => {
    //     if (quantity.value == 5) {
    //       alert("You cannot add more no init")
    //     }
    //   }, { immediate: true })
    //   watchEffect (()=> {
    //     console.log('price changed:', item.price)
    //   })
  
      return  {
      message,
      quantity,
      increment,
      decrement,
      item,
    //   swapProduct,
      total
    }
    }
    
    } -->
  <!-- </script>
  
  <style>
  
  </style> --> 


  <script>
import { computed, reactive, toRefs,onMounted, onUpdated, onUnmounted} from 'vue'
export default {
    props: {
        cartItem: {
            type: Object,
            required: true
        }
    },
    emits: ['remove'],
  setup (props ,{ emit }) {
    const item = reactive(props.cartItem)
    const increment = () => item.quantity++
    
    const decrement = () => item.quantity--
    const total = computed(() => item.price * item.quantity)
    const { name, price, quantity } = toRefs(item)
    const remove = () => emit('remove', item) 

    onMounted (() => {
      console.log ('Cart Item component mounted')
    })
    onUpdated (() => {
      console.log ('Cart Item updated')
    })
    onUnmounted (() => {
      console.log ('Cart Item unmounted')
    })
    return {
      quantity,
      increment,
      decrement,
      name,
      price,
      total,
      remove
    }
  }
}
</script>

<template>
    <div>
  <h1>{{ name }} : {{ price }} : {{ quantity }}</h1>

  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="remove">Remove</button>

  <h3>Total: {{ total }}</h3>
</div>
</template>

<style scoped>
</style>