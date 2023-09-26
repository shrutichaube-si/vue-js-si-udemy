<script>
import TagsInput from './components/TagsInput.vue';
export default{
  components:{
    TagsInput
  }
}
</script>

<template>
  <h1>hello world</h1>
  <tags-input :selected-tags="jsFramework"/>
 
  
</template>

<style>
#app{
  color: cadetblue;
  margin-top: 60px;
}
</style>
