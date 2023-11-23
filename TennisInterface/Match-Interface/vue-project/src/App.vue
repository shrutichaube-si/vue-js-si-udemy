<template>
  <div>
  <!-- <div style="width: 100vw;"> -->
  <router-view></router-view>
  {{username}}
  </div>
 
</template>
<script>
import LoginForm from "./components/LoginForm.vue"
export default {
  data (){
    return {
      name: "",
    };
  },

  
components:{
   LoginForm
},
mounted(){
 
  this.name = sessionStorage.getItem("username") || "Guest";
  console.log('=====>',this.name)
}

}
</script>