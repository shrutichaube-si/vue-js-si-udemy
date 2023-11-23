<template>
<div v-if="showLoginPage" >
  <!-- <HomePage/> -->
  <MatchInterface/>
</div>
<div v-else>
  <LoginPage />
</div> 
</template>
<script>
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import MatchInterface from './components/MatchInterface.vue';
export default {
  components:{LoginPage,HomePage,MatchInterface},
  data(){
    return{
      showLoginPage : sessionStorage.getItem("login") ==='true' ? true:false
    }
  }
}
</script>