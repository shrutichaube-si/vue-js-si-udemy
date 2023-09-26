<template>
  <h1>hello world</h1>
   <PersonComp title="shruti"></PersonComp>
</template>

<script>
import PersonComp from "./components/Person.vue";
export default{
  components:{
    PersonComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
