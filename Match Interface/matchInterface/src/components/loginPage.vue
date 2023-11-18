<template>
  <div class="si-match-schedule-container"></div>
  <div class="match-schedule-container">

    <div v-if="!loginpage">
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
  </div>
  
  <div v-if="loginpage">
    <h1>welcome to home page</h1>
    <button @click="logout">Logout</button>
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
      loginpage: false,
    };
  },
  methods: {
    login() {
      if (this.email == config.cred.username && this.password == config.cred.password) {
        //this.loginpage = true;
        sessionStorage.setItem("login","true")
        alert("login successful");
      } else {
        alert("invalid user");
      }
    },
    // logout() {
    //   this.loginpage = false;
    // },
  },
};
</script>