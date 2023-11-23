<template>
  <div v-if="checkStatus=='logout'">
    <login-page></login-page>
  </div>
  <div v-else>
    <!-- <home-page @emitStatus="changeStatus"></home-page> -->
    <home-page></home-page>
  </div>
</template>
<script>
import HomePage from "./components/homePage.vue";
import loginPage from "./components/loginPage.vue";
export default {
  components: { loginPage, HomePage },
  data:()=>({
      status:null                                                                                
  }),
  computed:{
    checkStatus(){
      
      return this.status
    }
  },
  methods:{
    changeStatus(e){
      this.status = e
    }
  },
  mounted : function(){
    this.status = sessionStorage.getItem("status") || "logout"
    
  }
};
</script>