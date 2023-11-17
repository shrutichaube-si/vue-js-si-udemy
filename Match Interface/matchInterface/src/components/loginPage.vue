<template>
  <div v-if="!loginpage">
    <link rel="stylesheet" href="style.css">
    <div class="login-wrap">
<div class="site-logo"></div>	
<div class="site-title">Match File Dashboard</div>	
<div class="login-inner">
    <div class="form">
        <div class="login-form">
            <input type="text" v-model="email" placeholder="username" id="username" required="">
            <input type="password" v-model="password" placeholder="password" id="password" required="">
            <button v-on:click="login" id="login-btn" >LOGIN</button>
            <div class="error-msg"></div>
        </div>
    </div>
</div>
</div>
</div>
 
<div v-if="loginpage">
<h1>welcome to home page</h1>
<button @click="logout">Logout</button>
 </div>
</template>

<script>

import config from '../../config/config';
export default {
  
  data(){
    return {
        email:'',
        password:'',
        loginpage:false
    }
  },
  methods: {
    login() {
      // sessionStorage.setItem("email", this.email);
      //sessionStorage.setItem("password",this.password);
     
        if(this.email==config.cred.username && this.password==config.cred.password){
         this.loginpage=true
            alert("login successful");
        }else{
            alert('invalid user');
        }
    },
    logout(){
       this.loginpage=false
    }
  }
};
</script>