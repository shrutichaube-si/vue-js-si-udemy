<template>
  <h1>{{ title }}</h1>

  <child-list v-on:changeTitle="updateTitle($event)"></child-list>

</template>

<script>
import ChildList from './components/ChildList.vue';

export default{
  data:()=>({
   title:"Parent Component"
  }),
  methods:{
    updateTitle(title){
      this.title = title
    }
  },
  components: { ChildList },
 
}
</script>
