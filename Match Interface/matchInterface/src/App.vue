<template>
  <div v-if="checkLogin == 'false'">
    <login-page></login-page>
  </div>
  <div v-else>
    <home-page></home-page>
  </div>

  
</template>
<script>
import HomePage from "./components/homePage.vue";
import loginPage from "./components/loginPage.vue";
export default {
  components: { loginPage, HomePage },
  data:()=>({
   
  }),
  computed:{
    checkLogin(){
      return sessionStorage.getItem("login")
    }
  }
};
</script>