<template>
  <h1>{{ message }}</h1>
  <input type="text" v-model="message"/>
  <h2>{{ item.Name }}:{{ item.Price}}</h2>
  <button @click="ProductSwap"> click</button>
  <h2>{{ quantity }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <student-data></student-data>
</template>
<script>
import { reactive, ref } from 'vue';
import StudentData from './components/StudentData.vue';
export default{
  components: { StudentData},
  setup(){
    const message = ref("hello")
    let quantity = ref(1)

    const item=reactive({
      Name:"Product 1",
      Price:10
    })
    const increment =()=> quantity.value++
    const decrement = ()=> quantity.value--

    const ProductSwap =()=>{
      item.Name="Product A",
      item.Price=30
    }
    return{
      message,quantity,increment,decrement,item,ProductSwap
    }
  }
}
</script>
<style scoped>

</style>