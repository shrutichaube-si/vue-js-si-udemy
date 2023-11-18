<template>
  <div>
    <login-page></login-page>
  </div>
  <div>
    <home-page></home-page>
  </div>
    
  
</template>
<script>
import HomePage from "./components/homePage.vue";
import loginPage from "./components/loginPage.vue";
export default {
  components: { loginPage, HomePage },
  data:()=>({
    
  })
};
</script>