<template>
  <!-- <div> Hello world</div> -->
 <cards-data :names="names" :age="3"></cards-data>
</template>
<script>
import CardsData from './components/CardsData.vue'
import CardsDataVue from './components/CardsData.vue'

export default{
  components: { CardsData },
  data:()=>({
    components:{CardsDataVue},
     names:["shruti","aditya","dhruv","vivek"],
     
  })
}
</script>
<style scoped>

</style>
