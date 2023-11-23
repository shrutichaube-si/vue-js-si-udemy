<template>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message"/>
    <h2>{{ item.Name }}:{{ item.Price}} :{{ item.quant }}</h2>
    <button @click="ProductSwap"> click</button>
    <h2>{{ quantity }} using ref</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
      <br/>
  <h2>{{ quant }} using reactive</h2>
    <button @click="incre">+</button>
    <button @click="decre">-</button>
    <h3>{{ total }}</h3>
    <student-data></student-data>
  </template>
  <script>
  import { computed, reactive, ref,watch,watchEffect } from 'vue';
  import StudentData from './components/StudentData.vue';
  export default{
    components: { StudentData},
    setup(){
      const message = ref("hello")
      let quantity = ref(1)
  
      const item=reactive({
        Name:"Product 1",
        Price:10,
        quant:1,
      })
      const increment =()=> quantity.value++
      const decrement = ()=> quantity.value--
  
      const incre =()=> item.quant++
      const decre = ()=> item.quant--
  
      const ProductSwap =()=>{
        item.Name="Product A",
        item.Price=30
        item.quant=5
      }
       const total =computed(()=> item.Price*quantity.value)
  
      //  watch(total,(newValue,oldValue)=>{
      //   console.log('newValue',newValue)
      //   console.log('oldValue',oldValue)
      //  },{immediate:true})
  
      watch(()=>item.quant,()=>{
        if(item.quantity===5){
          alert('cannot add more items here')
        }
      },{immediate:true}),
  
      watchEffect(()=>{
        console.log("price changed:",item.Price)
      })
  
      return{   
        message,quantity,increment,decrement,item,ProductSwap, total,incre,decre
      }
    }
  }
  </script>
  <style scoped>
  
  </style>
