<script>
import { ref, reactive, toRef, toRefs, computed, watch } from 'vue'

export default{
setup(){
const employee = ['emp1','emp2'];

  const message=ref("Hello world")
  const quantity = ref(1)
  const item = reactive({
    name:"Product 1",
    price:10
  })
  const increment = () => {
    quantity.value++
  }
  const decrement = () =>{
    quantity.value --
  }    

  const swapProduct = () => {
      item.name = "Product A"
      item.price = 30;
  }
 const total = computed(() => {
  item.price * quantity.value
  })

  const isEmployeePresent = computed(() =>{
 return employee.length > 0 ? 'Yes' : 'No';
  })
 


/*
  const nameRef = toRef(item, 'name');
  console.log('nameRef:',nameRef.value)
 item.name = "New Product"
 console.log('nameRef:',nameRef.value)
 */

 const itemRefs = toRefs(item)
 console.log('name:',itemRefs.name.value)
 console.log('price:',itemRefs.price.value)
item.name = "Hot Product"
item.price = 50
 console.log('name:',itemRefs.name.value)
 console.log('price:',itemRefs.price.value)

 watch(isEmployeePresent,(newValue,oldValue) => {
 console.log('newValue',newValue);
 console.log('oldValue',oldValue);
 },{immediate:true})
 
  return{
    message,
    isEmployeePresent,
    quantity,
    increment,
    decrement,
    item,
    swapProduct,
    total,
    
    employees:['emp1','emp2'],
    
  }
},
/*
 computed:{
  isEmployeesPresent(){
      return this.employees.length > 0 ? 'Yes' : 'No' 
  }
  }
  */
 

}
</script>

<template>
<h1>{{item.name}} : {{item.price}}</h1>
<button @click="swapProduct"> Swap Product</button>
<button @click="price++">increment price</button>
  <h1>{{message}}</h1>
  <h2>{{quantity}}</h2>
<button @click="increment">+</button>
<button @click="decrement">-</button>
  <input type="text" v-model="message"/>
<h3>Total: {{total}}</h3>
<h3>Employeess Present : {{isEmployeePresent}}</h3>

</template>

<style scoped>

</style>