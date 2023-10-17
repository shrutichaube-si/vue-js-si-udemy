<script>
//import { computed, ref, reactive, toRef, toRefs, watch, watchEffect } from 'vue'
import { ref } from 'vue';
import CartItem from './components/CartItem.vue';
import useCart from './useCart';
export default {
  components: { CartItem },
  setup () {
    const {items,addItem,removeItem }=useCart()
    // const item = reactive({
    //   name: "Product 1",
    //   price: 10,
    //   quantity: 1
    // })
    // const increment = () => item.quantity++
    
    // const decrement = () => item.quantity--
    // const swapProduct = () => {
    //   item.name = "Product A"
    //   item.price = 30
    // }
    // const total = computed(() => item.price * item.quantity)
    // const { name, price, quantity } = toRefs(item)
    // watch(() => item.quantity, () => {
    //   if (item.quantity === 5) {
    //     alert("you cannot add more item")

    addItem ({
      
        id: 1,
        name: "Product X",
        price: 20,
        quantity: 1
      
    })
    

    // const handleRemove = (data) => items.value.splice(0,1)// splice adds or remove array element
    return { items ,removeItem}
    // } { immediate: true })
    // watchEffect(() => {
    //   console.log('Price changed: ', item.price)
    // })
    
    // return {
    //   quantity,
    //   increment,
    //   decrement,
    //   name,
    //   price,
    //   total,
    //   swapProduct
    // }
   // return { items }
  }
}
</script>

<template>
  <div>
  <!-- <h1>{{ name }} : {{ price }}</h1>
  <button @click="swapProduct">Swap product</button>
  <button @click="price++">Increment price</button>

  <h2>{{ quantity }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>

  <h3>Total: {{ total }}</h3> -->
  <CartItem v-for="item in items" :cart-item="item" :key="item.id" @remove="removeItem" />
</div>
</template>

<style scoped>
</style>

<!-- Lifecycyle hooks -->
<!-- (in vue 3 as *, it is )
Creation -
*onMounted - it starts the Main DOM.
*onupdated- it is call when the component re-renders due to changes in reactive dependancies.
Destruction -
*onunmounted- call when component is destroyed  and remove from the DOM
--->

<!--composable function:-a function that leverages Vue's Composition API to encapsulate and reuse stateful logic -->