<template>
    <h2>Hello</h2>
    <button @click="logout">LogOut</button>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
            sessionStorage.setItem("login","false")
            window.location.reload()
        }
    }
}
</script>