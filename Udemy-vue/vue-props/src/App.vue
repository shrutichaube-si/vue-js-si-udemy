<template>
 
 <cards-data :names="names" :age="3"></cards-data>
 <names-list :players="players"></names-list>
</template>
<script>
import CardsData from './components/CardsData.vue'
import CardsDataVue from './components/CardsData.vue'
import NamesList from './components/NamesList.vue';


export default{
  components: { CardsData, NamesList },
  data:()=>({
    components:{CardsDataVue},
     names:["shruti","aditya","dhruv","vivek"],
     players:["virat","kohli","msdhoni"]
  })
}
</script>
<style scoped>

</style>
