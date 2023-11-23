<template>
<div>
   
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
		<div class="si-match-schedule-container"></div>
		<div class="match-schedule-container">
<div class="login-wrap">
<div class="site-logo"></div>	
<div class="site-title">Match File Dashboard</div>	
	<div class="login-inner">
	    <div class="form">
	        <form class="login-form">
	            <input  v-model="name" type="text" placeholder="username" id="username" required="">
	            <input  v-model="password" type="password" placeholder="password" id="password" required="">
	            <button @click = "authentication" type="submit" id="login-btn">LOGIN</button>
	            <div class="error-msg"></div>
	        </form>
	    </div>
	</div>
</div>
</div>
</div>	
</template>
<script>
import Loggedin from "./Loggedin.vue"
import config from "../../config/config"
export default{

data() {
      return{
     name :'',
     password :'',
  
  
    }
},

methods: {
    authentication(){
       if (this.name == config.data.name && this.password == config.data.password) 
       {
        alert("Validation successful")
        sessionStorage.setItem("username", this.name);
        // sessionStorage.setItem("password", this.password);
        this.$router.push("/home");
       }else{
        alert("validation unsuccessful")
       }
    }
}
}
</script>