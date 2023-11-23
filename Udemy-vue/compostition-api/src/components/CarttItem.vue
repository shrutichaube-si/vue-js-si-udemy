<template>
     <h1>{{ name }}:{{ price }}:{{ quantity }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h3> Total:{{ total }}</h3>
  </template>

  <script>
  import { computed, reactive ,toRefs} from 'vue';
  export default{
   props:{
       cartItem:{
        type:Object,
        required:true
       }
   },
    setup(props){
       console.log(props.cartItem) 
       
    const item=reactive({
        name:"Product 1",
        price:10,
        quantity:1,
      })
      const increment =()=> item.quantity++
      const decrement = ()=> item.quantity--

       const total =computed(()=> item.price * item.quantity)
       const {name,price,quantity} = toRefs(item)
     return {
        quantity,increment,decrement,name,price,total
     }
    }
  }
  </script>
  <style scoped>
  
  </style>
  
  