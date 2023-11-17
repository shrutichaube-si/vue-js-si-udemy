<template>
<div v-if="showLoginPage" >
  <HomePage/>
</div>
<div v-else>
  <LoginPage  />
</div> 
</template>
<script>
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
export default {
  components:{LoginPage,HomePage},
  data(){
    return{
      showLoginPage : sessionStorage.getItem("login") ==='true' ? true:false
    }
  }
}
</script>