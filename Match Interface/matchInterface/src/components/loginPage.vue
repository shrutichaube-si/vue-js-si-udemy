<template>
  <div>
    <div class="login-wrap">
      <div class="site-logo"></div>
      <div class="site-title">Match File Dashboard</div>
      <div class="login-inner">
        <div class="form">
          <div class="login-form">
            <input type="text" v-model="email" placeholder="username" id="username" required="" />
            <input type="password" v-model="password" placeholder="password" id="password" required="" />
            <button v-on:click="login" id="login-btn">LOGIN</button>
            <div class="error-msg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../style/style.css";
import config from "../../config/config";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      try{
        if (this.email == config.cred.username && this.password == config.cred.password) {
        sessionStorage.setItem("status", "login")
        window.location.reload();
        alert("login successful");
      } else {
        alert("invalid user");
      }
      }catch(error){
        console.error("Eror occured",error);
      }
     
    },
  },
};
</script>