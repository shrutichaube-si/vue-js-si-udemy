<template>
  <h1>Standings</h1>
  <home-page></home-page>
</template>

<script>
import HomePage from './components/HomePage.vue';
export default{
components: { HomePage },
}
</script>

<style>
@import "./components/standings.css";
h1{
  background-color: blue;
 
}
</style>