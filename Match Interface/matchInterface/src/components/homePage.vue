<template>
    <header class="site-header">
            <div class="container-fluid clearfix">
                <div class="pull-left">
                    <div class="site-logo">
                        <h1 class="logo">
                            <a><span>Sportz Interactive</span></a>
                        </h1>
                    </div>
                </div>
                <div class="pull-right right-wrap"><label>Match File Dashboard</label><span><button @click="logout"  type="button" class="logout-btn"></button></span></div>
            </div>
    </header>
    

</template>
<script>
import "../style/homepage.css";

export default {
    data:()=>({

    }),
    methods:{
        logout(){
            
        }
    }

}
</script>