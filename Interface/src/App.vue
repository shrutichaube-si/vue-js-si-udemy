<template>
<div v-if="showLoginPage" >
  <MatchInterface/>
</div>
<div v-else>
  <LoginPage />
</div> 
</template>
<script>
import LoginPage from './components/LoginPage.vue';
import MatchInterface from './components/MatchInterface.vue';
export default {
  components:{LoginPage,MatchInterface},
  data(){
    return{
      showLoginPage : sessionStorage.getItem("login") ==='true' ? true:false
    }
  }
}
</script>