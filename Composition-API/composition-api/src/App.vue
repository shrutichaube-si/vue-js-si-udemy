<script >
   
   import { ref,reactive,toRef,toRefs } from 'vue';
   export default {

    setup()
    {
       const message = ref("Hello Sushma")
       const quantity = ref(1)
       const item = reactive({
        namee: "Product 1",
        price:10
       })
       
       const increment = () => quantity.value ++

       const decrement = () => quantity.value --

       const swapProduct = () =>
       {
         item.namee  = "Product A"
         item.price = 30
       }


      //  const nameRef  = toRef(item ,'name');
      //  console.log('nameRef:', nameRef.value)

      //  item.name ="New Product "
      //  console.log('nameRef:' , nameRef.value)

      // const itemRefs =  toRefs(item)
      
      // console.log('name:',itemRefs.name.value)
      // console.log('price:',itemRefs.price.value)
      

      // item.name = "Amazon Product"
      // item.price = 70
      
      // console.log('name:' , itemRefs.name.value)
      // console.log('price:' , itemRefs.price.value)

       return{
         message,
         quantity,
         increment,
         decrement,
        //  item,
         swapProduct,
        //  namee,   
        //  price

       }
    }
   }

</script>

<template>
<div>
<h1>
  {{ message }}
</h1>  
  <!-- <input type = "text" v-model ="message"/> -->
  <h1>{{quantity}}</h1>
  <button @click ="increment">+</button>
  <button @click ="decrement">-</button>
<h1>******************</h1>
<!-- <h1>{{ namee }} : {{ price }}</h1> -->
  <button @click = "swapProduct">Swap Products</button>
</div> 
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
