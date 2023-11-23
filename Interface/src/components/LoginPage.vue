<template>
    <title>Match List</title>
    <link rel="stylesheet" href="css/login.css">
     <header class="site-header">
                <div class="container-fluid clearfix">
                    <div class="pull-left">
                        <div class="site-logo">
                            <h1 class="logo">
                                <a href="#"><span>Sportz Interactive</span></a>
                            </h1>
                        </div>
                    </div>
                    <div class="pull-right right-wrap"><label>Match File Dashboard</label><span><button type="button" class="logout-btn"></button></span></div>
                </div>
        </header>
    <link rel="stylesheet" type="text/css" href="/src/styles/Login.css"/>
    <div class="match-schedule-container">
<div class="login-wrap">
<div class="site-logo"></div>	
<div class="site-title">Match File Dashboard</div>	
	<div class="login-inner">
	    <div class="form">
	        <form class="login-form" >
	            <input v-model="username" type="text" placeholder="username" id="username" required="">
	            <input v-model="password" type="password" placeholder="password" id="password" required="">
	            <button type="submit" id="login-btn" @click.prevent="login">LOGIN</button>
	            <div class="error-msg">{{ errorMssg }}</div>
	        </form>
	    </div>
	</div>
</div>
</div>
</template>
<script>
import config from "../JS/config"
export default {
    data(){
        return{
        username:"",
        password:"",
        errorMssg:""
        }
    },
    methods:{
        login(){
            let credentialsFound = config.admin.find(credentials=>{
                if(this.username === credentials.username && this.password === credentials.password){
                    return true
                }
            });
            if(credentialsFound){
                sessionStorage.setItem("login","true")
                window.location.reload();
            }else{
                this.errorMssg = "Invalid UserName and Password!"
            }
        }
    },   
}
</script>


